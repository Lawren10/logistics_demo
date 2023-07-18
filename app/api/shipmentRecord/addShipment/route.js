import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uuid } from "uuidv4";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  let id = uuid();
  let idArray = id.split("-");
  let idString = `SHP-${idArray[3]}-${idArray[4]}`;
  let trackingNum = `TRC-${idArray[1]}${idArray[2]}-${idArray[4]}`;

  body.id = idString;
  body.trackingNumber = trackingNum;

  // let dataResponse = await prisma.Shipment.create({
  //   data: {
  //     id: idString,
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     phone: phone,
  //     address: addressString,
  //   },
  // });
  // console.log(dataResponse);
  return NextResponse.json(body);
}
