import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        console.log(credentials);
        const adminUser = await prisma.AdminUser.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!adminUser) {
          throw new Error("no adminUser found");
        }

        let { email, hashedPassword } = adminUser;

        if (email !== credentials.email) {
          throw new Error("email does not match");
        }

        let confirmedPassword = await bcrypt.compare(
          credentials.password,
          hashedPassword
        );

        if (!confirmedPassword) {
          throw new Error("password does not match");
        }

        return adminUser;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/auth/signIn",
  },

  session: {
    strategy: "jwt",
    maxAge: 60 * 10,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token?.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
