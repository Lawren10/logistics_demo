import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  let { firstName, lastName, email, phone, Address } = body;
  let addressString = `${Address.aptNo},${Address.street},${Address.city},${Address.state}`;

  let dataResponse = await prisma.customer.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: addressString,
    },
  });
  console.log(dataResponse);
  return NextResponse.json(dataResponse);
}
