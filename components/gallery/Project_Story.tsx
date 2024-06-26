"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import styles from "../gallery/Project_Story.module.css";

function Project_Story({ txt }: { txt: React.JSX.Element }) {
  const [is_OpenStory, setIs_OpenStory] = useState<boolean>(false);

  return (
    <div className={styles.story__container}>
      <button
        className={styles.story__btn}
        onClick={() => setIs_OpenStory(!is_OpenStory)}
      >
        {!is_OpenStory ? (
          <HiOutlineChatBubbleBottomCenterText className={styles.icone} />
        ) : (
          <IoMdClose className={styles.icone} />
        )}

        <h6 className={styles.story__btn_txt}>|</h6>
        <h6 className={styles.story__btn_txt}>
          {!is_OpenStory ? "Story" : "Close"}
        </h6>
      </button>
      {is_OpenStory && txt}
    </div>
  );
}

export default Project_Story;
