"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeSwitch from "./ThemeSwitch";
import NavbarSmallScreen from "./NavbarSmallScreen";
import { usePathname } from "next/navigation";
import CartNavBtn from "./CartNavBtn";
import LocalStorage from "../utils/LocalStorage";
import { useState, useEffect } from "react";

function Navbar() {
  const path = usePathname();
  LocalStorage();
  const [lastScroll, setLastScoll] = useState<number>(0);

  useEffect(() => {
    const scrollBehaviour = () => {
      setLastScoll(window.scrollY);
    };
    scrollBehaviour();

    window.addEventListener("scroll", scrollBehaviour);
    return () => {
      window.removeEventListener("scroll", scrollBehaviour);
    };
  }, []);

  return (
    <>
      <nav
        className={`${styles.nav} ${lastScroll > 80 ? styles.nav__bg : ""} `}
      >
        <div className={styles.nav__items}>
          <Link href={`/`} className={styles.myLogo} tabIndex={1}>
            Corentin Damas
          </Link>
          <ul className={styles.nav__links}>
            <Link
              className={`${styles.link} ${
                path == "/gallery" ? styles.currPage : ""
              }`}
              href="/gallery"
              tabIndex={2}
            >
              Gallery
            </Link>
            <Link
              className={`${styles.link} ${
                path == "/about" ? styles.currPage : ""
              }`}
              href="/about"
              tabIndex={3}
            >
              About
            </Link>
            <Link
              className={`${styles.link} ${
                path == "/shop" ? styles.currPage : ""
              }`}
              href="/shop"
            >
              Shop
            </Link>
          </ul>
          <div className={styles.nav__actions}>
            <CartNavBtn />
            <ThemeSwitch />
            <Link href="/contact">
              <button className="btn-cta">Contact me</button>
            </Link>
          </div>
        </div>
      </nav>
      <NavbarSmallScreen />
    </>
  );
}

export default Navbar;
