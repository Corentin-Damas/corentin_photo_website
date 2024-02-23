"use client";
import React, { FormEvent, useState } from "react";
import styles from "../main_section/section_cta.module.css";
import { FormControl, FormErrorMessage } from "@chakra-ui/react";
import { sendEmail } from "../helpers/sendMail";

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

  const test = true;

  const { values } = state;

  const onBLur = function (e) {
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));
    values.name != "" && touched.name
      ? setIsValidName(possibleStates.initial)
      : setIsValidName(possibleStates.loading);
    values.email != ""
      ? setIsValidEmail(possibleStates.initial)
      : setIsValidEmail(possibleStates.loading);
  };

  const handleChange = function (e) {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));
    values.name == ""
      ? setIsValidName(possibleStates.invalid)
      : setIsValidName(possibleStates.valid);
    values.email == ""
      ? setIsValidEmail(possibleStates.invalid)
      : setIsValidEmail(possibleStates.valid);
  };

  return (
    <form
      className={styles.formular__grid}
      autoComplete="false"
      action={async (formData) => {
        if (test) {
          console.log(state.values, isValidEmail, isValidName);
          if (
            isValidEmail == possibleStates.valid &&
            isValidName == possibleStates.valid
          ) {
            console.log("a may have been sent");
          }
        } else if (isValidEmail && isValidName && !test) {
          await sendEmail(formData);
        }
      }}
    >
      <div className={`${styles.form__group} `}>
        <FormControl isRequired isInvalid={touched.name && !values.name}>
          <input
            className={`${styles.formular__Name} ${styles.form__field}  ${
              isValidName == possibleStates.valid
                ? styles.form__field_valid
                : isValidName == possibleStates.invalid
                ? styles.form__field_inValid
                : styles.form__field_initial
            } `}
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            value={values.name}
            onChange={handleChange}
            onBlur={onBLur}
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
        <FormControl isRequired isInvalid={touched.email && !values.email}>
          <input
            className={`${styles.email} ${styles.form__field} ${
              isValidEmail == possibleStates.valid
                ? styles.form__field_valid
                : isValidEmail == possibleStates.invalid
                ? styles.form__field_inValid
                : styles.form__field_initial
            } `}
            type="text"
            placeholder="Your Email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBLur}
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
          onBlur={onBLur}
        ></textarea>
        <label htmlFor="message" className={`${styles.form__label}`}>
          Your Message
        </label>
      </div>
      <button
        className={styles.formular__submit}
        disabled={!values.name || !values.email}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
