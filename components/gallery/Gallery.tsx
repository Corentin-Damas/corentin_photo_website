"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./../gallery/Image_grid.module.css";
import { GrFormPrevious, GrFormNext, GrFormClose } from "react-icons/gr";
import { motion } from "framer-motion";

import BookMarkIcon from "../BookMarkIcon";

const GalleryImg = ({
  images,
  currentDir,
}: {
  images: Array<string>;
  currentDir: string;
}) => {
  const [dialog, setDialog] = useState(false);
  const [imgSelected, setImageSelected] = useState(0);
  const [isImageLoading, setImageLoading] = useState(true);
  const [isImageBigLoading, setImageBigLoading] = useState(true);


  function handlePreviewClick(idx: number) {
    setImageBigLoading(true);
    setImageSelected(idx);
    setDialog(!dialog);
  }

  function handlePrev() {
    setImageBigLoading(true);
    if (imgSelected == 0) {
      setImageSelected(images.length - 1);
    } else {
      setImageSelected(imgSelected - 1);
    }
  }
  function handleNext() {
    setImageBigLoading(true);
    if (imgSelected == images.length - 1) {
      setImageSelected(0);
    } else {
      setImageSelected(imgSelected + 1);
    }
  }
  function handleClose() {
    setDialog(false);
  }

  function keyDownDetected() {
    window.addEventListener("keydown", function (e) {
      if (e.key == "ArrowLeft") {
        handlePrev();
      }
      if (e.key == "ArrowRight") {
        handleNext();
      }
      if (e.key == "Escape") {
        handleClose();
      }
    });
  }

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: any) => {
    setTouchEnd(null);
    setTouchStart(null);
    try {
      setTouchStart(e.nativeEvent.touches[0].pageX);
    } catch (e) {
      return;
    }
  };

  const onTouchMove = (e: any) => {
    try {
      setTouchEnd(e.nativeEvent.touches[0].pageX);
    } catch (e) {
      return;
    }
  };

  const onTouchEnd = () => {
    console.log("end:", touchStart, touchEnd);
    if (!touchStart || !touchEnd) return;
    if (Math.abs(touchStart - touchEnd) > minSwipeDistance) {
      if (touchStart < touchEnd) {
        handlePrev();
      }
      if (touchStart > touchEnd) {
        handleNext();
      }
    } else {
      setTouchEnd(null);
      setTouchStart(null);
    }
  };

  useEffect(() => {
    keyDownDetected();
    return window.removeEventListener("keydown", keyDownDetected);
  });

  return (
    <>
      <ul className={styles.grid}>
        {images.map((el: string, idx: number) => (
          <li
            className={styles.card}
            key={el}
            >
            <Image
              src={`/${currentDir}/S/${el}`}
              className={`${styles.img} ${
                isImageLoading ? "unLoaded" : "remove-unLoaded"
              }`}
              sizes="100vw"
              onClick={() => handlePreviewClick(idx)}
              width={0}
              height={0}
              alt={`picture from the photo series ${currentDir}`}
              quality={80}
              loading="lazy"
              onLoad={() => setImageLoading(false)}
            />
            <BookMarkIcon imgName={el} />
          </li>
        ))}
      </ul>
      <div>
        {dialog && (
          <>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 0, opacity: 0, scale: 0 }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
              className={styles.popUpImg__Container}
            >
              <div>
                <div className={styles.arrows_container}>
                  <GrFormPrevious
                    className={`${styles.icone} ${styles.icone_left}`}
                    onClick={handlePrev}
                  />
                </div>
              </div>
              <Image
                className={`${styles.popUpImg__img} ${
                  isImageBigLoading ? "unLoaded" : "remove-unLoaded"
                }`}
                sizes="100vw"
                width={0}
                height={0}
                alt={`picture from the photo series ${currentDir}`}
                src={`/${currentDir}/L/${images[imgSelected]}`}
                quality={100}
                onLoad={() => setImageBigLoading(false)}
                onMouseDown={onTouchStart}
                onMouseMove={onTouchMove}
                onMouseUp={onTouchEnd}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              />
              <div>
                <div
                  className={`${styles.arrows_container} ${styles.arrows_right}`}
                >
                  <GrFormNext
                    className={`${styles.icone} ${styles.icone_right}`}
                    onClick={handleNext}
                  />
                </div>
              </div>
            </motion.div>
            <div className={styles.close_container}>
              <GrFormClose className={styles.icone} onClick={handleClose} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GalleryImg;
