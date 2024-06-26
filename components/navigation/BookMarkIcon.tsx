"use client"
import React from "react";
import styles from "./bookMark.module.css";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { useImgSelected } from "../../providers/imgFav-provider";

function BookMarkIcon({ imgName }: { imgName: string }) {
  const imgList = useImgSelected((state) => state.imgSelected);
  const addImg = useImgSelected((state) => state.addImgSelected);
  const remImg = useImgSelected((state) => state.removeImgSelected);

  return (
    <>
      {imgList.includes(imgName) ? (
        <div
          className={styles.bookmark_full_containeur}
          onClick={() => remImg(imgName)}
        >
          <FaBookmark className={styles.bookmark_full} />
        </div>
      ) : (
        <div
          className={styles.bookmark_empty_containeur}
          onClick={() => addImg(imgName)}
        >
          <FaRegBookmark className={styles.bookmark_empty} />
        </div>
      )}
    </>
  );
}

export default BookMarkIcon;
