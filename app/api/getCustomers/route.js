import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const allCutomers = await prisma.customer.findMany();

  return NextResponse.json(allCutomers);
}
