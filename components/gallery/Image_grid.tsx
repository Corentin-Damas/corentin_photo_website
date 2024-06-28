"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useImgSelected } from "../../providers/imgFav-provider";
import { imagesInfos as imgMetadata } from "../shop/images";
import Save_Icon from "./Save_Icon";
import Popup from "./Popup";
import styles from "./Image_grid.module.css";
import Popup_msg from "./Popup_msg";

function Image_grid({
  images,
  currentDir,
}: {
  images: Array<string>;
  currentDir: string;
}) {
  const possibleStates = { init: "init", firstSelected: "first", done: "done" };
  const imgList = useImgSelected((state) => state.imgSelected);

  const [msgPopUp, setMsgPopUp] = useState<string>(
    imgList.length > 0 ? possibleStates.done : possibleStates.init
  );
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [idxImg, setIdxImg] = useState<number>(0);

  function handleBookMark() {
    if (msgPopUp == possibleStates.init) {
      setMsgPopUp(possibleStates.firstSelected);
      setInterval(() => {
        setMsgPopUp(possibleStates.done);
      }, 5000);
    }
  }

  function handleOnClick(idx: number) {
    setIsOpenPopup((show) => !show);
    setIdxImg(idx);
  }
  // add event lisner escape / quite here
  // useEffect(() => {
  //   if (imgList.length > 0) setMsgPopUp(possibleStates.done);
  // }, [imgList, possibleStates.done]);
  useEffect(() => {
    window.scrollTo(0, 0);
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
              onClick={() => handleOnClick(idx)}
            />
            <div className={styles.bookmarkContainer} onClick={handleBookMark}>
              <Save_Icon imgName={el} />
            </div>
          </li>
        ))}
      </ul>
      {isOpenPopup && (
        <Popup
          imgList={images}
          currentDir={currentDir}
          idxImg={idxImg}
          closePopup={setIsOpenPopup}
        />
      )}
      {/* <Popup_msg/> */}
      {msgPopUp == possibleStates.firstSelected && <Popup_msg />}
    </>
  );
}

export default Image_grid;
