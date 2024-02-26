"use client";
import React, { useEffect, useState } from "react";
import styles from "../components/ThemeSwitch.module.css";
import { TbHaze, TbHazeMoon } from "react-icons/tb";
import { useTheme } from "next-themes";
import Image from "next/image";

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={50}
        height={50}
        sizes="50x50"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  if (resolvedTheme === "dark") {
    return (
      <div className={styles.icone__container}>
        <TbHaze
          tabIndex={5}
          className={styles.icone}
          onClick={() => setTheme("light")}
        />
        {/* <p className={styles.icone__txt}> switch to light them</p> */}
      </div>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <div>
        <TbHazeMoon
          tabIndex={5}
          className={styles.icone}
          onClick={() => setTheme("dark")}
        />
      </div>
    );
  }
}

export default ThemeSwitch;
