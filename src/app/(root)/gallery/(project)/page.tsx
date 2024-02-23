import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";

function page() {
  return (
    <section className={styles.projects__grid}>
      <Link href="/gallery/morning_shadows" className={styles.projectPreview}>
        <Image
          src="/morning_shadows/S/20-morning_shadows.jpg"
          alt="Rush hour on London bridge, shadows of people going toward the city"
          sizes="100vw"
          width={0}
          height={0}
          quality={80}
          className={styles.projectPreview__shadows}
        />
      </Link>
      <Link href="/gallery/tsuzukitai" className={styles.projectPreview}>
        <Image
          src="/tsuzukitai/S/10-tsuzukitai.jpg"
          alt="Deer head in a blurry badckground"
          sizes="100vw"
          width={0}
          height={0}
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/gallery/a_year_in_japan" className={styles.projectPreview}>
        <Image
          src="/a_year_in_japan/S/02-a_year_in_japan.jpg"
          alt="Night cityscape of a Bridge named rainbow Bridge from Tokyo, Japan"
          sizes="100vw"
          width={0}
          height={0}
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/gallery/museum" className={styles.projectPreview}>
        <Image
          src="/museums/S/02-museums.jpg"
          alt="Visitors in form of the painting called the Night Watch from Rembrandt in the rijksmuseum, Amsterdam, Netherlands"
          sizes="100vw"
          width={0}
          height={0}
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/gallery/earth_and_sky" className={styles.projectPreview}>
        <Image
          src="/earth_and_sky/S/12-earth_and_sky.jpg"
          alt="Landscape at sunrise of a valley bathing in pink clouds, in the middle the ruine of a old japanese castle"
          sizes="100vw"
          width={0}
          height={0}
          quality={80}
          className={styles.projectPreview__landscape}
        />
      </Link>
      <Link href="/gallery/black_and_white" className={styles.projectPreview}>
        <Image
          src="/black_and_white/S/12-black_and_white.jpg"
          alt="Picture in black and white of the inside of a ruine of a Church"
          sizes="100vw"
          width={0}
          height={0}
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
      <Link href="/gallery/infrared" className={styles.projectPreview}>
        <Image
          src="/infrared/S/12-infrared.jpg"
          alt="Infrared picture of a field with few Menhir standing up and others on the ground "
          sizes="100vw"
          width={0}
          height={0}
          quality={80}
          className={styles.projectPreview__img}
        />
      </Link>
    </section>
  );
}

export default page;
