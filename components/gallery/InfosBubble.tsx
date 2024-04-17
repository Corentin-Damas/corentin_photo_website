"use client";

import React, { useState } from "react";
import styles from "../gallery/InfosBubble.module.css";
import { IoMdClose } from "react-icons/io";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

function InfosBubble({ txt }: { txt: React.JSX.Element }) {
  const [bubbleOpen, setBubbleOpen] = useState<boolean>(false);

  return (
    <div className={styles.bubble_containeur}>
      {!bubbleOpen ? (
        <div
          className={styles.info_component}
          onClick={() => setBubbleOpen(!bubbleOpen)}
        >
          <HiOutlineChatBubbleBottomCenterText className={styles.icone} />
          <h6 className={styles.project_bubble_info}>Story</h6>
        </div>
      ) : (
        <div
          className={styles.close_component}
          onClick={() => setBubbleOpen(!bubbleOpen)}
        >
          <IoMdClose className={styles.icone} />
          <h6 className={styles.project_bubble_close}>Close</h6>
        </div>
      )}

      {bubbleOpen ? (
        txt
      ) : (
        <div className={`${styles.popUpInformation} ${styles.close}`}></div>
      )}
    </div>
  );
}

export default InfosBubble;
