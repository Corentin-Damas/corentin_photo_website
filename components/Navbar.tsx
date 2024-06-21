"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../components/Navbar.module.css";
import ThemeSwitch from "./ThemeSwitch";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { usePathname } from "next/navigation";
import CartNavBtn from "./CartNavBtn";
import LocalStorage from "./LocalStorage";

function Navbar() {
  const path = usePathname();
  LocalStorage()

  return (
    <>
      <nav
        className={`${styles.nav} `}
      >
        <div className={styles.nav__items}>
          <Link
            tabIndex={1}
            href={`/`}
            className={styles.myNameLink}
          >
            Corentin Damas
          </Link>
          <ul className={styles.links_fullSize}>
            <Link
              className={`${styles.link} ${
                path == "/gallery" ? styles.currPage : ""
              }`}
              tabIndex={3}
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className={`${styles.link} ${
                path == "/about" ? styles.currPage : ""
              }`}
              tabIndex={4}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${styles.link} ${
                path == "/shop" ? styles.currPage : ""
              }`}
              tabIndex={2}
              href="/shop"
            >
              Shop
            </Link>
          </ul>
          <div className={styles.actions}>
            <CartNavBtn />

            <ThemeSwitch context={"landing"} />
            

            <Link href="/contact">
              <button className="btn" tabIndex={6}>
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <NavbarSmallScreen />
    </>
  );
}

export default Navbar;
