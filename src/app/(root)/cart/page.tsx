"use client";
import React from "react";
import Navbar from "../../../../components/Navbar";
import styles from "./page.module.css";
import Footer from "../../../../components/Footer";
import CompletCartResum from "../../../../components/cart/CompletCartResum";

function page() {
  return (
    <>
      <header className={styles.header}>
        <Navbar linkMyName=" " />
        <div className={styles.heroSection}>
          <h3 className={styles.hero_title}>Cart</h3>
        </div>
      </header>
      <section className={styles.content__container}>
        <CompletCartResum />
      </section>
      <Footer />
    </>
  );
}

export default page;
