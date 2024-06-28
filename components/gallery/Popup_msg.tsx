import React from "react";
import styles from "./Popup_msg.module.css";
import { FaBookmark } from "react-icons/fa";

function Popup_msg() {
  return (
    <div className={styles.popupMsg}>
      <div className={styles.popupMsg__title}>
        <FaBookmark className={styles.popupMsg__icon}/>
        <h3>Saved</h3>
      </div>
      <p>
        Go to the shop to create your own print or frame for a gift or for you.
      </p>
    </div>
  );
}

export default Popup_msg;
