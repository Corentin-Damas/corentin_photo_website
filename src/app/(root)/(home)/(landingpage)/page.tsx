import React from "react";

import Section02 from "../../../../../components/landingPage/section_02";
import Section03 from "../../../../../components/landingPage/section_03";
import SectionCta from "../../../../../components/landingPage/section_cta";
import Hero from "../../../../../components/landingPage/Hero";

import styles from "./page.module.css";
import Section_Japan from "../../../../../components/landingPage/Section_Japan";
import Section_Europe from "../../../../../components/landingPage/Section_Europe";

const page = () => {
  return (
    <div className={styles.landingPage__container}>
      <Hero />
      <Section_Japan/>
      <Section_Europe/>

      <Section02 />
      <Section03 />
      <SectionCta />
    </div>
  );
};

export default page;
