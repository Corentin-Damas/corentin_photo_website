import styles from "../main_section/section_cta.module.css";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";

function section_cta() {
  return (
    <>
      <section className={styles.sectionCta__Grid}>
        <div className={styles.presentation}>
          <h4 className={styles.myName}>Corentin Damas</h4>
          <div className={styles.proposition}>
            <p >
              Digital & Films
            </p>
            <div className={styles.dot}></div>
            <p className={styles.proposition__txt}>
              Numeric and film. Film are developed and print in my darkroom.{" "}
            </p>
          </div>
          <div className={styles.proposition}>
            <p>Prints & Books</p>
            <div className={styles.dot}></div>
            <p className={styles.proposition__txt}>
              Personalised High quality print for your wall or for presents.{" "}
            </p>
          </div>
        </div>
        <div className={styles.formular__containeur}>
          <h5>Ask me anything</h5>
          <Form/>
        </div>
        <div className={styles.gap}></div>
        <div className={styles.right__container}>
          <Image
            src="/landingpage/color_headS.jpg"
            alt="Photography of Corentin Damas author of the website and photographies "
            className={`${styles.imgHeadS}`}
            fill
            quality={80}
          />
        </div>
      </section>
      <div className={styles.link__container}>
        <Link
          href={"/gallerie"}
          className={`${styles.final__link} gallery_Link`}
        >
          Check the Gallery _<span className="main-Color">&gt;</span>
        </Link>
      </div>
    </>
  );
}

export default section_cta;
