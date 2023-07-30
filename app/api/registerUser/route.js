import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { uuid } from "uuidv4";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  let { firstName, lastName, email, password } = body;
  let hashedPassword = await bcrypt.hash(password, 10);
  let id = uuid();
  let idArray = id.split("-");
  let idString = `ADMIN-${idArray[3]}-${idArray[4]}`;

  let adminRes = await prisma.AdminUser.create({
    data: {
      id: idString,
      firstName,
      lastName,
      email,
      hashedPassword,
    },
  });

  return NextResponse.json(adminRes);
}
