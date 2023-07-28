import { NextResponse } from "next/server";
import * as FormData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: "api",
  key: "21a0a2bb46442ec8613f8bb5e43a3978-c30053db-868383c0",
});

export async function GET() {
  try {
    const emailRes = await mg.messages.create(
      "sandboxf55422edc52b4bd6bf7c10064b959da8.mailgun.org",
      {
        from: "Excited User <mailgun@sandboxf55422edc52b4bd6bf7c10064b959da8.mailgun.org>",
        to: ["lawrenceugo10@gmail.com"],
        subject: "Hello",
        html: "<h1>Testing some Mailgun awesomeness!</h1> <p>This is an auto generated message please just allow and sont resopond to it</p>",
      }
    );

    return NextResponse.json(emailRes);
  } catch (error) {
    return NextResponse.json(error);
  }
}
