import React from "react";
import styles from "./Section_SideProjects.module.css";
import Image from "next/image";
import Link from "next/link";

function Section_SideProjects() {
  return (
    <div className={styles.sideProjects}>
      <Link
        href={"/gallery/earth_and_sky"}
        className={`${styles.sideProjects__imgLink} ${styles.img__link_earth}`}
      >
        <Image
          src="/earth_and_sky/L/13-earth_and_sky.jpg"
          alt="Photography of a Beach with a natural rock arch at night time"
          className={`${styles.sideProjects__img}`}
          width={1280}
          height={853}
          quality={80}
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </Link>
      <div
        className={`${styles.sideProjects__legend} ${styles.sideProjects__legend_earth}`}
      >
        <Link href={"/gallery/earth_and_sky"}>
          <h6 className={styles.sideProjects__legend_txt}>
            Between earth and sky
          </h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>

      <Link
        href={"/gallery/infrared"}
        className={`${styles.sideProjects__imgLink} ${styles.img__link_infra}`}
      >
        <Image
          src="/infrared/L/01-infrared.jpg"
          alt="Infrared photoghaphy of a tree near the sea. The tree has pink leaves "
          className={`${styles.sideProjects__img}`}
          width={1280}
          height={853}
          quality={80}
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </Link>
      <div
        className={`${styles.sideProjects__legend} ${styles.sideProjects__legend_infra}`}
      >
        <Link href={"/gallery/infrared"}>
          <h6 className={styles.sideProjects__legend_txt}>World in Infrared</h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>

      <Link
        href={"/gallery/black_and_white"}
        className={`${styles.sideProjects__imgLink} ${styles.img__link_bandwhite}`}
      >
        <Image
          src="/black_and_white/L/02-black_and_white.jpg"
          alt="Black and white photography with three trunk in the snow in front of a beach and the sea"
          className={`${styles.sideProjects__img}`}
          width={1280}
          height={853}
          quality={80}
          sizes="(max-width: 768px) 100vw, 75vw"
        />
      </Link>
      <div
        className={`${styles.sideProjects__legend} ${styles.sideProjects__legend_bandwhite}`}
      >
        <Link href={"/gallery/black_and_white"}>
          <h6 className={styles.sideProjects__legend_txt}>Black and White</h6>
        </Link>
        <div className={styles.verticalRule}></div>
      </div>

      <Link href={"/gallery"} className={`${styles.sideProjects__link_gal} gallery_Link`}>
        See Gallery _<span className="main-Color">&gt;</span>
      </Link>
    </div>
  );
}

export default Section_SideProjects;
