"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../components/NavbarSmallScreen.module.css";
import ThemeSwitch from "./ThemeSwitch";
import { GrFormClose } from "react-icons/gr";
import { CgMenuRightAlt } from "react-icons/cg";

function NavbarSmallScreen({ linkMyName }: { linkMyName: string }) {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={styles.smallScreenTop}>
        <Link
          tabIndex={1}
          href={`/${linkMyName}`}
          className={styles.myNameLink}
        >
          Corentin Damas
        </Link>
        <div className={styles.actions}>
          <div className={styles.theme_container}>
            <ThemeSwitch />
            <p className={`${styles.theme_txt} light_mode_only`}>dark mode</p>
            <p className={`${styles.theme_txt} dark_mode_only`}>light mode</p>
          </div>

          <Link href="/gallery">
            <button className="btn" tabIndex={6}>
              Gallery
            </button>
          </Link>
        </div>
      </div>
      {!menuOpen ? (
        <GrFormClose
          className={styles.icone_SmallScreen_close}
          onClick={toggleMenu}
        />
      ) : (
        <CgMenuRightAlt
          className={styles.icone_SmallScreen_menu}
          onClick={toggleMenu}
        />
      )}
      <div
        className={`${styles.nav_SmallScreen} ${
          menuOpen ? styles.translateOut : styles.translateIn
        }`}
      >
        <div className={styles.left_sSize} onClick={toggleMenu}></div>
        <div className={styles.right_sSize}>
          <ul className={styles.links_smallSize} onBlur={toggleMenu}>
            <Link className={styles.link} tabIndex={2} href="/gallery">
              Project
            </Link>
            <Link className={styles.link} tabIndex={3} href="/gallery">
              Gallery
            </Link>
            <Link className={styles.link} tabIndex={4} href="/about">
              About
            </Link>
            <Link href="/contact">
              <button className="btn" tabIndex={6}>
                Contact me
              </button>
            </Link>
            {/* <Link href="/your_print">Your Print</Link> */}
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavbarSmallScreen;
