import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  cart: productResumeType[];
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  cart,
}) => (
  <div>
    <h1>New Message from, {name}!</h1>
    <h2> email at {email} </h2>
    <p>Send this message : {message}</p>
    <br />

    {cart.length > 0 && (
      <>
        <h3>had in his cart :</h3>
        <ul>
          {cart.map((el) => (
            <li key={el.date}>
              <p>
                {`image: ${el.img}, image size: ${el.imgSize}, display:${el.nameDisplayMethod}
                 qty:${el.quantity}, frame color:${el.color}, frame:${el.frameSize}
                passe partout color:${el.passePartoutColor}, passe partout size:${el.passePartoutSize}, 
                paper:${el.paper}, glass:${el.glass}, glassthinkness:${el.glassThickness} 
                hanging:${el.hanging}, protection:${el.protection}, border:${el.border}, 
                total for one:${el.totalPrice}`}
              </p>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default EmailTemplate;
