import React from "react";
import Navbar from "../../../../components/Navbar";
import styles from "./page.module.css";
import Footer from "../../../../components/Footer";
import SectionCta from "../../../../components/main_section/section_cta";

function page() {
  return (
    <>
      <header className={styles.header}>
        <Navbar linkMyName=" " />
        <div className={styles.heroSection}>
          <h3 className={styles.hero_title}>Contact me</h3>
        </div>
      </header>
      <section>
        <SectionCta />
      </section>
      <Footer />
    </>
  );
}

export default page;
