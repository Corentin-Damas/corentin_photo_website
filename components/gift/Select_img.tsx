"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "../gift/Select_img.module.css";

import Image from "next/image";
import { useImgSelected } from "../../providers/imgFav-provider";
import { possileFrames } from "./productInfos";
import { PiInfo, PiSealWarningBold } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Select_img({
  objImg,
  objProduct,
}: {
  objImg: string | null;
  objProduct: any;
}) {
  let imgInfos: pictureInfoType | null = null;
  if (typeof objImg === "string") {
    imgInfos = JSON.parse(objImg);
  }

  let imgProduct: productInfoType | null = null;
  if (typeof objProduct === "string") {
    imgProduct = JSON.parse(objProduct);
  }

  const searchParams = useSearchParams();

  const selectedImg = searchParams.get("img");
  const selectedImgExtention = selectedImg + ".jpg";
  const selectedProduct: string | null = searchParams.get("product");
  const prodSize: string | null = searchParams.get("size");

  const addImg = useImgSelected((state) => state.addImgSelected);
  const imgList = useImgSelected((state) => state.imgSelected);
  const myImageSelection = [
    "01-a_year_in_japan.jpg",
    "02-a_year_in_japan.jpg",
    "01-earth_and_sky.jpg",
    "03-earth_and_sky.jpg",
    "05-black_and_white.jpg",
  ];

  let subImage = "";
  if (
    !imgList.includes(selectedImgExtention) &&
    !myImageSelection.includes(selectedImgExtention) &&
    typeof imgInfos !== null &&
    selectedImg !== "null"
  ) {
    subImage = selectedImgExtention;
  }

  const imgSample: string =
    selectedImg != null ? selectedImg : "04-earth_and_sky.jpg";
  const product: productType | null =
    selectedProduct != null
      ? possileFrames[selectedProduct as keyof allPossibleFrameType]
      : null;

  const productDesc = product != null ? product.desc : "";
  const productSpec = product != null ? product.spec : "";
  const [section, setSection] = useState("");
  const [infoBoxOpen, setInfoBoxOpen] = useState(false);

  const isBlackAndWhite: boolean =
    selectedImg !== null && selectedImg.slice(3) == "black_and_white"
      ? true
      : false;

  const router = useRouter();
  function redirectToBasUrl() {
    router.push("/gift");
  }
  // URL checker
  if (
    (prodSize != null &&
      imgProduct !== null &&
      (imgProduct[
        `bordLarge_${prodSize}` as keyof productInfoType
      ] as number) == 0) ||
    (prodSize != null &&
      imgProduct !== null &&
      (imgProduct[
        `bordLarge_${prodSize}` as keyof productInfoType
      ] as number)) == null
  ) {
    redirectToBasUrl();
  }
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const selectedFrameColor = searchParams.get("frCl");
  const frameColor: string =
    selectedFrameColor !== null ? selectedFrameColor : "Alder brown";

  let subTotal: number;

  if (
    prodSize != null &&
    imgProduct !== null &&
    (imgProduct[`bordLarge_${prodSize}` as keyof productInfoType] as number)
  ) {
    subTotal = imgProduct[
      `bordLarge_${prodSize}` as keyof productInfoType
    ] as number;
  } else {
    subTotal = 0;
  }

  prodSize != null &&
    imgProduct !== null &&
    (imgProduct[`bordLarge_${prodSize}` as keyof productInfoType] as number);

  const selectedFrameSize: string | null = searchParams.get("frSize");
  let frameSizeNorm: string =
    selectedFrameSize == null ? "std" : selectedFrameSize;

  if (
    prodSize !== undefined &&
    product !== null &&
    product.frameSize !== undefined &&
    product.frameSize[`${frameSizeNorm}` as keyof allSizeType] !== undefined &&
    product.frameSize[`${frameSizeNorm}` as keyof allSizeType]?.modifier !==
      undefined
  ) {
    const objModifier =
      product.frameSize[`${frameSizeNorm}` as keyof allSizeType]?.modifier;
    if ((prodSize as unknown as number) > 65 && objModifier?.l !== undefined) {
      subTotal = subTotal + objModifier.l;
    }
    if (
      (prodSize as unknown as number) > 40 &&
      (prodSize as unknown as number) <= 65 &&
      objModifier?.m !== undefined
    ) {
      subTotal = subTotal + objModifier.m;
    }
    if ((prodSize as unknown as number) <= 40 && objModifier?.s !== undefined) {
      subTotal = subTotal + objModifier.s;
    }
  }

  let frameSize: number | undefined = 0;
  if (
    selectedFrameSize == null &&
    selectedProduct !== null &&
    product !== null &&
    product.framed &&
    product.frameSize !== undefined &&
    product.frameSize[`${frameSizeNorm}` as keyof allSizeType] !== undefined &&
    product.frameSize[`${frameSizeNorm}` as keyof allSizeType]?.mm !== undefined
  ) {
    if (
      typeof product.frameSize[`${frameSizeNorm}` as keyof allSizeType]?.mm ==
      "number"
    ) {
      frameSize =
        product.frameSize[`${frameSizeNorm}` as keyof allSizeType]?.mm;
    } else {
      frameSize = 0;
    }
  }


  const selectedPassSize: string | null = searchParams.get("passSize");
  const selectedPassSizeNormed: string =
    selectedPassSize == null ? "std" : selectedPassSize;
  let passSize: number | undefined = 9;

  if (
    prodSize !== undefined &&
    product !== null &&
    product.passPartoutSize != undefined &&
    product.passPartoutSize[
      `${selectedPassSizeNormed}` as keyof passPartoutSizeType
    ] !== undefined &&
    product.passPartoutSize[
      `${selectedPassSizeNormed}` as keyof passPartoutSizeType
    ]?.modifier !== undefined
  ) {
    const objModifier =
      product.passPartoutSize[
        `${selectedPassSizeNormed}` as keyof passPartoutSizeType
      ]?.modifier;
    const objSize =
      product.passPartoutSize[
        `${selectedPassSizeNormed}` as keyof passPartoutSizeType
      ]?.size;

    if ((prodSize as unknown as number) > 65 && objModifier?.l !== undefined) {
      subTotal = subTotal + objModifier.l;
    }
    if (
      (prodSize as unknown as number) > 40 &&
      (prodSize as unknown as number) <= 65 &&
      objModifier?.m !== undefined
    ) {
      subTotal = subTotal + objModifier.m;
    }
    if ((prodSize as unknown as number) <= 40 && objModifier?.s !== undefined) {
      subTotal = subTotal + objModifier.s;
    }
    passSize = objSize
  }
  
  const selectedPassColor: string | null = searchParams.get("passCl");
  const passColor: string =
  selectedPassColor == null ? "white" : selectedPassColor;
  
    // -------------------------- GET MODIFIERS ---------------------------------------
  
  
  
    // -------------------------- TO DO ---------------------------------------
  
  const selectedPaper: string | null = searchParams.get("paper");
  let paper: specPaperType | undefined =
    product !== null && product.paper !== undefined
      ? product?.paper[`${selectedPaper}` as keyof paperType]
      : undefined;

  if (paper == undefined && selectedProduct !== null) {
    if (
      product !== null &&
      (selectedProduct == "gallery_frame" ||
        selectedProduct == "artbox" ||
        selectedProduct == "floater_frame" ||
        selectedProduct == "aluminum_dibond" ||
        selectedProduct == "under_glossy_acrylic_glass" ||
        selectedProduct == "under_matte_acrylic_glass" ||
        selectedProduct == "solid_wood_frame_with_passe_partout") &&
      isBlackAndWhite
    ) {
      paper = product.paper?.bwGlossy;
    } else if (
      product !== null &&
      (selectedProduct == "gallery_frame" ||
        selectedProduct == "artbox" ||
        selectedProduct == "floater_frame" ||
        selectedProduct == "aluminum_dibond" ||
        selectedProduct == "under_glossy_acrylic_glass" ||
        selectedProduct == "under_matte_acrylic_glass" ||
        selectedProduct == "solid_wood_frame_with_passe_partout") &&
      !isBlackAndWhite
    ) {
      paper = product.paper?.glossy;
    } else if (product !== null && selectedProduct == "fine_art_dibond") {
      paper = product.paper?.fineArt;
    }
  }

  const selectedProtection: string | null = searchParams.get("glass");
  let protection: glassType | null | undefined =
    product !== null && product?.glass !== undefined
      ? product?.glass[`${selectedProtection}` as keyof allGlasses]
      : null;

  if (product !== null && (protection == undefined || protection == null)) {
    if (
      product !== null &&
      (selectedProduct == "gallery_frame" ||
        selectedProduct == "artbox" ||
        selectedProduct == "floater_frame" ||
        selectedProduct == "under_glossy_acrylic_glass" ||
        selectedProduct == "solid_wood_frame_with_passe_partout")
    ) {
      protection = product.glass?.glossy;
    } else if (
      product !== null &&
      (selectedProduct == "aluminum_dibond" ||
        selectedProduct == "under_matte_acrylic_glass")
    ) {
      protection = product.glass?.matte;
    }
  }
  const selectedBorderSize: string | null = searchParams.get("bordSize");
  const borderSize: string | null =
    selectedBorderSize !== null ? selectedBorderSize : "0";

  const hangedStr: string | null = searchParams.get("hang");
  const isHanged: boolean | null =
    hangedStr !== null && hangedStr == "0" ? false : true;

  const selectedLamination: string | null = searchParams.get("lam");
  const lamination: laminationType | undefined =
    product !== null &&
    selectedLamination !== "none" &&
    product?.protection !== undefined
      ? product?.protection[`${selectedLamination}` as keyof allLamination]
      : undefined;

  const selectedThickness: string | null = searchParams.get("thick");
  let glassThickness: thicknessType | undefined =
    product !== null && product.glassThickness !== undefined
      ? product?.glassThickness[`${selectedThickness}` as keyof allThickness]
      : undefined;

  if (
    product !== null &&
    (glassThickness == undefined || glassThickness == null)
  ) {
    if (
      product !== null &&
      (selectedProduct == "under_glossy_acrylic_glass" ||
        selectedProduct == "under_matte_acrylic_glass")
    ) {
      glassThickness = product.glassThickness?.s;
    }
  }

  function handleInfoBox(title: string) {
    if (title == "framed") {
      setSection("Framed picture");
    } else if (title == "without") {
      setSection("Without frame");
    } else if (title == "print") {
      setSection("Printing");
    } else {
      setSection("");
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
          {/*==================== REFACTOR IMG Price ============================*/}
          <h3 className={styles.totalPrice}>total {subTotal}</h3>
          {/*==================== REFACTOR IMG Price ============================*/}
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
            //  ============================= REFACTOR IMG MOKEUP ====================================
            <div className={styles.mokeup_container}>
              {selectedImg != "" && (
                <Image
                  src={`/${selectedImg.slice(3)}/S/${selectedImg}.jpg`}
                  alt="Actual selected pîcture"
                  onError={() => redirectToBasUrl()}
                  className={`${styles.img__selected} ${
                    product?.name == ""
                      ? ""
                      : product?.name == "Gallery Frame"
                      ? styles.galleryFrame
                      : product?.name == "Solid Wood Frame With Passe_Partout"
                      ? styles.passePartout
                      : product?.name == "Artbox"
                      ? styles.artbox
                      : product?.name == "Floater Frame"
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
                ${
                  frameSize !== undefined && frameSize > 20
                    ? styles.bigFrame
                    : ""
                }
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
                  passSize == 9
                    ? ""
                    : passSize == 3
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
                    } `}
                    sizes="100vw"
                    width={0}
                    height={0}
                    quality={80}
                    onError={() => redirectToBasUrl()}
                  />
                </Link>
              </li>
            ))}
            {imgInfos !== null && subImage !== null && subImage !== "" && (
              <li className={styles.imgPrev}>
                <Link href={`?img=${selectedImg}`}>
                  <Image
                    src={`/${subImage.slice(3, -4)}/S/${subImage}`}
                    alt="Selected images from the gallery"
                    className={`${styles.img} ${
                      imgInfos.name == subImage.slice(0, -4) &&
                      styles.currentSelectedImg
                    }`}
                    sizes="100vw"
                    width={0}
                    height={0}
                    quality={80}
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
                      />
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>

        {/* ============================= FRAMING ==================================== */}

        <div className={styles.fram_module}>
          <div className={styles.section_header}>
            <h4>Framing, Mounting and Prints</h4>
            <Link href={`?img=${selectedImg}`} scroll={false}>
              <button
                className={styles.btn_reset}
                disabled={product === null ? true : false}
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
                      href={`?img=${
                        selectedImg != null ? selectedImg : "04-earth_and_sky"
                      }&product=${el.name.replaceAll(" ", "_").toLowerCase()}`}
                      key={el.name}
                      scroll={false}
                    >
                      <button
                        className={`${styles.btn_selector} ${
                          product !== null && product.name == el.name
                            ? styles.selectedFrame
                            : ""
                        }`}
                      >
                        {el.name}
                      </button>
                    </Link>
                  )
              )}
              {product !== null && product.framed && productDesc != "" && (
                <button
                  className={`${styles.btn_information}`}
                  onClick={() => handleInfoBox("")}
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
                  Object.keys(el).includes("paper") &&
                  !el.framed && (
                    <Link
                      href={`?img=${
                        selectedImg != null ? selectedImg : "04-earth_and_sky"
                      }&product=${el.name.replaceAll(" ", "_").toLowerCase()}`}
                      key={el.name}
                      scroll={false}
                    >
                      <button
                        className={`${styles.btn_selector} ${
                          product !== null && product.name == el.name
                            ? styles.selectedFrame
                            : ""
                        }`}
                      >
                        {el.name}
                      </button>
                    </Link>
                  )
              )}
              {product !== null &&
                !product.framed &&
                product.spec != "Simple print" && (
                  <button
                    className={`${styles.btn_information}`}
                    onClick={() => handleInfoBox("")}
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
              {Object.values(possileFrames).map(
                (el) =>
                  !Object.keys(el).includes("paper") && (
                    <Link
                      href={`?img=${
                        selectedImg != null ? selectedImg : "04-earth_and_sky"
                      }&product=${el.name.replaceAll(" ", "_").toLowerCase()}`}
                      key={el.name}
                      scroll={false}
                    >
                      <button
                        className={`${styles.btn_selector} ${
                          product !== null && product.name == el.name
                            ? styles.selectedFrame
                            : ""
                        }`}
                      >
                        {el.name}
                      </button>
                    </Link>
                  )
              )}
              {product !== null &&
                product.spec !== undefined &&
                product.spec == "Simple print" && (
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
                  <h6>{product?.name}</h6>
                  <p>{productDesc}</p>
                  <p>{product?.spec !== "Simple print" && productSpec}</p>
                  {product?.warning !== null && (
                    <p>
                      <PiSealWarningBold className={styles.icone} />{" "}
                      {product?.warning}
                    </p>
                  )}
                </>
              ) : (
                <>
                  <IoIosCloseCircleOutline
                    className={`${styles.icone} ${styles.iconeClose} `}
                    onClick={() => setInfoBoxOpen(!infoBoxOpen)}
                  />
                  <h6>{section}</h6>
                  <p>
                    {section == "Framed picture"
                      ? "A picture frame is a protective and decorative edging for a picture, such as a painting or photograph. It makes displaying the work safer and easier and both sets the picture apart from its surroundings and aesthetically integrates it with them."
                      : section == "Without frame"
                      ? "Photo prints on aluminum Dibond are are simple and unobtrusive and have a contemporary yet timeless look. To make sure to ealily hang them different wall-mounts based on the size is included but if you want to do it by your own it's also possible."
                      : "Get your print on one of the different type of paper that are presented or send me a message if you already know what is your favorite paper. ( Mine is Hahnemühle FineArt Baryta ) "}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ============================= PRINCING ==================================== */}

        <div className={styles.fram_module}>
          <div className={styles.section_header}>
            <h4>Available Size </h4>
          </div>

          <div className={styles.select_container}>
            <div className={styles.frames_solutions}>
              {imgInfos != null &&
                Object.keys(imgInfos).includes("WidthCM") &&
                imgProduct !== null &&
                imgProduct.format !== "" &&
                Object.entries(imgProduct).map(
                  ([key, val]) =>
                    imgInfos !== null &&
                    key.slice(0, -2) == "bordLarge_" &&
                    (key.slice(-2) as unknown as number) < imgInfos.WidthCM &&
                    (val as number) > 0 && (
                      <button
                        key={key}
                        className={`${styles.btn_selector} ${
                          prodSize != null &&
                          key.slice(-2) == prodSize &&
                          styles.selectedFrame
                        }`}
                        onClick={() =>
                          router.push(
                            `/gift?${createQueryString("size", key.slice(-2))}`,
                            { scroll: false }
                          )
                        }
                      >
                        {key.slice(-2)} {val}
                      </button>
                    )
                )}
              {selectedImg == null ||
              selectedImg == "" ||
              selectedProduct == null ||
              selectedProduct == "" ? (
                <h5>
                  You might want to choose a picture and a display / Print
                  solution do be able to choose within the available sizes
                </h5>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className={styles.fram_module}>
          <div className={styles.section_header}>
            <h4>Personalizing</h4>
            <button
              className={styles.btn_reset}
              disabled={productDesc == "" ? true : false}
            >
              Undo all
            </button>
          </div>
          <div className={styles.select_container}>
            {product == null ? (
              <h5> Select a display solution to be able to customize it</h5>
            ) : (
              <>
                <div className={styles.section_title}>
                  <h4 className={styles.title_text}>
                    {product !== null && product.name}
                  </h4>
                </div>
                <div className={styles.section_desc}>
                  <p>{product !== null && product.tltr} </p>
                  <p>{product !== null && product.spec} </p>
                  {product.warning !== null && product.warning && (
                    <div className={styles.warning_container}>
                      <PiSealWarningBold
                        className={`${styles.warningIcone} `}
                      />
                      <p className={styles.warning}>{product?.warning}</p>
                    </div>
                  )}
                </div>
                {product !== null && Object.keys(product).includes("color") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Frame Color</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {product !== null &&
                        product.color !== undefined &&
                        Object.values(product.color).map((el) => (
                          <button
                            key={el}
                            className={`${styles.btn_selector}
                            ${frameColor == el ? styles.selectedFrame : ""}
                            `}
                            onClick={() =>
                              router.push(
                                `/gift?${createQueryString("frCl", el)}`,
                                { scroll: false }
                              )
                            }
                          >
                            {el}
                          </button>
                        ))}
                    </div>
                  </>
                )}
                {product !== null &&
                  Object.keys(product).includes("frameSize") && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>Frame Size</h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        {product.frameSize !== undefined &&
                          Object.entries(product.frameSize).map(([k, el]) => (
                            <button
                              className={`${styles.btn_selector}  ${
                                frameSizeNorm == k ? styles.selectedFrame : ""
                              }`}
                              key={el.mm}
                              onClick={() =>
                                el.mm !== undefined &&
                                router.push(
                                  `/gift?${createQueryString("frSize", k)}`,
                                  { scroll: false }
                                )
                              }
                            >
                              {el.mm} mm
                            </button>
                          ))}
                      </div>
                    </>
                  )}
                {product !== null &&
                  Object.keys(product).includes("passPartoutSize") && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>
                          Passe-partout size
                        </h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        {product.passPartoutSize !== undefined &&
                          Object.entries(product.passPartoutSize).map(
                            ([k, el]) =>
                              typeof el !== "string" &&
                              el.size !== undefined && (
                                <button
                                  className={`${styles.btn_selector}  ${
                                    selectedPassSizeNormed == k
                                      ? styles.selectedFrame
                                      : ""
                                  }`}
                                  key={el.size}
                                  onClick={() =>
                                    el.size !== undefined &&
                                    router.push(
                                      `/gift?${createQueryString(
                                        "passSize",
                                        k
                                      )}`,
                                      { scroll: false }
                                    )
                                  }
                                >
                                  {el.size} cm
                                </button>
                              )
                          )}
                        <p>
                          {product !== null &&
                            product.passPartoutSize !== undefined &&
                            "Border is in cm, max is 120 x 90"}
                        </p>
                      </div>
                    </>
                  )}
                {product !== null &&
                  Object.keys(product).includes("passPartoutColor") && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>
                          Passe-partout Color
                        </h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        {product.passPartoutColor !== undefined &&
                          Object.values(product.passPartoutColor).map((el) => (
                            <button
                              className={`${styles.btn_selector}  ${
                                passColor == el ? styles.selectedFrame : ""
                              }`}
                              key={el}
                              onClick={() =>
                                el !== undefined &&
                                router.push(
                                  `/gift?${createQueryString("passCl", el)}`,
                                  { scroll: false }
                                )
                              }
                            >
                              {el}
                            </button>
                          ))}
                      </div>
                    </>
                  )}
                {product !== null && Object.keys(product).includes("paper") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Print paper</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {product.paper !== undefined &&
                        Object.entries(product.paper).map(
                          ([key, el]) =>
                            isBlackAndWhite &&
                            Object.keys(el).includes("blackAndWitePaper") && (
                              <button
                                className={`${styles.btn_selector} ${
                                  paper !== undefined && paper.name == el.name
                                    ? styles.selectedFrame
                                    : ""
                                }  `}
                                onClick={() =>
                                  el !== undefined &&
                                  router.push(
                                    `/gift?${createQueryString("paper", key)}`,
                                    { scroll: false }
                                  )
                                }
                                key={el.name}
                              >
                                {el.name}
                              </button>
                            )
                        )}
                      {product.paper !== undefined &&
                        Object.entries(product.paper).map(
                          ([key, el]) =>
                            !isBlackAndWhite &&
                            Object.keys(el).includes("colorPaper") && (
                              <button
                                className={`${styles.btn_selector} ${
                                  paper !== undefined && paper.name == el.name
                                    ? styles.selectedFrame
                                    : ""
                                }  `}
                                onClick={() =>
                                  el !== undefined &&
                                  router.push(
                                    `/gift?${createQueryString("paper", key)}`,
                                    { scroll: false }
                                  )
                                }
                                key={el.name}
                              >
                                {el.name}
                              </button>
                            )
                        )}
                      <p>
                        {paper !== null && paper !== undefined && paper.desc}
                      </p>
                    </div>
                  </>
                )}

                {product !== null && Object.keys(product).includes("glass") && (
                  <>
                    <div className={styles.section_title}>
                      <h6 className={styles.title_text}>Protective Glass</h6>
                    </div>
                    <div className={styles.frames_solutions}>
                      {product.glass !== undefined &&
                        Object.entries(product.glass).map(([key, el]) => (
                          <button
                            className={`${styles.btn_selector}  ${
                              protection !== null &&
                              protection !== undefined &&
                              protection.name == el.name
                                ? styles.selectedFrame
                                : ""
                            }`}
                            key={el.name}
                            onClick={() =>
                              el !== undefined &&
                              router.push(
                                `/gift?${createQueryString("glass", key)}`,
                                { scroll: false }
                              )
                            }
                          >
                            {el.name}
                          </button>
                        ))}
                      <p>
                        {protection !== null &&
                          protection !== undefined &&
                          protection.desc}
                      </p>
                    </div>
                  </>
                )}
                {product !== null &&
                  Object.keys(product).includes("glassThickness") && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>Glass thickness</h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        {product !== null &&
                          product.glassThickness !== undefined &&
                          Object.entries(product.glassThickness).map(
                            ([key, el]) => (
                              <button
                                className={`${styles.btn_selector}  ${
                                  glassThickness !== undefined &&
                                  glassThickness.mm == el.mm
                                    ? styles.selectedFrame
                                    : ""
                                }`}
                                key={el.mm}
                                onClick={() =>
                                  router.push(
                                    `/gift?${createQueryString("thick", key)}`,
                                    { scroll: false }
                                  )
                                }
                              >
                                {el.mm} mm
                              </button>
                            )
                          )}
                      </div>
                    </>
                  )}

                {product !== null &&
                  Object.keys(product).includes("border") && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>Border size</h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        {product.border !== undefined &&
                          Object.keys(product.border).map(
                            (el) =>
                              el != "spec" && (
                                <button
                                  className={`${styles.btn_selector}  ${
                                    borderSize == el ? styles.selectedFrame : ""
                                  }`}
                                  key={el}
                                  onClick={() =>
                                    el !== null &&
                                    router.push(
                                      `/gift?${createQueryString(
                                        "bordSize",
                                        el
                                      )}`,
                                      { scroll: false }
                                    )
                                  }
                                >
                                  {el} cm
                                </button>
                              )
                          )}
                        <p>
                          {product.border !== undefined && product.border.spec}
                        </p>
                      </div>
                    </>
                  )}
                {product !== null &&
                  Object.keys(product).includes("hanging") && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>Hanging Solutions</h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        {product.hanging !== undefined &&
                          Object.keys(product.hanging) && (
                            <>
                              <button
                                className={`${styles.btn_selector}  ${
                                  !isHanged ? styles.selectedFrame : ""
                                }`}
                                onClick={() =>
                                  router.push(
                                    `/gift?${createQueryString("hang", "0")}`,
                                    { scroll: false }
                                  )
                                }
                              >
                                No hanging elements
                              </button>
                              <button
                                className={`${styles.btn_selector}  ${
                                  isHanged ? styles.selectedFrame : ""
                                }`}
                                onClick={() =>
                                  router.push(
                                    `/gift?${createQueryString("hang", "1")}`,
                                    { scroll: false }
                                  )
                                }
                              >
                                With rails or hooks
                              </button>
                            </>
                          )}
                      </div>
                    </>
                  )}
                {/* ============================= REFACTORING ==================================== */}

                {product !== null &&
                  product.spec !== undefined &&
                  product.spec == "Simple print" &&
                  Object.keys(product).includes("protection") && (
                    <>
                      <div className={styles.section_title}>
                        <h6 className={styles.title_text}>Protection</h6>
                      </div>
                      <div className={styles.frames_solutions}>
                        <button
                          className={`${styles.btn_selector} ${
                            lamination == undefined ? styles.selectedFrame : ""
                          }`}
                          onClick={() =>
                            router.push(
                              `/gift?${createQueryString("lam", "none")}`,
                              { scroll: false }
                            )
                          }
                        >
                          No Protection
                        </button>
                        {product !== null &&
                          product.protection !== undefined &&
                          Object.entries(product.protection).map(
                            ([key, el]) => (
                              <button
                                className={`${styles.btn_selector}  ${
                                  lamination !== undefined &&
                                  lamination.name == el.name
                                    ? styles.selectedFrame
                                    : ""
                                }`}
                                key={el.name}
                                onClick={() =>
                                  router.push(
                                    `/gift?${createQueryString("lam", key)}`,
                                    { scroll: false }
                                  )
                                }
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
