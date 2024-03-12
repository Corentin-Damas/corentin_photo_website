"use client";
import React, { useState } from "react";
import styles from "../gift/Select_img.module.css";

import Image from "next/image";
import { useImgSelected } from "../../providers/imgFav-provider";

function Select_img() {
  const imgList = useImgSelected((state) => state.imgSelected);
  const testImg = [
    "01-a_year_in_japan.jpg",
    "11-a_year_in_japan.jpg",
    "03-black_and_white.jpg",
  ];
  const [imgSample, setImageSample] = useState("");

  return (
    <div className={styles.fram__content__container}>
      <div className={styles.fram__content__left}>
        <div className={styles.img_container}>
          {imgSample.length <= 0 ? (
            <Image
              src="/util_img/wall_img01.jpg"
              alt="Corentin Damas with one of is framed picture on a customer's wall"
              className={`${styles.img__wall}`}
              sizes="100vw"
              width={0}
              height={0}
              quality={80}
            />
          ) : (
            <Image
              src={`/${imgSample.slice(3, -4)}/S/${imgSample}`}
              alt="Corentin Damas with one of is framed picture on a customer's wall"
              className={`${styles.img__selected}`}
              sizes="100vw"
              width={0}
              height={0}
              quality={80}
            />
          )}
        </div>
      </div>

      <div className={styles.fram__content__right}>
        <h4>Select your image</h4>
        <div className={styles.select_container}>
          <ul className={styles.imgs_flex}>
            {testImg.map((el) => (
              <li className={styles.imgPrev} key={el}>
                <Image
                  src={`/${el.slice(3, -4)}/S/${el}`}
                  alt="Selected images from the gallery"
                  className={`${styles.img}`}
                  sizes="100vw"
                  width={0}
                  height={0}
                  quality={80}
                  onClick={() => setImageSample(el)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Select_img;
