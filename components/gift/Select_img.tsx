"use client";
import React, { useEffect, useState } from "react";
import styles from "../gift/Select_img.module.css";

import Image from "next/image";
import { useImgSelected } from "../../providers/imgFav-provider";
import { possileFrames } from "./productInfos";
import { PiInfo } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

function Select_img({ objImg }: { objImg: any }) {
  let imgInfos = {};
  if (typeof objImg === "string") {
    imgInfos = JSON.parse(objImg);
  }
  const searchParams = useSearchParams();
  const selectedImg = searchParams.get("img");
  const selectedImgExtention = selectedImg + ".jpg";
  const selectedProduct = searchParams.get("product");
  const addImg = useImgSelected((state) => state.addImgSelected);

  const imgList = useImgSelected((state) => state.imgSelected);
  let subImage = "";

  const myImageSelection = [
    "01-a_year_in_japan.jpg",
    "02-a_year_in_japan.jpg",
    "01-earth_and_sky.jpg",
    "03-earth_and_sky.jpg",
    "05-black_and_white.jpg",
  ];
  if (
    !imgList.includes(selectedImgExtention) &&
    !myImageSelection.includes(selectedImgExtention) &&
    selectedImgExtention.length > 4
  ) {
    subImage = selectedImgExtention;
  }

  const [imgSample, setImageSample] = useState<string>("");

  const [framed, setFramed] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productShortDesc, setProductShortDesc] = useState("");
  const [productSpec, setProductSpec] = useState("");
  const [section, setSection] = useState("");

  const [product, setProduct] = useState(possileFrames.gallery);
  const [isDefault, setIsDefault] = useState(true);

  const [frameColor, setFrameColor] = useState("");
  const [frameSize, setFrameSize] = useState(0);
  const [borderSize, setBorderSize] = useState("0");
  const [protection, setProtection] = useState(
    possileFrames.gallery.glass.glossy
  );
  const [passSize, setPassSize] = useState(
    possileFrames.woodPass.passPartoutSize.std
  );
  const [passColor, setPassColor] = useState("white");

  const [paper, setPaper] = useState(possileFrames.gallery.paper.glossy);
  const [isPrint, setIsPrint] = useState(false);
  const [isHanged, setIsHanged] = useState(true);
  const [lamination, setLamination] = useState("");
  const [isBlackAndWhite, setIsBlackAndWhite] = useState(false);

  const [infoBoxOpen, setInfoBoxOpen] = useState(false);

  function handleChangeImg(el: any) {
    setImageSample(el);
    if (el.slice(3, -4) == "black_and_white") {
      setIsBlackAndWhite(true);

      if (Object.keys(product.paper).includes("bAndW")) {
        setPaper(product.paper.bAndW);
      } else if (Object.keys(product.paper).includes("bwGlossy")) {
        setPaper(product.paper.bwGlossy);
      } else {
        setPaper(product.paper.fineArt);
      }
    } else {
      setIsBlackAndWhite(false);
      if (Object.keys(product.paper).includes("glossy")) {
        setPaper(product.paper.glossy);
      } else {
        setPaper(product.paper.fineArt);
      }
    }
  }

  function handleUndoAllFrame() {
    setFramed("");
    setProductDesc("");
    setProductShortDesc("");
    setProductSpec("");
    setProduct(possileFrames.gallery);
    setIsDefault(true);
    setFrameSize(0);
    setBorderSize("0");
    setPassSize(possileFrames.woodPass.passPartoutSize.std);
  }

  function handleUndoAllPerso() {
    isPrint
      ? handleBtnSelectorClickPaper(paper)
      : handleBtnSelectorClick(product);
  }

  function handleBtnSelectorClick(el: any) {
    if (imgSample == "") {
      setImageSample("04-earth_and_sky.jpg");
    }
    if (imgSample.slice(3, -4) == "black_and_white") {
      setIsBlackAndWhite(true);
    } else {
      setIsBlackAndWhite(false);
    }
    setSection("");
    setFramed(el.name);
    setProduct(el);
    setProductDesc(el.desc);
    setProductSpec(el.spec);
    setProductShortDesc(el.tltr);
    setIsPrint(false);
    setBorderSize("0");
    setIsDefault(false);
    setIsHanged(true);

    isBlackAndWhite && el.name != "Solid Wood Frame With Passe-Partout"
      ? setPaper(el.paper.bAndW)
      : setPaper(el.paper.glossy);

    if (el.name == "Gallery Frame") {
      setFrameColor("Black oak");
      setFrameSize(20);
      setProtection(el.glass.glossy);
    } else if (el.name == "Solid Wood Frame With Passe-Partout") {
      setFrameColor("Black oak");
      setFrameSize(20);
      setPassSize(possileFrames.woodPass.passPartoutSize.std);
      setPassColor("white");
      isBlackAndWhite ? setPaper(el.paper.bwGlossy) : setPaper(el.paper.glossy);
      setProtection(el.glass.glossy);
    } else if (el.name == "Artbox") {
      setFrameColor("Alder brown");
      setFrameSize(4);
      setProtection(el.glass.glossy);
    } else if (el.name == "Floater Frame") {
      setFrameColor("Alder brown");
      setFrameSize(15);
      setProtection(el.glass.glossy);
    } else if (el.name == "Fine Art Dibond") {
      setPaper(el.paper.fineArt);
    } else if (el.name == "Aluminum Dibond") {
      setProtection(el.glass.matte);
    }
  }
  function handleBtnSelectorClickPaper(el: any) {
    if (imgSample == "") {
      setImageSample("04-earth_and_sky.jpg");
    }
    if (imgSample.slice(3, -4) == "black_and_white") {
      setIsBlackAndWhite(true);
    } else {
      setIsBlackAndWhite(false);
    }
    setProductDesc(el.desc);
    setProductSpec(el.spec);
    setProductShortDesc(el.tltr);
    setProduct(possileFrames.simplePrint);
    setBorderSize("0");
    setPaper(el);
    setIsPrint(true);
    setIsDefault(false);
    setFramed("");
    setLamination("");
    setIsHanged(true);
    setSection("");
  }

  function handleInfoBox(title: string) {
    if (title == "framed") {
      setSection("Framed picture");

      setProductSpec(
        "A picture frame is a protective and decorative edging for a picture, such as a painting or photograph. It makes displaying the work safer and easier and both sets the picture apart from its surroundings and aesthetically integrates it with them."
      );
    } else if (title == "without") {
      setSection("Without frame");

      setProductSpec(
        "Photo prints on aluminum Dibond are are simple and unobtrusive and have a contemporary yet timeless look. To make sure to ealily hang them different wall-mounts based on the size is included but if you want to do it by your own it's also possible."
      );
    } else if (title == "print") {
      setSection("Printing");

      setProductSpec(
        "Get your print on one of the different type of paper that are presented or send me a message if you already know what is your favorite paper. ( Mine is Hahnemühle FineArt Baryta ) "
      );
    }

    setInfoBoxOpen(!infoBoxOpen);
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
          {selectedImg == "" || typeof selectedImg !== "string" ? (
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
              {selectedImg != "" && (
                <Image
                  src={`/${selectedImg.slice(3)}/S/${selectedImg}.jpg`}
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
                  }
                ${
                  frameColor == "Alder brown"
                    ? styles.alderBrown
                    : frameColor == "Black oak"
                    ? styles.blackOak
                    : frameColor == "Natural oak"
                    ? styles.naturalOak
                    : frameColor == "Maple white"
                    ? styles.mapleWhite
                    : ""
                }
                ${frameSize > 20 ? styles.bigFrame : ""}
                ${
                  borderSize == "0"
                    ? ""
                    : borderSize == "1"
                    ? styles.border01
                    : borderSize == "2"
                    ? styles.border02
                    : borderSize == "3"
                    ? styles.border03
                    : borderSize == "5"
                    ? styles.border05
                    : borderSize == "8"
                    ? styles.border08
                    : styles.border12
                }
                ${
                  passSize.size == 9
                    ? ""
                    : passSize.size == 3
                    ? styles.passSizeSmall
                    : styles.passSizeBig
                }
                ${passColor == "white" ? "" : styles.blackPass}
                
                `}
                  sizes="100vw"
                  width={0}
                  height={0}
                  quality={80}
                />
              )}
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
            {imgList.map((el) => (
              <li className={styles.imgPrev} key={el}>
                <Link href={`?img=${el.slice(0, -4)}`}>
                  <Image
                    src={`/${el.slice(3, -4)}/S/${el}`}
                    alt="Selected images from the gallery"
                    className={`${styles.img} ${
                      imgSample == el && styles.currentSelectedImg
                    }`}
                    sizes="100vw"
                    width={0}
                    height={0}
                    quality={80}
                    onClick={() => handleChangeImg(el)}
                  />
                </Link>
              </li>
            ))}
            {subImage != "" && (
              <li className={styles.imgPrev}>
                <Link href={`?img=${selectedImg}`}>
                  <Image
                    src={`/${subImage.slice(3, -4)}/S/${subImage}`}
                    alt="Selected images from the gallery"
                    className={`${styles.img} ${
                      subImage == selectedImgExtention &&
                      styles.currentSelectedImg
                    }`}
                    sizes="100vw"
                    width={0}
                    height={0}
                    quality={80}
                    onClick={() => handleChangeImg(subImage)}
                    onLoad={() => addImg(subImage)}
                  />
                </Link>
              </li>
            )}
          </ul>
          <div className={styles.recommandation_title}>
            <hr className={styles.smallHR} />
            <h6 className={styles.other_text}> you might also like </h6>
            <hr className={styles.smallHR} />
          </div>
          <ul className={styles.imgs_flex}>
            {myImageSelection.map(
              (el) =>
                !imgList.includes(el) && (
                  <li className={styles.imgPrev} key={el}>
                    <Link
                      href={`?img=${el.slice(0, -4)}${
                        typeof selectedProduct === "string"
                          ? `&product=${selectedProduct}`
                          : ""
                      }`}
                    >
                      <Image
                        src={`/${el.slice(3, -4)}/S/${el}`}
                        alt="Selected images from the gallery"
                        className={`${styles.img} ${
                          selectedImg == el.slice(0, -4) &&
                          styles.currentSelectedImg
                        }`}
                        sizes="100vw"
                        width={0}
                        height={0}
                        quality={80}
                        onClick={() => handleChangeImg(el)}
                      />
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        <h3>max with is {imgInfos.WidthCM} cm</h3>

        {/* add size here */}

        <div className={styles.fram_module}>
          <div className={styles.section_header}>
            <h4>Framing, Mounting and Prints</h4>
            <Link href={`?img=${selectedImg}`}>
              <button
                className={styles.btn_reset}
                onClick={() => handleUndoAllFrame()}
                disabled={productDesc == "" ? true : false}
              >
                Undo all
              </button>
            </Link>
          </div>
          <div className={styles.select_container}>
            <div className={styles.section_title}>
              <h6 className={styles.title_text}>Framed </h6>

              <div className={styles.iconeBox}>
                <PiInfo
                  className={styles.icone}
                  onClick={() => handleInfoBox("framed")}
                />
                <p className={styles.iconeDesc}>information </p>
              </div>
            </div>

            <div className={styles.frames_solutions}>
              {Object.values(possileFrames).map(
                (el) =>
                  el.framed && (
                    <Link
                      href={`?img=${selectedImg}&product=${el.name
                        .replaceAll(" ", "_")
                        .toLowerCase()}`}
                      key={el.name}
                      scroll={false}
                    >
                      <button
                        onClick={() => handleBtnSelectorClick(el)}
                        className={`${styles.btn_selector} ${
                          framed == el.name && !isPrint
                            ? styles.selectedFrame
                            : ""
                        }`}
                      >
                        {el.name}
                      </button>
                    </Link>
                  )
              )}
              {product.framed && productDesc != "" && (
                <button
                  className={`${styles.btn_information}`}
                  onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                >
                  <PiInfo className={styles.insideBtnIcone} />
                  More information: {product.name}
                </button>
              )}
            </div>

            <div className={styles.section_title}>
              <h6 className={styles.title_text}>Wihtout Frame</h6>
              <div className={styles.iconeBox}>
                <PiInfo
                  className={styles.icone}
                  onClick={() => handleInfoBox("without")}
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
                        framed == el.name && !isPrint
                          ? styles.selectedFrame
                          : ""
                      }`}
                      key={el.name}
                    >
                      {el.name}
                    </button>
                  )
              )}
              {!product.framed &&
                productDesc != "" &&
                product.name != "Simple print" && (
                  <button
                    className={`${styles.btn_information}`}
                    onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                  >
                    <PiInfo className={styles.insideBtnIcone} />
                    More information: {product.name}
                  </button>
                )}
            </div>

            <div className={styles.section_title}>
              <h6 className={styles.title_text}>Prints</h6>
              <div className={styles.iconeBox}>
                <PiInfo
                  className={styles.icone}
                  onClick={() => handleInfoBox("print")}
                />
                <p className={styles.iconeDesc}>information</p>
              </div>
            </div>
            <div className={styles.frames_solutions}>
              {Object.values(possileFrames.simplePrint.paper).map((el) => (
                <button
                  onClick={() => handleBtnSelectorClickPaper(el)}
                  className={`${styles.btn_selector} ${
                    isPrint && !isDefault && paper.name == el.name
                      ? styles.selectedFrame
                      : ""
                  }`}
                  key={el.name}
                >
                  {el.name}
                </button>
              ))}
              {product.name == "Simple print" && (
                <button
                  className={`${styles.btn_information}`}
                  onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                >
                  <PiInfo className={styles.insideBtnIcone} />
                  Paper info
                </button>
              )}
            </div>

            <div
              className={`${styles.infoBox} ${infoBoxOpen && styles.slideIn}`}
            >
              {section == "" ? (
                <>
                  <IoIosCloseCircleOutline
                    className={`${styles.icone} ${styles.iconeClose} `}
                    onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                  />
                  <h6>{paper.name}</h6>
                  <p>{productDesc}</p>
                  <p>{productSpec}</p>
                </>
              ) : (
                <>
                  <IoIosCloseCircleOutline
                    className={`${styles.icone} ${styles.iconeClose} `}
                    onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                  />
                  <h6>{section}</h6>
                  <p>{productSpec}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.fram_module}>
          <div className={styles.section_header}>
            <h4>Personalizing</h4>
            <button
              className={styles.btn_reset}
              onClick={() => handleUndoAllPerso()}
              disabled={productDesc == "" ? true : false}
            >
              Undo all
            </button>
          </div>
          <div className={styles.select_container}>
            {isDefault ? (
              <h5> Select a display solution to be able to customize it</h5>
            ) : (
              <>
                <div className={styles.section_title}>
                  <h4 className={styles.title_text}>{product.name}</h4>
                </div>
                <div className={styles.section_desc}>
                  <p>{product.tltr} </p>
                  <p>{product.spec} </p>
                </div>
                {Object.keys(product).includes("color") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Frame Color</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.values(product.color).map((el) => (
                        <button
                          className={`${styles.btn_selector}
                          ${frameColor == el ? styles.selectedFrame : ""}
                           `}
                          key={el}
                          onClick={() => setFrameColor(el)}
                        >
                          {el}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {Object.keys(product).includes("frameSize") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Frame Size</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.values(product.frameSize).map((el) => (
                        <button
                          className={`${styles.btn_selector}  ${
                            frameSize == el.mm ? styles.selectedFrame : ""
                          }`}
                          key={el.mm}
                          onClick={() => setFrameSize(el.mm)}
                        >
                          {el.mm} mm
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {Object.keys(product).includes("passPartoutSize") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Passe-partout size</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.values(product.passPartoutSize).map(
                        (el) =>
                          Object.keys(el).includes("size") && (
                            <button
                              className={`${styles.btn_selector}  ${
                                passSize.size == el.size
                                  ? styles.selectedFrame
                                  : ""
                              }`}
                              key={el.size}
                              onClick={() => setPassSize(el)}
                            >
                              {el.size} cm
                            </button>
                          )
                      )}
                      <p>{product.passPartoutSize.spec}</p>
                    </div>
                  </>
                )}
                {Object.keys(product).includes("passPartoutColor") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Passe-partout Color</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.values(product.passPartoutColor).map((el) => (
                        <button
                          className={`${styles.btn_selector}  ${
                            passColor == el ? styles.selectedFrame : ""
                          }`}
                          key={el}
                          onClick={() => setPassColor(el)}
                        >
                          {el}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {Object.keys(product).includes("paper") &&
                  product.name != "Simple print" && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>Print paper</h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        {Object.values(product.paper).map(
                          (el) =>
                            isBlackAndWhite &&
                            Object.keys(el).includes("blackAndWitePaper") && (
                              <button
                                className={`${styles.btn_selector} ${
                                  paper.name == el.name
                                    ? styles.selectedFrame
                                    : ""
                                }  `}
                                onClick={() => setPaper(el)}
                                key={el.name}
                              >
                                {el.name}
                              </button>
                            )
                        )}
                        {Object.values(product.paper).map(
                          (el) =>
                            !isBlackAndWhite &&
                            Object.keys(el).includes("colorPaper") && (
                              <button
                                className={`${styles.btn_selector} 
                              ${
                                paper.name == el.name
                                  ? styles.selectedFrame
                                  : ""
                              }
                              `}
                                onClick={() => setPaper(el)}
                                key={el.name}
                              >
                                {el.name}
                              </button>
                            )
                        )}
                        <p>{paper.desc}</p>
                      </div>
                    </>
                  )}
                {Object.keys(product).includes("glass") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Protective Glass</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.values(product.glass).map((el) => (
                        <button
                          className={`${styles.btn_selector}  ${
                            protection.name == el.name
                              ? styles.selectedFrame
                              : ""
                          }`}
                          key={el.name}
                          onClick={() => setProtection(el)}
                        >
                          {el.name}
                        </button>
                      ))}
                      <p>{protection.desc}</p>
                    </div>
                  </>
                )}
                {Object.keys(product).includes("border") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Border size</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.keys(product.border).map(
                        (el) =>
                          el != "spec" && (
                            <button
                              className={`${styles.btn_selector}  ${
                                borderSize == el ? styles.selectedFrame : ""
                              }`}
                              key={el}
                              onClick={() => setBorderSize(el)}
                            >
                              {el} cm
                            </button>
                          )
                      )}
                      <p>{product.border.spec}</p>
                    </div>
                  </>
                )}
                {Object.keys(product).includes("hanging") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Hanging Solutions</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.keys(product.hanging) && (
                        <>
                          <button
                            className={`${styles.btn_selector}  ${
                              !isHanged ? styles.selectedFrame : ""
                            }`}
                            onClick={() => setIsHanged(false)}
                          >
                            No hanging elements
                          </button>
                          <button
                            className={`${styles.btn_selector}  ${
                              isHanged ? styles.selectedFrame : ""
                            }`}
                            onClick={() => setIsHanged(true)}
                          >
                            With rails or hooks
                          </button>
                        </>
                      )}
                    </div>
                  </>
                )}
                {isPrint && Object.keys(paper).includes("border") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Border size</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {Object.keys(paper.border).map(
                        (el) =>
                          el != "spec" && (
                            <button
                              className={`${styles.btn_selector}  ${
                                borderSize == el ? styles.selectedFrame : ""
                              }`}
                              key={el}
                              onClick={() => setBorderSize(el)}
                            >
                              {el} cm
                            </button>
                          )
                      )}
                      <p>{paper.border.spec}</p>
                    </div>
                  </>
                )}
                {isPrint && Object.keys(paper).includes("protection") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Protection</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      <button
                        className={`${styles.btn_selector} ${
                          lamination == "" ? styles.selectedFrame : ""
                        }`}
                        onClick={() => setLamination("")}
                      >
                        No Protection
                      </button>
                      {Object.values(paper.protection).map(
                        (el) =>
                          el != "spec" && (
                            <button
                              className={`${styles.btn_selector}  ${
                                lamination == el.name
                                  ? styles.selectedFrame
                                  : ""
                              }`}
                              key={el.name}
                              onClick={() => setLamination(el.name)}
                            >
                              {el.name}
                            </button>
                          )
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select_img;
