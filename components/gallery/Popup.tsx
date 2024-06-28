import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { GrFormPrevious, GrFormNext, GrFormClose } from "react-icons/gr";


import styles from "./Popup.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Save_Icon from "./Save_Icon";

function Popup({
  imgList,
  currentDir,
  idxImg,
  closePopup,
}: {
  imgList: Array<string>;
  currentDir: string;
  idxImg: number;
  closePopup: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currIdx, setCurrIdx] = useState<number>(idxImg);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: idxImg,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrIdx(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrIdx(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  const keyDownDetected = useCallback(
    (e: any) => {
      if (e.key == "ArrowLeft") {
        scrollPrev();
      }
      if (e.key == "ArrowRight") {
        scrollNext();
      }
      if (e.key == "Escape") {
        closePopup((show) => !show);
      }
    },
    [scrollPrev, scrollNext, closePopup]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyDownDetected);
    return () => document.removeEventListener("keydown", keyDownDetected);
  });

  return (
    <div className={styles.popup}>
      <div className={styles.popup__container}>
        <div className={`${styles.embla} ${styles.popup__grid}`}>
          <div
            className={`${styles.embla__viewport}  ${styles.img__container}`}
            ref={emblaRef}
          >
            <div className={`${styles.embla__container}`}>
              {imgList.map((el, idx) => (
                <Image
                  key={idx}
                  src={`/${currentDir}/L/${el}`}
                  className={`${styles.embla__slide} ${styles.img}`}
                  width={1800}
                  height={1000}
                  quality={100}
                  loading={"eager"}
                  alt={`actually looking a carousel picture number ${idx}`}
                />
              ))}
            </div>
          </div>

          <GrFormPrevious
            className={`${styles.prev} ${styles.icon}`}
            onClick={scrollPrev}
          />
          <GrFormNext
            className={`${styles.next} ${styles.icon}`}
            onClick={scrollNext}
          />
          <GrFormClose
            className={`${styles.close} ${styles.icon}`}
            onClick={() => closePopup((show) => !show)}
          />
          <div className={styles.bottom}>
            <Save_Icon imgName={imgList[currIdx]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
