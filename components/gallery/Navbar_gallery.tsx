import React from "react";
import styles from "../gallery/Navbar_gallery.module.css";
import Link from "next/link";
function Navbar_gallery() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.myNameLink}>
          Corentin Damas
        </Link>
        <ul className={styles.links__List}>
          <h6 className={styles.link__group_name}>Projects</h6>
          <ul className={styles.link__group}>
            <p className={styles.number}>
              _1 <span className={styles.bar}>|</span>{" "}
            </p>
            <Link href="/gallery/tsuzukitai">Trapped memories</Link>
            <p className={styles.number}>
              _2 <span className={styles.bar}>|</span>{" "}
            </p>
            <Link href="/gallery/a_year_in_japan"> A year in japan</Link>
            <p className={styles.number}>
              _3 <span className={styles.bar}>|</span>{" "}
            </p>
            <Link href="/gallery/morning_shadows">Morning Shadows</Link>
            <p className={styles.number}>
              _4 <span className={styles.bar}>|</span>{" "}
            </p>
            <Link href="/gallery/museums">Museums</Link>
          </ul>
          <h6 className={styles.link__group_name}>Side works</h6>
          <ul className={styles.link__group}>
            <p className={styles.number}>
              _5 <span className={styles.bar}>|</span>{" "}
            </p>
            <Link href="/gallery/earth_and_sky">Between earth and sky</Link>
            <p className={styles.number}>
              _6 <span className={styles.bar}>|</span>{" "}
            </p>
            <Link href="/gallery/infrared">the world in Inrared</Link>
            <p className={styles.number}>
              _7 <span className={styles.bar}>|</span>{" "}
            </p>
            <Link href="/gallery/black_and_white">Work in black and white</Link>
          </ul>
          <Link href="/project">About</Link>
        </ul>
        <button className={styles.contactMe}>contact me</button>
      </nav>
      <div>Project Base photographer</div>
    </>
  );
}

export default Navbar_gallery;
