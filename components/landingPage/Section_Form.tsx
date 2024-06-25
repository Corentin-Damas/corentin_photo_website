import styles from "./Section_Form.module.css";
import Image from "next/image";
import Link from "next/link";
import Form from "../utils/Form";

function Section_Form() {
  return (
    <>
    <section className={styles.formulare}>
      <h6 className={styles.formulare__lSide}>Photographer</h6>
      <div className={styles.formulare__presentation}>
        <h5 className={`${styles.presentation__myName} geologica`}>Corentin Damas</h5>
        <div className={styles.presentation__proposition}>
          <p>Digital & Films</p>
          <div className={styles.dot}></div>
          <p className={styles.presentation__proposition_txt}>
            Numeric and film. Film are developed and print in my darkroom.
          </p>
        </div>
        <div className={styles.presentation__proposition}>
          <p>Prints & Books</p>
          <div className={styles.dot}></div>
          <p className={styles.presentation__proposition_txt}>
            Personalised High quality print for your wall or for presents.
          </p>
        </div>
      </div>

      <div className={styles.form__containeur}>
        <h5>Ask me anything</h5>
        <Form context={"normal"} />
      </div>

      <div className={styles.formulare__rSide}>
        <Link href={"/about"}>
          <Image
            src="/landingpage/color_headS.jpg"
            alt="Photography of Corentin Damas author of the website and photographies "
            className={`${styles.imgHeadS}`}
            sizes="100vw"
            width={720}
            height={480}
            quality={80}
          />
        </Link>
        <Link
          href={"/about"}
          className={`${styles.rSide__about_link} gallery_Link`}
        >
          About _<span className="main-Color">&gt;</span>
        </Link>
      </div>
    </section>
    <div className={styles.link__container}>
      <Link
        href={"/gallery"}
        className={`${styles.final__link} gallery_Link`}
      >
        Check the Gallery _<span className="main-Color">&gt;</span>
      </Link>
    </div>
  </>
  )
}

export default Section_Form