"use client";
import React, { useEffect, useState } from "react";
import styles from "./ThemeSwitch.module.css";
import { TbHaze, TbHazeMoon } from "react-icons/tb";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div className={styles.spinner}></div>
    );
  if (resolvedTheme === "dark") {
    return (
      <div className={styles.theme_container}>
        <TbHaze

          className={`${styles.icone} ${
             styles.icone_landing 
          }`}
          onClick={() => setTheme("light")}
        />
        <p className={`${styles.theme_txt} dark_mode_only`}>light mode</p>
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div className={styles.theme_container}>
        <TbHazeMoon
          className={`${styles.icone} ${
            styles.icone_landing 
          }`}
          onClick={() => setTheme("dark")}
        />
        <p className={`${styles.theme_txt} light_mode_only`}>dark mode</p>
      </div>
    );
  }
}

export default ThemeSwitch;
