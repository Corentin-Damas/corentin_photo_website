import React from "react";
import styles from "../gift/page.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Select_img from "../../../../components/gift/Select_img";
import Select_print from "../../../../components/gift/Select_print";

function page({searchParams}:{searchParams:any}) {

  return (
    <>
      <header className={styles.header}>
        <Navbar linkMyName="" />
        <div className={styles.heroSection}>
          <h3 className={styles.hero_title}>Your Gift</h3>

          <div className={styles.keywords}>
            <p className={`${styles.presentation__sub_txt} body_02`}>
              For a friend{" "}
            </p>
            <div className={styles.dot}></div>
            <p className={`${styles.presentation__sub_txt} body_02`}>
              Your familly
            </p>
            <div className={styles.dot}></div>
            <p className={`${styles.presentation__sub_txt} body_02`}>
              Your walls
            </p>
          </div>
        </div>
      </header>
      <section className={styles.about__content__container}>
        <Select_print searchParams={searchParams} /> 

        <Link
          href={"/gallery"}
          className={`${styles.about__link} gallery_Link`}
        >
          See Gallery _<span className="main-Color">&gt;</span>
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default page;
