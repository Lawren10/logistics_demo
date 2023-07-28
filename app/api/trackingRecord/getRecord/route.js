import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  let searchId = request.nextUrl.searchParams.get("trackingId");
  const trackingDetails = await prisma.ShipmentTracking.findUnique({
    where: {
      id: searchId,
    },
    include: {
      shipment: {
        include: {
          customer: {
            select: {
              address: true,
            },
          },
          shipmentBatch: {
            select: {
              id: true,
              items: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(trackingDetails);
}
