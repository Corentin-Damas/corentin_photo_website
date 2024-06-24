"use client";
import React, { useState, useRef } from "react";
import styles from "../landingPage/section_cta.module.css";
import { useCartProduct } from "../../providers/cart-provider";
import { PiInfo, PiSealWarningBold } from "react-icons/pi";

interface Values {
  name: string;
  email: string;
  message: string;
}

const initValues: Values = { name: "", email: "", message: "" };
const initState = { values: initValues };

const possibleStates = {
  valid: "valid",
  initial: "initial",
  invalid: "invalid",
  loading: "loading",
};

function Form({ context }: { context: string }) {
  const cartList = useCartProduct((state) => state.cartOfProduct);

  const ref = useRef<HTMLFormElement>(null);

  const [state, setState] = useState(initState);
  const [isValidName, setIsValidName] = useState(possibleStates.initial);
  const [isValidEmail, setIsValidEmail] = useState(possibleStates.initial);
  const [isValideMessage, setIsValideMessage] = useState(
    possibleStates.initial
  );

  const [emailSent, setEmailSent] = useState<string>(possibleStates.initial);

  const test = false;
  const { values } = state;

  const onBlur = function (e: any) {
    checkState(e.target.name);
  };

  const handleChange = function (e: any) {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));
    checkState(e.target.name);
  };

  const checkEmail = function () {
    const regex =
      /^([a-zA-Z0-9.\_%+-]+)@([a-zA-Z0-9.-])+.([a-zA-Z]+)(.[a-z]+)?$/;
    regex.test(values.email)
      ? setIsValidEmail(possibleStates.valid)
      : setIsValidEmail(possibleStates.invalid);
  };

  const checkState = function (el: any) {
    if (el == "name") {
      values.name.length > 1
        ? setIsValidName(possibleStates.valid)
        : setIsValidName(possibleStates.invalid);

      checkEmail();
      if (context == "advice") {
        values.message.length > 5
          ? setIsValideMessage(possibleStates.valid)
          : setIsValideMessage(possibleStates.invalid);
      }
    }

    if (el == "email") {
      values.email.length > 3
        ? checkEmail()
        : setIsValidEmail(possibleStates.invalid);

      values.name.length > 1 && setIsValidName(possibleStates.valid);
      if (context == "advice") {
        values.message.length > 5
          ? setIsValideMessage(possibleStates.valid)
          : setIsValideMessage(possibleStates.invalid);
      }
    }

    if (el == "message") {
      if (context == "advice") {
        values.message.length > 1
          ? setIsValideMessage(possibleStates.valid)
          : setIsValideMessage(possibleStates.invalid);

        values.name.length > 1 && setIsValidName(possibleStates.valid);
      }
    }
  };

  function handleCheckAllValid(): boolean {
    if (emailSent == possibleStates.valid) {
      return true;
    }
    if (context == "advice") {
      if (
        isValidName == possibleStates.valid &&
        isValidEmail == possibleStates.valid &&
        isValideMessage == possibleStates.valid
      ) {
        return false;
      }
    } else {
      if (
        isValidName == possibleStates.valid &&
        isValidEmail == possibleStates.valid
      ) {
        return false;
      }
    }

    return true;
  }

  function resetAll() {
    values.name = "";
    values.email = "";
    values.message = "";
    setIsValidName(possibleStates.initial);
    setIsValidEmail(possibleStates.initial);
    setIsValideMessage(possibleStates.initial);
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();

    if (test) {
      if (
        isValidEmail == possibleStates.valid &&
        isValidName == possibleStates.valid
      ) {
        resetAll();
        setEmailSent(possibleStates.valid);
      }
    } else if (
      isValidEmail == possibleStates.valid &&
      isValidName == possibleStates.valid &&
      !test
    ) {
      const name = values.name;
      const email = values.email;
      const message = values.message;
      const cart = cartList;
      // e.preventDefault();
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
        resetAll();
        setEmailSent(possibleStates.valid);
      } else {
        setEmailSent(possibleStates.invalid);
      }
    }
  };

  return (
    <>
      <form
        className={styles.formular__grid}
        autoComplete="false"
        onSubmit={sendEmail}
        id="email_form"
        ref={ref}
      >
        <div className={`${styles.form__group} `}>
          <input
            type="text"
            // isInvalid={isValidName == possibleStates.invalid}
            required
            name="name"
            id="name"
            placeholder="Your Name"
            value={values.name}
            onBlur={onBlur}
            onChange={handleChange}
            className={`${styles.formular__Name} ${styles.form__field}  ${
              isValidName == possibleStates.valid
                ? styles.form__field_valid
                : isValidName == possibleStates.invalid
                ? styles.form__field_inValid
                : isValidName == possibleStates.initial
                ? styles.form__field_initial
                : styles.form__field_waiting
            } `}
          />
          <label htmlFor="name" className={`${styles.form__label}`}>
            Your name
          </label>

          <div className={styles.informationBlock}>
            {isValidName == possibleStates.invalid && (
              <p className={styles.informationBuble}>
                * Required: Please provide your name
              </p>
            )}
          </div>
        </div>

        <div className={styles.form__group}>
          {/* <FormControl isInvalid={isValidEmail == possibleStates.invalid}> */}
          <input
            className={`${styles.email} ${styles.form__field} ${
              isValidEmail == possibleStates.valid
                ? styles.form__field_valid
                : isValidEmail == possibleStates.invalid
                ? styles.form__field_inValid
                : isValidEmail == possibleStates.initial
                ? styles.form__field_initial
                : styles.form__field_waiting
            } `}
            type="text"
            required
            placeholder="Your Email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
          />
          <label htmlFor="email" className={`${styles.form__label}`}>
            Your Email
          </label>
          <div className={styles.informationBlock}>
            {isValidEmail == possibleStates.invalid && (
              <p className={styles.informationBuble}>
                * Required: Please provide a valid Email
              </p>
            )}
          </div>
        </div>

        <div className={styles.form__group}>
          {context === "advice" ? (
            <>
              <textarea
                name="message"
                required
                id="message"
                cols={30}
                rows={3}
                placeholder="What do you want to know about the artwork(s) you selected?"
                value={values.message}
                onBlur={onBlur}
                onChange={handleChange}
                className={`${styles.formular__message} ${styles.form__field} ${
                  styles.form__field_advice
                } ${
                  isValideMessage == possibleStates.valid
                    ? styles.form__field_valid
                    : isValideMessage == possibleStates.invalid
                    ? styles.form__field_inValid
                    : isValideMessage == possibleStates.initial
                    ? styles.form__field_initial
                    : styles.form__field_waiting
                }`}
              ></textarea>
              <label htmlFor="message" className={`${styles.form__label}`}>
                What do you want to know about the artwork you selected?
              </label>
              <div
                className={`${styles.informationBlock} ${styles.informationBlock_advice} `}
              >
                {isValideMessage == possibleStates.invalid && (
                  <p className={styles.informationBuble}>
                    * Required: Please tell me what you want to know so i can
                    advice you the best I can
                  </p>
                )}
              </div>
            </>
          ) : (
            <>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={2}
                placeholder="Your Message"
                value={values.message}
                onChange={handleChange}
                className={`${styles.formular__message} ${styles.form__field}`}
              ></textarea>
              <label htmlFor="message" className={`${styles.form__label}`}>
                Your Message
              </label>
            </>
          )}
        </div>
        <button
          className={`${styles.formular__submit} btn`}
          type="submit"
          disabled={handleCheckAllValid()}
        >
          {emailSent == possibleStates.valid ? "Thank You" : "Submit"}
        </button>
      </form>
      {emailSent == possibleStates.valid ? (
        <div className={styles.mailSentInformationBox}>
          {context == "advice" ? (
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
