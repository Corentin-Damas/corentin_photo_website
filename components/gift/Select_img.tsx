"use client";
import React, { useEffect, useState } from "react";
import styles from "../gift/Select_img.module.css";

import Image from "next/image";
import { useImgSelected } from "../../providers/imgFav-provider";
import Select_print from "./Select_print";

function Select_img() {
  const imgList = useImgSelected((state) => state.imgSelected);
  const testImg = [
    "01-a_year_in_japan.jpg",
    "11-a_year_in_japan.jpg",
    "03-black_and_white.jpg",
  ];
  const [imgSample, setImageSample] = useState("");

  const possileFrames = {
    gallery: {
      name: "Gallery Frame",
      color: {
        brown: "Alder brown",
        black: "Black oak",
        oak: "Natural oak",
        white: "Maple white",
      },
      size: { std: 20, large: 40 },
      paper: {
        archive: "Fuji Crystal Archive, glossy",
        BW: "ilford B/W paper",
      },
      glass: {
        glossy: {
          name: "Acrylic glass 2mm, glossy",
          desc: "Classic presentation",
        },
      },
    },

    woodPass: {
      name: "Solid Wood Frame With Passe-Partout",
      color: {
        brown: "Alder brown",
        black: "Black oak",
        oak: "Natural oak",
        white: "Maple white",
      },
      passPartoutColor: {
        black: "black",
        white: "white",
      },
      paper: {
        archive: "Fuji Crystal Archive, glossy",
        FineArt: "Hahnemühle FineArt Baryta",
        BW: "ilford B/W paper",
      },
      size: { std: 20, large: 40 },
      glass: {
        glossy: { name: "Glossy float glass", desc: "Classic presentation" },
        Matte: {
          name: "Matte float glass",
          desc: "Matte surface reduces reflections and suitable for rooms with strong light",
        },
        Museum: {
          name: "Museum glass",
          desc: "Anti-reflective, protection from UV",
        },
      },
    },

    ArtBox: "Artbox",
    floater: "Floater Frame",
    dibon: "Aluminum Dibond",
    BWdibon: "Aluminum Dibond black and white",
  };

  const possibleState = { fixed: "fixed", unFixed: "unfixed" };
  const [navState, setNavState] = useState(possibleState.unFixed);
  const scrollBehaviour = () => {
    const currentScroll = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (currentScroll >= 290) {
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
                alt="Corentin Damas with one of is framed picture on a customer's wall"
                className={`${styles.img__selected}`}
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
          <h4>Frame and Printing paper</h4>
          <div className={styles.select_container}>
            <div className={styles.section_title}>
              <h6 className={styles.title_text}>Frame &gt; </h6>
            </div>
            <div className={styles.frames_solutions}>
              <button className={styles.btn_selector}> Aluminum Dibond</button>
              <button className={styles.btn_selector}>
                Aluminum Dibond black and white
              </button>
              <button className={styles.btn_selector}> Floater Frame</button>
              <button className={styles.btn_selector}> Gallery Frame</button>
              <button className={styles.btn_selector}>
                Solid Wood Frame With Passe-Partout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select_img;
