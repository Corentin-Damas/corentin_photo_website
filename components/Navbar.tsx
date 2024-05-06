"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../components/Navbar.module.css";
import ThemeSwitch from "./ThemeSwitch";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { usePathname } from "next/navigation";
import CartNavBtn from "./CartNavBtn";

function Navbar({ linkMyName }: { linkMyName: string }) {
  const path = usePathname();
  const possibeState = { fixed: "fixed", unFixed: "", init: "init" };
  const [navState, setNavState] = useState(possibeState.init);
  const [lastScroll, setLastScoll] = useState<number>(0);

  const scrollBehaviour = () => {
    const currentScroll = window.scrollY;

    if (currentScroll <= 0) {
      setNavState(possibeState.init);
    } else {
      if (currentScroll < lastScroll && currentScroll > 200) {
        setNavState(possibeState.fixed);
      }
      if (currentScroll > lastScroll) {
        setNavState(possibeState.unFixed);
      }
    }

    setLastScoll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBehaviour);
    return () => {
      window.removeEventListener("scroll", scrollBehaviour);
    };
  });

  if (linkMyName == undefined) {
    linkMyName = "";
  }
  return (
    <>
      <nav
        className={`${styles.nav} ${
          navState == possibeState.fixed
            ? `${styles.nav_fixed} `
            : navState == possibeState.unFixed
            ? `${styles.nav_unfixed}`
            : `${styles.nav_init}`
        } `}
      >
        <div className={styles.nav__items}>
          <Link
            tabIndex={1}
            href={`/${linkMyName}`}
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
            {/* <Link href="/your_print">Your Print</Link> */}
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
      <NavbarSmallScreen linkMyName={linkMyName} />
    </>
  );
}

export default Navbar;
