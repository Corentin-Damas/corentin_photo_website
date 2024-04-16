import React from "react";
import styles from "./page.module.css";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { PiInfo, PiSealWarningBold } from "react-icons/pi";
import Link from "next/link";

function page() {
  return (
    <>
      <header className={styles.header}>
        <Navbar linkMyName="" />
      </header>
      <div className={styles.informations_container}>
        <h3 className={styles.informations__title}>
          <PiInfo />
          Success
        </h3>
        <p>
          I&apos;ll contact you shortly by email to give you all the
          informations you need and more...
          <br />
          Please make sure to check your mails and to keep them. It will be the
          only way (for the moment) to keep track of your order.
          <Link href={"/contact"} className={styles.informations__links}>
            contact page{" "}
          </Link>
          .{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default page;
