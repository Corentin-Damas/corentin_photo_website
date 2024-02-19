import React from "react";
import styles from "../main_section/section_cta.module.css";
import Image from "next/image";
import Link from "next/link";

function section_cta() {
  return (
    <>
      <section className={styles.sectionCta__Grid}>
        <div className={styles.presentation}>
          <h4 className={styles.myName}>Corentin Damas</h4>
          <div className={styles.proposition}>
            <p >
              Digital & Films
            </p>
            <div className={styles.dot}></div>
            <p className={styles.proposition__txt}>
              Numeric and film. Film are developed and print in my darkroom.{" "}
            </p>
          </div>
          <div className={styles.proposition}>
            <p>Prints & Books</p>
            <div className={styles.dot}></div>
            <p className={styles.proposition__txt}>
              Personalised High quality print for your wall or for presents.{" "}
            </p>
          </div>
        </div>
        <div className={styles.formular__containeur}>
          <h5>Ask me anything</h5>
          <form className={styles.formular__grid} action="" autoComplete="off">
            <div className={styles.form__group}>
              <input
                className={`${styles.formular__Name} ${styles.form__field} `}
                type="text"
                placeholder="Your Name"
                name="name"
                id="name"
                required
              />
              <label htmlFor="name" className={`${styles.form__label}`}>
                Your name
              </label>
            </div>

            <div className={styles.form__group}>
              <input
                className={`${styles.email} ${styles.form__field} `}
                type="text"
                placeholder="Your Email"
                name="email"
                id="email"
                required
              />
              <label htmlFor="email" className={`${styles.form__label}`}>
                Your Email
              </label>
            </div>
            <div className={styles.form__group}>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={2}
                placeholder="Your Message"
                className={`${styles.formular__message} ${styles.form__field}`}
              ></textarea>
              <label htmlFor="message" className={`${styles.form__label}`}>
                Your Message
              </label>
            </div>
            <input
              className={styles.formular__submit}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className={styles.gap}></div>
        <div className={styles.right__container}>
          <Image
            src="/landingpage/01-color_headS-XL.jpg"
            alt="Photography of Corentin Damas author of the website and photographies "
            className={`${styles.imgHeadS}`}
            fill
            quality={80}
          />
        </div>
      </section>
      <div className={styles.link__container}>
        <Link
          href={"/gallerie"}
          className={`${styles.final__link} gallery_Link`}
        >
          Check the Gallery _<span className="main-Color">&gt;</span>
        </Link>
      </div>
    </>
  );
}

export default section_cta;
