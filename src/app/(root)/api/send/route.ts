import React from "react";
import { Resend } from "resend";
import { EmailTemplate } from "../../../../../components/utils/Email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: any) {
  const { name, email, message, cart } = await request.json();
  try {
    const data = await resend.emails.send({
      from: "WebSite contact form <onboarding@resend.dev>",
      to: ["corentin.damas@gmail.com"],
      subject: "New message from Website",
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
        cart: cart,
      }) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
