import Link from "next/link";
import React from "react";
import styles from "../components/Navbar.module.css";

import ThemeSwitch from "./ThemeSwitch";

function Navbar({ linkMyName }: { linkMyName: string }) {
  if (linkMyName == undefined) {
    linkMyName = "";
  }
  return (
    <nav className={styles.nav}>
      <Link tabIndex={1} href={`/${linkMyName}`} className={styles.myNameLink}>
        Corentin Damas
      </Link>
      <ul className={styles.links}>
        <Link className={styles.link} tabIndex={2} href="/gallery">
          Project
        </Link>
        <Link className={styles.link} tabIndex={3} href="/gallery">
          Gallery
        </Link>
        <Link className={styles.link} tabIndex={4} href="/about">
          About
        </Link>
        {/* <Link href="/your_print">Your Print</Link> */}
      </ul>
      <div className={styles.actions}>
        <div className={styles.theme_container}>
          <ThemeSwitch />
          <p className={`${styles.theme_txt} light_mode_only`}>dark mode</p>
          <p className={`${styles.theme_txt} dark_mode_only`}>light mode</p>
        </div>

        <Link href="/contact">
          <button className="btn" tabIndex={6}>
            Contact me
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;