import Link from "next/link";
import React from "react";
import styles from "../components/Navbar.module.css";

import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link tabIndex={1} href="/" className={styles.myNameLink}>
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
      <ThemeSwitch />
      <button tabIndex={6}>contact me</button>
    </nav>
  );
}

export default Navbar;
