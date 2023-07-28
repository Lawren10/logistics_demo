import { NextResponse } from "next/server";

const accountSid = "AC2e9c3fe27c1dccbb2883aa08ce5c01c9";
const authToken = "1a118377f1a933cbd22f0971dc9c3791";

const smsClient = require("twilio")(accountSid, authToken);

const messageObj = {
  body: "Hello from twilio-node testing",
  to: "+2347046220065", // Text your number
  from: "+14179295554",
};

export async function GET() {
  try {
    const messageRes = await smsClient.messages.create(messageObj);
    return NextResponse.json(messageRes);
  } catch (error) {
    return NextResponse.json(error);
  }
}
