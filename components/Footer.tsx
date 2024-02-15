import React from "react";
import Link from "next/link";
import styles from "../components/Footer.module.css";

const date = new Date().getFullYear()

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columnsContainer}>
        <div className={styles.left}>
          <h2 className={styles.footer__columnHead}>Corentin Damas</h2>
          <div>
            <p className={styles.footer__text}>
              Fra _<span className="main-Color">&gt;</span> 0668911893
            </p>
            <p className={styles.footer__text}>
              Int _<span className="main-Color">&gt;</span> +33668911893
            </p>
            <p className={styles.footer__text}>corentin.damasphoto@gmail.com</p>
          </div>
          <button className={styles.footer__btn}>Contact me</button>
        </div>
        <div className={styles.right}>
          <h5 className={`${styles.footer__Nav} ${styles.footer__columnHead}  ${styles.grey}`}>
          Navigation
          </h5>
          <ul className={styles.links}>
            <Link href="/project">Morning shadows</Link>
            <Link href="/project">A year in japan</Link>
            <Link href="/about">Landscapes</Link>
            <Link href="/project">Infrared</Link>
            <Link href="/project">Black & white</Link>
            <Link href="/about">About</Link>
            <Link href="/about">Contact</Link>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright &copy; {date} Corentin Damas | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
