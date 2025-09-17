import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Coded In Motion <onboarding@resend.dev>",
      to: "mainasara.o.olulanke@gmail.com",
      subject: `New Contact from ${name}`,
      replyTo: email,
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
