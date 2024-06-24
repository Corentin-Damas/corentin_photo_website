import React from "react";
import Navbar_gallery from "../../../../components/gallery/Navbar_gallery";
import styles from "./layout.module.css";
import Footer from "../../../../components/footer/Footer";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.gallery__grid}>
        <div className={styles.gallery__grid_left}>
          <Navbar_gallery />
        </div>
        <div className={styles.gallery__grid_right}>{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default layout;
