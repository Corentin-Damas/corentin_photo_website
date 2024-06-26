"use client"
import React, { useState } from 'react'
import Image from "next/image";


import styles from "./Image_grid.module.css";
import { imagesInfos as imgMetadata } from "../shop/images";
import BookMarkIcon from "../navigation/BookMarkIcon";
import Image_popup from './Image_popup';



function Image_grid({
  images,
  currentDir,
}: {
  images: Array<string>;
  currentDir: string;
}) {
    
  const [isOpenModal, setIsOpenModal] = useState(false)

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
          onClick={()=>setIsOpenModal(show=> !show)}
          
          />


        {/* <BookMarkIcon imgName={el} /> */}
      </li>
    ))}
  </ul>
  {isOpenModal && <Image_popup/>}
    </>
  )
}

export default Image_grid