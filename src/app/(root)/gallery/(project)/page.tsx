"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./page.module.css";
import Hero_gallery from "../../../../../components/gallery/Hero_gallery";

function Page() {
  const [isImageLoading, setImageLoading] = useState(true);

  return (
    <section className={styles.grid__container}>
      <Hero_gallery
        title="Project base photographer"
        c1="Travel"
        c2="Culture"
        c3="Wondering"
      />
      <div className={styles.projects__grid}>
        <Link
          href="/gallery/morning_shadows"
          className={`${styles.projectPreview}`}
        >
          <Image
            src="/morning_shadows/S/20-morning_shadows.jpg"
            alt="Rush hour on London bridge, shadows of people going toward the city"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__shadows} ${
              styles.project_img
            } ${styles.i01} ${
              isImageLoading ? "opaticity" : "remove-opaticity"
            } `}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>
            Morning <br /> shadows
          </h5>
        </Link>
        <Link href="/gallery/tsuzukitai" className={styles.projectPreview}>
          <Image
            src="/tsuzukitai/S/10-tsuzukitai.jpg"
            alt="Deer head in a blurry badckground"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__img} ${styles.project_img} ${
              styles.i02
            }  ${isImageLoading ? "opaticity" : "remove-opaticity"}`}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>
            Trapped <br /> memories
          </h5>
        </Link>
        <Link href="/gallery/a_year_in_japan" className={styles.projectPreview}>
          <Image
            src="/a_year_in_japan/S/02-a_year_in_japan.jpg"
            alt="Night cityscape of a Bridge named rainbow Bridge from Tokyo, Japan"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__img}  ${styles.project_img} ${
              styles.i03
            }  ${isImageLoading ? "opaticity" : "remove-opaticity"}`}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>
            A year in <br /> japan
          </h5>
        </Link>

        <Link href="/gallery/museums" className={styles.projectPreview}>
          <Image
            src="/museums/S/02-museums.jpg"
            alt="Visitors in form of the painting called the Night Watch from Rembrandt in the rijksmuseum, Amsterdam, Netherlands"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__img}  ${styles.project_img} ${
              styles.i04
            }  ${isImageLoading ? "opaticity" : "remove-opaticity"}`}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>Museums</h5>
        </Link>
        <Link href="/gallery/earth_and_sky" className={styles.projectPreview}>
          <Image
            src="/earth_and_sky/S/12-earth_and_sky.jpg"
            alt="Landscape at sunrise of a valley bathing in pink clouds, in the middle the ruine of a old japanese castle"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__landscape} ${
              styles.project_img
            }  ${styles.i05}  ${
              isImageLoading ? "opaticity" : "remove-opaticity"
            }`}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>
            Earth & <br /> sky
          </h5>
        </Link>

        <Link href="/gallery/black_and_white" className={styles.projectPreview}>
          <Image
            src="/black_and_white/S/12-black_and_white.jpg"
            alt="Picture in black and white of the inside of a ruine of a Church"
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__img}  ${styles.project_img} ${
              styles.i06
            }  ${isImageLoading ? "opaticity" : "remove-opaticity"}`}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>
            Black & <br /> white
          </h5>
        </Link>
        <Link href="/gallery/infrared" className={styles.projectPreview}>
          <Image
            src="/infrared/S/12-infrared.jpg"
            alt="Infrared picture of a field with few Menhir standing up and others on the ground "
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__img}  ${styles.project_img} ${
              styles.i07
            }  ${isImageLoading ? "opaticity" : "remove-opaticity"}`}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>
            World in <br /> Infrared
          </h5>
        </Link>
        <Link
          href="/about"
          className={`${styles.projectPreview} ${styles.aboutPreview}`}
        >
          <Image
            src="/landingpage/color_headS.jpg"
            alt="Infrared picture of a field with few Menhir standing up and others on the ground "
            sizes="100vw"
            width={0}
            height={0}
            quality={80}
            className={`${styles.projectPreview__img}  ${styles.project_img} ${
              styles.i08
            }  ${isImageLoading ? "opaticity" : "remove-opaticity"}`}
            onLoad={() => setImageLoading(false)}
          />
          <h5 className={styles.project_title}>About</h5>
        </Link>
      </div>
    </section>
  );
}

export default Page;
