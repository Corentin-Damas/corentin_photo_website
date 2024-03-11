import React from "react";
import styles from "../gift/page.module.css";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
function page() {
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
        <div className={styles.about__content__left}>
          <div className={styles.img_container}>
            <Image
              src="/util_img/wall_img01.jpg"
              alt="Corentin Damas with one of is framed picture on a customer's wall"
              className={`${styles.imgWall}`}
              sizes="100vw"
              width={0}
              height={0}
              quality={80}
            />
          </div>

        </div>
        <article className={styles.about__content__right}>
          <p>
            - 2019: The castle of &quot;l&apos;hermine&quot; in Vannes, France /
            <br />
            - 2020: At Vannes festival photo in Vannes, France /<br />
          </p>
        </article>
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
