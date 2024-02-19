import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

function page() {
  return (
    <section className={styles.projects__grid}>
      <Link href="/morning_shadows" className={styles.projectPreview}>
        <Image
          src="/04_shadows/20-Morning_Shadows-XL.jpg"
          alt="Rush hour on London bridge, shadows of people going toward the city"
          fill
          quality={80}
          className={styles.projectPreview__shadows}
        />
      </Link>
      <Link href="/morning_shadows" className={styles.projectPreview}>
        <Image
          src="/06_tsuzukitai/10-tsuzukitai-XL.jpg"
          alt="Deer head in a blurry badckground"
          fill
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/a_year_in_japan" className={styles.projectPreview}>
        <Image
          src="/02_a_year_in_japan/2-rainbow-bridge-XL.jpg"
          alt="Night cityscape of a Bridge named rainbow Bridge from Tokyo, Japan"
          fill
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/museum" className={styles.projectPreview}>
        <Image
          src="/05_museums/02-Museum-XL.jpg"
          alt="Visitors in form of the painting called the Night Watch from Rembrandt in the rijksmuseum, Amsterdam, Netherlands"
          fill
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/landscapes" className={styles.projectPreview}>
        <Image
          src="/01_between_land&sky/12-sky and earth-XL.jpg"
          alt="Landscape at sunrise of a valley bathing in pink clouds, in the middle the ruine of a old japanese castle"
          fill
          quality={80}
          className={styles.projectPreview__landscape}
        />
      </Link>
      <Link href="/black_and_white" className={styles.projectPreview}>
        <Image
          src="/07_black_and_white/12-black_and_white-XL.jpg"
          alt="Picture in black and white of the inside of a ruine of a Church"
          fill
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/infrared" className={styles.projectPreview}>
        <Image
          src="/03_infra/12-infrared-XL.jpg"
          alt="Infrared picture of a field with few Menhir standing up and others on the ground "
          fill
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
    </section>
  );
}

export default page;
