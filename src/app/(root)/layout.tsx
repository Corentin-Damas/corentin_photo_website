import React from "react";
import Image from "next/image";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Hero from "../../../components/Hero";

import styles from "./layout.module.css";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
        <Hero/>
        <Image
          src="/landingpage/rainbow-bridge-XL.jpg"
          alt="Bridge named rainbow Bridge from Tokyo, Japan"
          className={`${styles.bgImg} dark_mode_only`}
          fill
          quality={100}
        />
      </header>
      {children}
      <Footer />
    </>
  );
}

export default layout;
