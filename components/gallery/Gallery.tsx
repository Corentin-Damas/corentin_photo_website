"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./../gallery/Image_grid.module.css";
import { GrFormPrevious, GrFormNext, GrFormClose } from "react-icons/gr";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { imagesInfos } from "../shop/images";
import BookMarkIcon from "../navigation/BookMarkIcon";

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

  const handlePrev = useCallback(() => {
    {
      setImageBigLoading(true);
      if (imgSelected == 0) {
        setImageSelected(images.length - 1);
      } else {
        setImageSelected(imgSelected - 1);
      }
    }
  }, [images.length, imgSelected]);

  const handleNext = useCallback(() => {
    setImageBigLoading(true);
    if (imgSelected == images.length - 1) {
      setImageSelected(0);
    } else {
      setImageSelected(imgSelected + 1);
    }
  }, [images.length, imgSelected]);
  const handleClose = useCallback(() => {
    setDialog(false);
  }, []);

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
  const keyDownDetected = useCallback(
    (e: any) => {
      if (e.key == "ArrowLeft") {
        handlePrev();
      }
      if (e.key == "ArrowRight") {
        handleNext();
      }
      if (e.key == "Escape") {
        handleClose();
      }
    },
    [handlePrev, handleNext, handleClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownDetected);

    return () => document.removeEventListener("keydown", keyDownDetected);
  });

  return (
    <>
      <ul className={styles.grid}>
        {images.map((el: string, idx: number) => (
          <li className={styles.card} key={el}>
            {/* ----------------- Gallery tiles ----------------- */}
            <Image
              src={`/${currentDir}/S/${el}`}
              className={`${styles.img} ${
                isImageLoading ? "unLoaded" : "remove-unLoaded"
              } ${
                imagesInfos[el.slice(0, -4)].form == "vertical" &&
                styles.verticalAdjus
              }`}
              sizes="(max-width: 768px) 100vw, 75vw"
              width={1080}
              height={0}
              quality={80}
              alt={`picture from the photo series ${currentDir}`}
              loading="lazy"
              onClick={() => handlePreviewClick(idx)}
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
                width={2100}
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
            <div className={`${styles.fav_container} ${styles.mobileContre}`}>
              <div className={styles.fav_divAligne}>
                <BookMarkIcon imgName={images[imgSelected]} />
              </div>
            </div>
          </>
        )}
      </div>
      <FaArrowUp
        className={styles.upIcone}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {dialog && (
        <div className={styles.mobilAction}>
          <BookMarkIcon imgName={images[imgSelected]} />
          <div className={styles.mobile_arrows}>
            <GrFormPrevious
              className={`${styles.icone_mobile} ${styles.icone_left_mobile}`}
              onClick={handlePrev}
            />
            <GrFormNext
              className={`${styles.icone_mobile} ${styles.icone_right_mobile}`}
              onClick={handleNext}
            />
          </div>
          <GrFormClose className={styles.icone_mobile} onClick={handleClose} />
        </div>
      )}
    </>
  );
};

export default GalleryImg;
