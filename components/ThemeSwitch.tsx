"use client";
import React, { useEffect, useState } from "react";
import styles from "../components/ThemeSwitch.module.css";
import { FiSun, FiMoon } from "react-icons/fi";
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
        width={100}
        height={100}
        sizes="100x100"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  if (resolvedTheme === "dark") {

    return <FiSun className={styles.icone} onClick={() => setTheme("light")} />;
  }
  if (resolvedTheme === "light") {
    return <FiMoon className={styles.icone} onClick={() => setTheme("dark")} />;
  }
}

export default ThemeSwitch;
