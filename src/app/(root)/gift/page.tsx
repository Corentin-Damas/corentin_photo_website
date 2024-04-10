import React from "react";
import styles from "../gift/page.module.css";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Select_print from "../../../../components/gift/Select_print";

function page({searchParams}:{searchParams:any}) {

  return (
    <>
      <header className={styles.header}>
        <Navbar linkMyName="" />
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
