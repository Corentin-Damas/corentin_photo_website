"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";
import { useCartProduct } from "../../providers/cart-provider";
import { PiInfo, PiSealWarningBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import {
  fakeReq,
  checkEmail,
  checkName,
  checkMessage,
  resetAllEntries,
  checkMailBodyRequired,
} from "./utilsFuncForm";

const initValues: Values = {
  name: { data: "", state: { stat: "initial", error: null } },
  email: { data: "", state: { stat: "initial", error: null } },
  message: { data: "", state: { stat: "initial", error: null } },
};

const initState = { values: initValues };

const possibleStates = {
  valid: "valid",
  initial: "initial",
  invalid: "invalid",
  loading: "loading",
};

function Form() {
  const test = true;
  const path = usePathname();

  const cartList = useCartProduct((state) => state.cartOfProduct);
  const [state, setState] = useState(initState);
  const { values } = state;

  const [emailSent, setEmailSent] = useState<string>(possibleStates.initial);

  const handleChange = function (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: {
          data: e.target.value,
          state: handleState(e.target.name),
        },
      },
    }));
  };

  const handleState = function (el: string): statues {
    switch (el) {
      case "name":
        return checkName(values.name.data);
      case "email":
        return checkEmail(values.email.data);
      case "message":
        return checkMessage(values.message.data);

      default:
        return {
          stat: "invalid",
          error:
            "somthing went very wrong, try later or send a mail without using this formular",
        };
    }
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setEmailSent(possibleStates.loading);

    if (test) {
      fakeReq(handleMailRes);
    } else if (checkMailBodyRequired(values)) {
      const name = values.name.data;
      const email = values.email.data;
      const message = values.message.data;
      const cart = cartList;

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          cart,
        }),
      });
      const res = await response.json();
      if (res.error == null) {
        handleMailRes(possibleStates.valid);
      } else {
        handleMailRes(possibleStates.valid);
      }
    }
  };

  function handleMailRes(status: string) {
    resetAllEntries(values);
    setEmailSent(status);
  }

  return (
    <>
      <form
        className={styles.formular__grid}
        autoComplete="false"
        onSubmit={sendEmail}
        id="email_form"
      >
        <div className={`${styles.form__group} `}>
          <input
            type="text"
            required
            name="name"
            id="name"
            placeholder="Your Name"
            value={values.name.data}
            onBlur={handleChange}
            onChange={handleChange}
            className={`${styles.formular__Name} ${styles.form__field}  ${
              values.name.state.stat == possibleStates.valid
                ? styles.form__field_valid
                : values.name.state.stat == possibleStates.invalid
                ? styles.form__field_inValid
                : values.name.state.stat == possibleStates.initial
                ? styles.form__field_initial
                : styles.form__field_waiting
            } `}
          />
          <label htmlFor="name" className={`${styles.form__label}`}>
            Your name
          </label>
          <div className={styles.informationBlock}>
            {values.name.state.stat == possibleStates.invalid && (
              <p className={styles.informationBuble}>
                * Required: Please provide a valid name:{" "}
                {values.name.state.error}.
              </p>
            )}
          </div>
        </div>

        <div className={styles.form__group}>
          <input
            className={`${styles.email} ${styles.form__field} ${
              values.email.state.stat == possibleStates.valid
                ? styles.form__field_valid
                : values.email.state.stat == possibleStates.invalid
                ? styles.form__field_inValid
                : values.email.state.stat == possibleStates.initial
                ? styles.form__field_initial
                : styles.form__field_waiting
            } `}
            type="text"
            required
            placeholder="Your Email"
            name="email"
            id="email"
            value={values.email.data}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <label htmlFor="email" className={`${styles.form__label}`}>
            Your Email
          </label>
          <div className={styles.informationBlock}>
            {values.email.state.stat == possibleStates.invalid && (
              <p className={styles.informationBuble}>
                * Required: Please provide a valid Email.
              </p>
            )}
          </div>
        </div>

        <div className={styles.form__group}>
          <textarea
            required
            name="message"
            id="message"
            cols={30}
            rows={3}
            placeholder={
              path == "/shop"
                ? " What do you want to know about the artwork you selected?"
                : "Your message"
            }
            value={values.message.data}
            onBlur={handleChange}
            onChange={handleChange}
            className={`${styles.formular__message} ${styles.form__field} ${
              values.message.state.stat == possibleStates.valid
                ? styles.form__field_valid
                : values.message.state.stat == possibleStates.invalid
                ? styles.form__field_inValid
                : values.message.state.stat == possibleStates.initial
                ? styles.form__field_initial
                : styles.form__field_waiting
            }`}
          ></textarea>
          <label htmlFor="message" className={`${styles.form__label}`}>
            {path == "/shop"
              ? " What do you want to know about the artwork you selected?"
              : "Your message"}
          </label>
          <div
            className={`${styles.informationBlock} ${styles.informationBlock_advice} `}
          >
            {values.message.state.stat == possibleStates.invalid && (
              <p className={styles.informationBuble}>
                * Required: Please tell me what you want to know so i can advice
                you the best I can.
              </p>
            )}
          </div>
        </div>
        <button
          className={`${styles.formular__submit} btn-cta`}
          type="submit"
          disabled={!checkMailBodyRequired(values)}
        >
          {emailSent == possibleStates.initial ? (
            "Submit"
          ) : emailSent == possibleStates.loading ? (
            <div className={styles.spinner__container}>
              <div className={styles.spinner}></div>
              <p>Loading...</p>
            </div>
          ) : emailSent == possibleStates.valid ? (
            "Thank You"
          ) : (
            "Somthing went wrong"
          )}
        </button>
      </form>
      {emailSent == possibleStates.valid ? (
        <div className={styles.mailSentInformationBox}>
          {path == "/shop" ? (
            <>
              <PiInfo className={styles.feedbackIcone} />
              <p>
                A mail of request for advice about{" "}
                {cartList.map((el) => (
                  <span
                    key={el.date}
                  >{`${el.nameDisplayMethod}(qty:${el.quantity}),`}</span>
                ))}{" "}
                I&apos;ll reach you has soon has possible.
                <br />
                Thanks for your interest in my work.
              </p>
            </>
          ) : (
            <>
              <PiInfo className={styles.feedbackIcone} />
              <p>
                A mail has been send successfully, I&apos;ll reach you has soon
                has possible.
                <br />
                Thanks for your interest in my work.
              </p>
            </>
          )}
        </div>
      ) : emailSent == possibleStates.invalid ? (
        <div className={styles.mailSentInformationBox}>
          <>
            <PiSealWarningBold className={styles.feedbackIcone} />
            <p>
              Opss! Something went Wrong (Probably in our side)! Please try
              later or send a mail directly to: corentin.damasphoto@gmail.com
            </p>
          </>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Form;
