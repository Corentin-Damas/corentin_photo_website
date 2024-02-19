import React, { Children } from "react";
import Navbar_gallery from "../../../../components/gallery/Navbar_gallery";

import styles from "./layout.module.css";
import Hero_gallery from "../../../../components/gallery/Hero_gallery";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.gallery__grid}>
        <div className={styles.gallery__grid_top}>
          <Hero_gallery />
        </div>
        <div className={styles.gallery__grid_left}>
          <Navbar_gallery />
        </div>
        <div className={styles.gallery__grid_right}>{children}</div>
      </div>
    </>
  );
}

export default layout;
