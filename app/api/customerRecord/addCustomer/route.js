import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uuid } from "uuidv4";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  let id = uuid();
  let idArray = id.split("-");
  let idString = `CUS-${idArray[3]}-${idArray[4]}`;
  let { firstName, lastName, email, phone, Address } = body;
  let addressString = `${Address.aptNo},${Address.street},${Address.city},${Address.state}`;

  let dataResponse = await prisma.Customers.create({
    data: {
      id: idString,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: addressString,
    },
  });
  // console.log(dataResponse);
  return NextResponse.json(dataResponse);
}
