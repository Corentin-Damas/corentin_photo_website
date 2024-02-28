"use client";

import React, { useState } from "react";
import styles from "../gallery/InfosBubble.module.css";
import { IoMdClose } from "react-icons/io";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

function InfosBubble() {
  const [bubbleOpen, setBubbleOpen] = useState<boolean>(false);

  return (
    <div className={styles.bubble_containeur}>
      {!bubbleOpen ? (
        <div className={styles.info_component}>
          <HiOutlineChatBubbleBottomCenterText className={styles.icone} />
          <h6
            className={styles.project_bubble_info}
            onClick={() => setBubbleOpen(true)}
          >
            Story
          </h6>
        </div>
      ) : (
        <div className={styles.close_component}>
          <IoMdClose className={styles.icone} />
          <h6
            className={styles.project_bubble_close}
            onClick={() => setBubbleOpen(false)}
          >
            Close
          </h6>
        </div>
      )}

      {bubbleOpen ? (
        <div className={`${styles.popUpInformation} ${styles.open}`}>
          <p className={styles.popUpInformation_txt}>
            01 - 続きたい &#123;/ tsuzukitai /&#125; can have different
            interpretation depending on the context. The first part 続きcan give
            the idea of continuing something, to follow something But with たい
            it had also the desire, the hope and the wish to...
          </p>
          <p className={styles.popUpInformation_txt}>
            02 - Trapped memories is second name of this project and goes along
            with the first one 続きたい. Between nostalgia and passed moments of
            hapiness that we are continuously coming back to in an infernal loop
            that keeping us from continuing our journey;
          </p>
        </div>
      ) : (
        <div className={`${styles.popUpInformation} ${styles.close}`}>
          this should clodse
        </div>
      )}
    </div>
  );
}

export default InfosBubble;
