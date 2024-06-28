import React from "react";
import styles from "./Save_description.module.css";
import { FaBookmark } from "react-icons/fa";
import Link from "next/link";
// Save_description

function Save_description() {
  return (
    <div className={styles.popupMsg}>
      <div className={styles.popupMsg__title}>
        <FaBookmark className={styles.popupMsg__icon} />
        <h3>Bookmark a picture</h3>
      </div>
      <p>
        Register the picture for later. Create your own print or frame for a
        gift or for you.
      </p>
      <h5>
        <Link className={styles.linkShop} href="/shop">
          Go to the Shop.
        </Link>
      </h5>
    </div>
  );
}

export default Save_description;
