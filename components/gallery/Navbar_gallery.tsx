"use client";

import React from "react";
import styles from "../gallery/Navbar_gallery.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function Navbar_gallery() {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/" className={styles.myNameLink}>
          Corentin Damas
        </Link>
        <ul className={styles.links__List}>
          <Link href="/gallery" className={styles.normal__link}>
            Gallery
          </Link>
          <h6 className={styles.link__group_name}>Projects</h6>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          >
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
              <Link href="/gallery/earth_and_sky">Between earth and sky</Link>
              <p className={styles.number}>
                _6 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link href="/gallery/infrared">the world in Infrared</Link>
              <p className={styles.number}>
                _7 <span className={styles.bar}>|</span>{" "}
              </p>
              <Link href="/gallery/black_and_white">
                Work in black and white
              </Link>
            </ul>
          </motion.div>
          <Link href="/about" className={styles.normal__link}>
            About
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
