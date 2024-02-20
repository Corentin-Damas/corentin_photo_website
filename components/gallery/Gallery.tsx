"use client";
import React, { useState } from "react";
import Image from "next/image";
import style from "./../gallery/Image_grid.module.css";

const GalleryImg = ({
  images,
  currentDir,
}: {
  images: Array<string>;
  currentDir: string;
}) => {
  const [imgSelected, setImageSelected] = useState("");
  return (
    <>
      <ul className={style.grid}>
        {images.map((el: string) => (
          <li
            className={style.card}
            key={el}
            onClick={() => setImageSelected(el)}
          >
            <Image
              className={style.img}
              sizes="100vw"
              width={0}
              height={0}
              alt={`picture from the photo series ${currentDir}`}
              src={`/${currentDir}/${el}`}
              quality={80}
            />
          </li>
        ))}
      </ul>
      {imgSelected != "" ? (
        <div className={style.popUpImg__Container} onClick={() => setImageSelected("")}>
          <Image
            className={style.popUpImg__img}
            sizes="100vw"
            width={0}
            height={0}
            alt={`picture from the photo series ${currentDir}`}
            src={`/${currentDir}/${imgSelected}`}
            quality={80}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default GalleryImg;
