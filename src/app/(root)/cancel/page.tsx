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
          <PiSealWarningBold className={styles.iconeInfo} />
         Canceling Information
        </h3>

        <p>
          You have cancel the paying request, you can still access your <Link href={"/shop"} className={styles.informations__links}>cart</Link>  and
          the <Link href={"/shop"} className={styles.informations__links}>shop</Link>. <br /> For more information you can contact me on the{" "}
          <Link href={"/contact"} className={styles.informations__links}>contact page </Link>{" "}
        </p>
      </div>
      <Footer />
    </>
  );
}

export default page;
