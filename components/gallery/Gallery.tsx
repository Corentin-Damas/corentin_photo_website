"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./../gallery/Image_grid.module.css";

const GalleryImg = ({
  images,
  currentDir,
}: {
  images: Array<string>;
  currentDir: string;
}) => {
  const [dialog, setDialog] = useState(false);
  const [imgSelected, setImageSelected] = useState(0);

  // function handleImgChange(s: string) {
  //   const idxNextImg: number = images.findIndex((el) => el == s);
  //   console.log(idxNextImg, imgSelected);
  //   console.log("nextImage is", images[idxNextImg]);
  //   setImageSelected(images[idxNextImg]);
  // }

  function handlePreviewClick(idx: number) {
    setImageSelected(idx);
    setDialog(!dialog);
  }

  function handlePrev() {
    if (imgSelected == 0) {
      setImageSelected(images.length - 1);
    } else {
      setImageSelected(imgSelected - 1);
    }
  }
  function handleNext() {
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

  useEffect(() => {
    keyDownDetected();
    return window.removeEventListener("keydown", keyDownDetected);
  });

  // document.body.addEventListener('keydown', function(e){
  //   if (e.key == "ArrowLeft") {

  //     handlePrev()
  //   }
  //   if (e.key == "ArrowRight") {

  //     handleNext()
  //   }
  //   if (e.key == "Escape"){
  //     handleClose()
  //   }
  // })

  return (
    <>
      <ul className={style.grid}>
        {images.map((el: string, idx: number) => (
          <li
            className={style.card}
            key={el}
            onClick={() => handlePreviewClick(idx)}
          >
            <Image
              className={style.img}
              sizes="100vw"
              width={0}
              height={0}
              alt={`picture from the photo series ${currentDir}`}
              src={`/${currentDir}/S/${el}`}
              quality={80}
            />
          </li>
        ))}
      </ul>
      <div>
        {dialog && (
          <>
            <div className={style.popUpImg__Container}>
              <div>
                <div className={style.arrows_container}>
                  <Image
                    src={`./${currentDir}/../../icons/arrow_left.svg`}
                    alt="return back arrow"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className={style.arrows_left}
                    onClick={handlePrev}
                  />
                </div>
              </div>
              <Image
                className={style.popUpImg__img}
                sizes="100vw"
                width={0}
                height={0}
                alt={`picture from the photo series ${currentDir}`}
                src={`/${currentDir}/L/${images[imgSelected]}`}
                quality={100}
              />
              <div>
                <div className={style.arrows_container}>
                  <Image
                    src={`./${currentDir}/../../icons/arrow_right.svg`}
                    alt="return back arrow"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className={style.arrows_right}
                    onClick={handleNext}
                  />
                </div>
              </div>
            </div>
            <div className={style.close_container}>
                <Image
                  src={`./${currentDir}/../../icons/close.svg`}
                  alt="return back arrow"
                  sizes="100vw"
                  width={0}
                  height={0}
                  className={style.close}
                  onClick={handleClose}
                />
              </div>
          </>
        )}
      </div>
    </>
  );
};

export default GalleryImg;
