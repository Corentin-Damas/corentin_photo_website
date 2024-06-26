import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Section_Europe.module.css";

// underline

function Section_Europe() {
  return (
    <section className={styles.section__eu}>
      <Link href={"/gallery/morning_shadows"} className={styles.shadows__title}>
        <h4>Morning Shadows</h4>
      </Link>
      <Link
        href={"/gallery/morning_shadows"}
        className={styles.shadows__link_img}
      >
        <div className={styles.shadows__img_container}>
          <Image
            src="/morning_shadows/L/06-morning_shadows.jpg"
            alt="View on the city of london in the morning light"
            className={`${styles.shadows__img}`}
            width={1280}
            height={853}
            quality={80}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </Link>

      <div className={styles.shadows__legend}>
        <Link href={"/gallery/morning_shadows"} className={styles.link_txt}>
          <h6 className={styles.shadows__legend_txt}> The city</h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>

      <Link href={"/gallery/museums"}  className={styles.museums__title}>
        <h4>Museums</h4>
      </Link>
      <Link href={"/gallery/museums"} className={styles.museums__link_img}>
        <div className={styles.museums__img_container}>
          <Image
            src="/museums/L/03-museums.jpg"
            alt="Entrance of the Natural History Museum of London (UK), statue of Charles Darwin"
            className={`${styles.museums__img}`}
            width={1280}
            height={853}
            quality={80}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>
      </Link>
      <div className={styles.museums__legend}>
        <Link href={"/gallery/museums"} className={styles.link_txt}>
          <h6 className={styles.museums__legend_txt}> London & Amsterdam</h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>
    </section>
  );
}

export default Section_Europe;
