import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>New Message from, {name}!</h1>
    <h2> email at {email} </h2>
    <p>Send this message : {message}</p>
  </div>
);

export default EmailTemplate;
