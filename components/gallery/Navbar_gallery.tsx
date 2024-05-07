"use client";

import React from "react";
import styles from "../gallery/Navbar_gallery.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useImgSelected } from "../../providers/imgFav-provider";
import LocalStorage from "../LocalStorage";

function Navbar_gallery() {
  const path = usePathname();
  LocalStorage()

  const imgList = useImgSelected((state) => state.imgSelected);
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.myNameLink}>
          Corentin Damas
        </Link>
        <ul className={styles.links__List}>
          <h6 className={styles.link__group_name}>Projects</h6>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
            <ul className={`${styles.link__group} ${styles.link__first}`}>
              <p className={styles.number}>
                _1 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                href="/gallery/tsuzukitai"
                className={`${
                  path == "/gallery/tsuzukitai" ? styles.currPage : ""
                }`}
              >
                Trapped memories
              </Link>
              <p className={styles.number}>
                _2 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                href="/gallery/a_year_in_japan"
                className={`${
                  path == "/gallery/a_year_in_japan" ? styles.currPage : ""
                }`}
              >
                {" "}
                A year in japan
              </Link>
              <p className={styles.number}>
                _3 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                href="/gallery/morning_shadows"
                className={`${
                  path == "/gallery/morning_shadows" ? styles.currPage : ""
                }`}
              >
                Morning Shadows
              </Link>
              <p className={styles.number}>
                _4 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                href="/gallery/museums"
                className={`${
                  path == "/gallery/museums" ? styles.currPage : ""
                }`}
              >
                Museums
              </Link>
            </ul>
          </motion.div>
          <h6 className={styles.link__group_name}>Side works</h6>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
            <ul className={styles.link__group}>
              <p className={styles.number}>
                _5 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                href="/gallery/earth_and_sky"
                className={`${
                  path == "/gallery/earth_and_sky" ? styles.currPage : ""
                }`}
              >
                Between earth and sky
              </Link>
              <p className={styles.number}>
                _6 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                href="/gallery/infrared"
                className={`${
                  path == "/gallery/infrared" ? styles.currPage : ""
                }`}
              >
                the world in Infrared
              </Link>
              <p className={styles.number}>
                _7 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                href="/gallery/black_and_white"
                className={`${
                  path == "/gallery/black_and_white" ? styles.currPage : ""
                }`}
              >
                Work in black and white
              </Link>
            </ul>
          </motion.div>
          <Link
            href="/gallery"
            className={`${styles.normal__link} ${
              path == "/gallery" ? styles.currPage : ""
            } ${styles.first_normal__link}`}
  
            >
            Gallery
          </Link>
          <Link href="/about" className={`${styles.normal__link}`}>
            About
          </Link>
          <Link
            href="/shop"
            className={`${styles.normal__link} ${styles.gift__link} `}
            >
            Shop
            <p
              className={`${styles.dot} ${
                imgList.length > 0 ? styles.dot_on : ""
              }`}
              ></p>
          </Link>
        </ul>
        <Link href="/contact">
          <button className={`${styles.contactMe} btn`}>contact me</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar_gallery;
