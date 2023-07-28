import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const allCutomers = await prisma.Customers.findMany();

  return NextResponse.json(allCutomers);
}

export async function POST(request) {
  let body = await request.json();
  let { uniqueParam } = body;
  const customer = await prisma.Customers.findUnique({
    where: {
      phone: uniqueParam,
    },
  });

  // console.log(body);

  return NextResponse.json(customer);
}
