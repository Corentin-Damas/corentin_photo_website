"use client";

import React from "react";
import styles from "../gallery/Navbar_gallery.module.css";
import Link from "next/link";

import { usePathname } from "next/navigation";
import LocalStorage from "../utils/LocalStorage";

function Navbar_gallery() {
  const path = usePathname();
  LocalStorage();

  const projectLinks = [
    {
      id: "1",
      path: "/gallery/tsuzukitai",
      title: "Trapped memories",
    },
    {
      id: "2",
      path: "/gallery/a_year_in_japan",
      title: "A year in japan",
    },
    {
      id: "3",
      path: "/gallery/morning_shadows",
      title: "Morning Shadows",
    },
    {
      id: "4",
      path: "/gallery/museums",
      title: "Museums",
    },
  ];
  const sideProjectLinks = [
    {
      id: "5",
      path: "/gallery/earth_and_sky",
      title: "Between earth and sky",
    },
    {
      id: "6",
      path: "/gallery/infrared",
      title: "The world in infrared",
    },
    {
      id: "7",
      path: "/gallery/black_and_white",
      title: "Work in black and white",
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.links__list}>
        <h6 className={styles.links__list_name}>Projects</h6>
        <ul className={`${styles.link__group}`}>
          {projectLinks.map((el) => (
            <li className={styles.link__li} key={el.id}>
              <p className={styles.number}>
                _{el.id} <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                scroll={true}
                href={el.path}
                className={`${path == el.path ? styles.currPage : ""} ${
                  styles.link__li_title
                }`}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>

        <h6 className={styles.links__list_name}>Side works</h6>
        <ul className={styles.link__group}>
          {sideProjectLinks.map((el) => (
            <li className={styles.link__li} key={el.id}>
              <p className={styles.number}>
                _{el.id} <span className={styles.bar}>|</span>{" "}
              </p>
              <Link
                scroll={true}
                href={el.path}
                className={`${path == el.path ? styles.currPage : ""}  ${
                  styles.link__li_title
                }`}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar_gallery;
