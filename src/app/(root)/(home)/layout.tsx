import React from "react";
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Hero from "../../../../components/Hero";

import styles from "./layout.module.css";


function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        
        <Navbar linkMyName="about" />
        <Hero />
        <Image
          src="/landingpage/XL/rainbow-bridge-XL.jpg"
          alt="Bridge named rainbow Bridge from Tokyo, Japan"
          className={`${styles.bgImg} dark_mode_only`}
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          priority
        />
        <Image
          src="/landingpage/XL/landscapes-Landing2-XL.png"
          alt="Bridge named rainbow Bridge from Tokyo, Japan"
          className={`${styles.bgImg} ${styles.bglight} light_mode_only`}
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          priority
        />
      </header>
      {children}
      <Footer />
    </>
  );
}

export default layout;
