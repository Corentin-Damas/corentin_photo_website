"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "../gallery/nav_gallerySmallSize.module.css";
import { GrFormClose } from "react-icons/gr";
import { CgMenuRightAlt } from "react-icons/cg";
import { usePathname } from "next/navigation";

function Nav_gallerySmallSize() {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const path = usePathname();
  return (
    <nav className={styles.smallGalleryNav}>
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
            <div className={styles.link}>
              <Link href="/" className={styles.myNameLink}>
                Corentin Damas
              </Link>
            </div>
            <div className={styles.link}>
              <p>0</p>
              <Link
                href="/gallery"
                className={`${path == "/gallery" ? styles.currPage : ""}`}
              >
                Gallery
              </Link>
            </div>
            <div className={styles.link}>
              <p>1</p>
              <Link
                href="/gallery/tsuzukitai"
                className={`${
                  path == "/gallery/tsuzukitai" ? styles.currPage : ""
                }`}
              >
                Trapped memories
              </Link>
            </div>
            <div className={styles.link}>
              <p>2</p>
              <Link
                href="/gallery/a_year_in_japan"
                className={`${
                  path == "/gallery/a_year_in_japan" ? styles.currPage : ""
                }`}
              >
                A year in japan
              </Link>
            </div>
            <div className={styles.link}>
              <p>3</p>
              <Link
                href="/gallery/morning_shadows"
                className={`${
                  path == "/gallery/morning_shadows" ? styles.currPage : ""
                }`}
              >
                Morning Shadows
              </Link>
            </div>
            <div className={styles.link}>
              <p>4</p>
              <Link
                href="/gallery/museums"
                className={`${
                  path == "/gallery/museums" ? styles.currPage : ""
                }`}
              >
                Museums
              </Link>
            </div>
            <div className={styles.link}>
              <p>5</p>
              <Link
                href="/gallery/earth_and_sky"
                className={`${
                  path == "/gallery/earth_and_sky" ? styles.currPage : ""
                }`}
              >
                Between earth and sky
              </Link>
            </div>
            <div className={styles.link}>
              <p>6</p>
              <Link
                href="/gallery/infrared"
                className={`${
                  path == "/gallery/infrared" ? styles.currPage : ""
                }`}
              >
                the world in Infrared
              </Link>
            </div>
            <div className={styles.link}>
              <p>7</p>
              <Link
                href="/gallery/black_and_white"
                className={`${
                  path == "/gallery/black_and_white" ? styles.currPage : ""
                }`}
              >
                Work in black and white
              </Link>
            </div>
            <Link href="/about">about</Link>
            <Link href="/contact">contact</Link>
            <Link href="/shop">shop</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav_gallerySmallSize;
