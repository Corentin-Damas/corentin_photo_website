"use client";

import React, { FormEvent, useState } from "react";
import styles from "../main_section/section_cta.module.css";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const initValues = { name: "", email: "", message: "" };
const initState = { values: initValues };

function Form() {
  const [state, setState] = useState(initState);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [touched, setTouched] = useState({});

  const onBLur = (e) =>
    setTouched((prev) => ({
      ...prev,
      [e.target.name]: true,
    }));

  const { values } = state;
  const handleChange = function (e) {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));
    values.name == "" ? setIsValidName(false) : setIsValidName(true);
    values.email == "" ? setIsValidEmail(false) : setIsValidEmail(true);
  };

  const onSubmit = async (e: FormEvent) => {
    console.log(values.name, values.email);
    e.preventDefault();

    if (values.name == "") {
      setIsValidName(false);
    }
    if (values.name != "") {
      setIsValidName(true);
    }
    if (values.email == "") {
      setIsValidEmail(false);
    }
    if (values.email != "") {
      setIsValidEmail(true);
    }
  };

  return (
    <form
      className={styles.formular__grid}
      autoComplete="false"
      onSubmit={onSubmit}
    >
      <div className={`${styles.form__group} `}>
        <FormControl isRequired isInvalid={touched.name && !values.name}>
          <input
            className={`${styles.formular__Name} ${styles.form__field}  ${
              isValidName
                ? styles.form__field_valid
                : styles.form__field_inValid
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
              isValidEmail
                ? styles.form__field_valid
                : styles.form__field_inValid
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
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
