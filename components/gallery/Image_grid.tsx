"use client"
import React, { useState } from 'react'
import Image from "next/image";


import styles from "./Image_grid.module.css";
import { imagesInfos as imgMetadata } from "../shop/images";
import BookMarkIcon from "../navigation/BookMarkIcon";
import Popup from './Popup';



function Image_grid({
  images,
  currentDir,
}: {
  images: Array<string>;
  currentDir: string;
}) {
    
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false)
  const [idxImg, setIdxImg] = useState<number>(0)

  function handleOnClick(idx: number) {
    setIsOpenPopup(show=> !show)
    setIdxImg(idx)
  }
  // add event lisner escape / quite here

  return (
    <>
    <ul className={styles.grid}>
    {images.map((el: string, idx: number) => (
      <li className={styles.card} key={el}>
        {/* ----------------- Gallery tiles ----------------- */}
        
        <Image
          src={`/${currentDir}/S/${el}`}
          className={`${styles.img} ${
            imgMetadata[el.slice(0, -4)].form == "vertical" &&
            styles.verticalAdjus
          }`}
          sizes="(max-width: 768px) 100vw, 75vw"
          width={1080}
          height={0}
          quality={80}
          loading={idx < 6 ? "eager" : "lazy"}
          alt={`picture from the photo series ${currentDir}`}
          //   onClick={() => handlePreviewClick(idx)}
          onClick={()=>handleOnClick(idx)}
          
          />


        {/* <BookMarkIcon imgName={el} /> */}
      </li>
    ))}
  </ul>
  {isOpenPopup && <Popup imgList={images} currentDir={currentDir} idxImg={idxImg} closePopup={setIsOpenPopup} />}
    </>
  )
}

export default Image_grid