"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLenght: number) => {
  if (!value || typeof value !== "string" || value.length > maxLenght) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  console.log(formData.get("SendEmail"));
  console.log(formData.get("message"));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  await resend.emails.send({
    from: "WebSite contact form <onboarding@resend.dev>",
    to: "corentin.damasphoto@gmail.com",
    subject: "New message from Website",
    html: `<p> Message from ${name} - ${email}\n${
      message != "" ? message : "The sender didn't add any message"
    } `,
  });
};
