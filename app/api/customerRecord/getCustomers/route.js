import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const allCutomers = await prisma.Customers.findMany();

  return NextResponse.json(allCutomers);
}
