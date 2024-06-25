import React from "react";
import styles from "./page.module.css";

import Hero from "../../../../../components/landingPage/Hero";
import Section_Japan from "../../../../../components/landingPage/Section_Japan";
import Section_Europe from "../../../../../components/landingPage/Section_Europe";
import Section_Memories from "../../../../../components/landingPage/Section_Memories";
import Section_SideProjects from "../../../../../components/landingPage/Section_SideProjects";
import Section_Form from "../../../../../components/landingPage/Section_Form";

const page = () => {
  return (
    <div>
      <div className={styles.landingPage__container}>
        <Hero />
        <Section_Japan />
        <Section_Europe />
      </div>

      <Section_Memories/>

      <div className={styles.landingPage__container}>
        <Section_SideProjects/>
        <Section_Form/>
      </div>
      
    </div>
  );
};

export default page;
