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

  let {
    batchNumber,
    shippingDate,
    deliveryMode,
    deliveryDate,
    shipmentItem,
    customerId,
    receiverDetail,
  } = body;

  let dataResponse = await prisma.Shipment.create({
    data: {
      id: idString,
      customerId,
      shipmentBatch: {
        create: {
          id: batchNumber,
          items: shipmentItem,
        },
      },
      deliveryMode,
      deliveryDate,
      shippingDate,
      receiverDetail,
      shipmentTracking: {
        create: {
          id: trackingNum,
          processing: new Date(),
          shipingProcess: 1,
        },
      },
    },
  });

  return NextResponse.json({ ...dataResponse, trackingNum });
}
