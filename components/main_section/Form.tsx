"use client";
import React, { FormEvent, useState } from "react";
import styles from "../main_section/section_cta.module.css";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";

interface Values {
  name: string;
  email: string;
  message: string;
}
interface ValuesExist {
  name: boolean;
  email: boolean;
  message: boolean;
}

const initValues: Values = { name: "", email: "", message: "" };
const initState = { values: initValues };

const possibleStates = {
  valid: "valid",
  initial: "initial",
  invalid: "invalid",
  loading: "loading",
};

function Form() {
  const [state, setState] = useState(initState);

  const [isValidName, setIsValidName] = useState(possibleStates.initial);
  const [isValidEmail, setIsValidEmail] = useState(possibleStates.initial);

  const [touched, setTouched] = useState<ValuesExist>({
    name: false,
    email: false,
    message: false,
  });

  const [emailSent, setEmailSent] = useState<string>(possibleStates.initial);

  const test = true;

  const { values } = state;

  const onBlur = function (e: any) {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
    checkState();
  };

  const handleChange = function (e: any) {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));
    checkState();
  };

  const checkEmail = function () {
    const regex =
      /^([a-zA-Z0-9.\_%+-]+)@([a-zA-Z0-9.-])+.([a-zA-Z]+)(.[a-z]+)?$/;
    regex.test(values.email)
      ? setIsValidEmail(possibleStates.valid)
      : setIsValidEmail(possibleStates.invalid);

    console.log("result:", isValidEmail);
  };

  const checkState = function () {
    values.name == "" && touched.name
      ? setIsValidName(possibleStates.invalid)
      : setIsValidName(possibleStates.valid);

    values.email == "" && touched.email
      ? setIsValidEmail(possibleStates.invalid)
      : checkEmail();

    values.name == "" && !touched.name
      ? setIsValidName(possibleStates.initial)
      : setIsValidName(possibleStates.valid);

    values.email.length > 3 && !touched.email
      ? checkEmail()
      : setIsValidEmail(possibleStates.initial);
  };

  const sendEmail = async (e: any) => {
    console.log("sendEmail");
    values.name == ""
      ? setIsValidName(possibleStates.invalid)
      : setIsValidName(possibleStates.valid);

    if (test) {
      checkEmail();
      if (
        isValidEmail == possibleStates.valid &&
        isValidName == possibleStates.valid
      ) {
        setEmailSent(possibleStates.valid);
        console.log(state.values, isValidEmail, isValidName);
      }
    } else if (
      isValidEmail == possibleStates.valid &&
      isValidName == possibleStates.valid &&
      !test
    ) {
      const name = values.name;
      const email = values.email;
      const message = values.message;
      e.preventDefault();
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      const res = await response.json();
      if (res.error == null) {
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
      >
        <div className={`${styles.form__group} `}>
          <FormControl
            isRequired
            isInvalid={isValidName == possibleStates.invalid}
          >
            <input
              className={`${styles.formular__Name} ${styles.form__field}  ${
                isValidName == possibleStates.valid
                  ? styles.form__field_valid
                  : isValidName == possibleStates.invalid
                  ? styles.form__field_inValid
                  : isValidName == possibleStates.initial
                  ? styles.form__field_initial
                  : styles.form__field_waiting
              } `}
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <label htmlFor="name" className={`${styles.form__label}`}>
              Your name
            </label>

            <div className={styles.informationBlock}>
              <FormErrorMessage>
                <p className={styles.informationBuble}>
                  * Required: Please provide your name
                </p>
              </FormErrorMessage>
            </div>
          </FormControl>
        </div>

        <div className={styles.form__group}>
          <FormControl
            isRequired
            isInvalid={isValidEmail == possibleStates.invalid}
          >
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
              <FormErrorMessage>
                <p className={styles.informationBuble}>
                  * Required: Please provide your Email
                </p>
              </FormErrorMessage>
            </div>
          </FormControl>
        </div>

        <div className={styles.form__group}>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={2}
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            className={`${styles.formular__message} ${styles.form__field}`}
            onBlur={onBlur}
          ></textarea>
          <label htmlFor="message" className={`${styles.form__label}`}>
            Your Message
          </label>
        </div>
        <button className={styles.formular__submit} type="submit">
          Submit
        </button>
      </form>
      {emailSent == possibleStates.valid ? (
        <div className={styles.mailSentInformationBox}>
          <h6>
            Your coordinate have been send successfully
            <br />
            Thanks for your confidence{" "}
          </h6>
        </div>
      ) : emailSent == possibleStates.invalid ? (
        <div className={styles.mailSentInformationBox}>
          <h6>
            Opss! Something went Wrong! Please try later or try send a mail
            directly
            <br />
            corentin.damasphoto@gmail.com
          </h6>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Form;
