"use client";
import React, { useEffect, useState } from "react";
import styles from "../gift/Select_img.module.css";

import Image from "next/image";
import { useImgSelected } from "../../providers/imgFav-provider";
import Select_print from "./Select_print";
import { possileFrames } from "./productInfos";
import { PiInfo } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Select_img() {
  const imgList = useImgSelected((state) => state.imgSelected);
  const testImg = [
    "01-a_year_in_japan.jpg",
    "11-a_year_in_japan.jpg",
    "03-black_and_white.jpg",
  ];

  const [imgSample, setImageSample] = useState("");

  const [framed, setFramed] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productShortDesc, setProductShortDesc] = useState("");
  const [productSpec, setProductSpec] = useState("");

  const [infoBoxOpen, setInfoBoxOpen] = useState(false);

  Object.values(possileFrames.simplePrint.paper).map((el) =>
    console.log(el.name)
  );

  function handleBtnSelectorClick(el: any) {
    if (imgSample == "") {
      setImageSample("04-earth_and_sky.jpg");
    }
    setFramed(el.name);
    setProductDesc(el.desc);
    setProductSpec(el.spec);
    setProductShortDesc(el.tltr);
  }

  const possibleState = { fixed: "fixed", unFixed: "unfixed" };
  const [navState, setNavState] = useState(possibleState.unFixed);
  const scrollBehaviour = () => {
    const currentScroll = window.scrollY;
    const windSize = window.innerHeight;
    const height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    if (currentScroll >= height - windSize * 1.52) {
      setNavState(possibleState.fixed);
    } else {
      setNavState(possibleState.unFixed);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBehaviour);
    return () => {
      window.removeEventListener("scroll", scrollBehaviour);
    };
  });

  return (
    <div className={styles.fram__content__container}>
      <div className={styles.fram__content__left}>
        <div
          id="imgContainer"
          className={`${styles.img_container} ${
            navState == possibleState.fixed
              ? `${styles.img_fixed} `
              : `${styles.img_unfixed}`
          }`}
        >
          {imgSample.length <= 0 ? (
            <Image
              src="/util_img/wall_img01.jpg"
              alt="Corentin Damas with one of is framed picture on a customer's wall"
              className={` ${styles.img__wall} `}
              sizes="100vw"
              width={0}
              height={0}
              quality={80}
            />
          ) : (
            <div className={styles.mokeup_container}>
              <Image
                src={`/${imgSample.slice(3, -4)}/S/${imgSample}`}
                alt="Actual selected pîcture"
                className={`${styles.img__selected} ${
                  framed == ""
                    ? ""
                    : framed == "Gallery Frame"
                    ? styles.galleryFrame
                    : framed == "Solid Wood Frame With Passe-Partout"
                    ? styles.passePartout
                    : framed == "Artbox"
                    ? styles.artbox
                    : framed == "Floater Frame"
                    ? styles.floater
                    : ""
                }`}
                sizes="100vw"
                width={0}
                height={0}
                quality={80}
              />
              <Image
                src="/util_img/livingRoom_01.jpg"
                alt="Corentin Damas with one of is framed picture on a customer's wall"
                className={`${styles.img__mokeup}`}
                sizes="100vw"
                width={0}
                height={0}
                quality={80}
              />
            </div>
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
          <div className={styles.recommandation_title}>
            <hr className={styles.smallHR} />
            <h6 className={styles.other_text}> you might also like </h6>
            <hr className={styles.smallHR} />
          </div>
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
        <div className={styles.fram_module}>
          <h4>Framing, Mounting and Prints</h4>
          <div className={styles.select_container}>
            <div className={styles.section_title}>
              <h6 className={styles.title_text}>Framed </h6>
              <div className={styles.iconeBox}>
                <PiInfo
                  className={styles.icone}
                  onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                />
                <p className={styles.iconeDesc}>information </p>
              </div>
            </div>

            <div className={styles.frames_solutions}>
              {Object.values(possileFrames).map(
                (el) =>
                  el.framed && (
                    <button
                      onClick={() => handleBtnSelectorClick(el)}
                      className={`${styles.btn_selector} ${
                        framed == el.name ? styles.selectedFrame : ""
                      }`}
                      key={el.name}
                    >
                      {el.name}
                    </button>
                  )
              )}
            </div>

            <div className={styles.section_title}>
              <h6 className={styles.title_text}>Wihtout Frame</h6>
              <div className={styles.iconeBox}>
                <PiInfo
                  className={styles.icone}
                  onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                />
                <p className={styles.iconeDesc}>information </p>
              </div>
            </div>
            <div className={styles.frames_solutions}>
              {Object.values(possileFrames).map(
                (el) =>
                  !el.framed &&
                  el.name != "Simple print" && (
                    <button
                      onClick={() => handleBtnSelectorClick(el)}
                      className={`${styles.btn_selector} ${
                        framed == el.name ? styles.selectedFrame : ""
                      }`}
                      key={el.name}
                    >
                      {el.name}
                    </button>
                  )
              )}
            </div>

            <div className={styles.section_title}>
              <h6 className={styles.title_text}>Prints</h6>
              <div className={styles.iconeBox}>
                <PiInfo
                  className={styles.icone}
                  onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                />
                <p className={styles.iconeDesc}>information</p>
              </div>
            </div>
            <div className={styles.frames_solutions}>
              {Object.values(possileFrames.simplePrint.paper).map((el) => (
                <button
                  onClick={() => handleBtnSelectorClick(el)}
                  className={`${styles.btn_selector} ${
                    framed == el.name ? styles.selectedFrame : ""
                  }`}
                  key={el.name}
                >
                  {el.name}
                </button>
              ))}
            </div>
            {productShortDesc != "" ? (
              <p className={styles.shortDescrition}>
                {productShortDesc}
                <PiInfo
                  className={styles.icone}
                  onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                />
              </p>
            ) : (
              <p className={styles.shortDescrition}></p>
            )}

            <div
              className={`${styles.infoBox} ${infoBoxOpen && styles.slideIn}`}
            >
              <IoIosCloseCircleOutline
                className={styles.icone}
                onClick={() => setInfoBoxOpen(!infoBoxOpen)}
              />
              <p>{productDesc}</p>
              <p>{productSpec}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select_img;
