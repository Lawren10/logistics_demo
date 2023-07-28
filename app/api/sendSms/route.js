import { NextResponse } from "next/server";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = proces.env.TWILIO_AUTH_TOKEN;

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
