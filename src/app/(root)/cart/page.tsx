import React from "react";
import Navbar from "../../../../components/shop/navigation/Navbar";
import styles from "./page.module.css";
import Footer from "../../../../components/footer/Footer";

import CartFetching from "../../../../components/cart/CartFetching";

function page({ searchParams }: { searchParams: any }) {
  return (
    <>
      <header className={styles.header}>
        <Navbar linkMyName=" " />
        <div className={styles.heroSection}>
          <h3 className={styles.hero_title}>Cart</h3>
        </div>
      </header>
      <section className={styles.content__container}>
        <CartFetching searchParams={searchParams} />
      </section>

      <Footer />
    </>
  );
}

export default page;
