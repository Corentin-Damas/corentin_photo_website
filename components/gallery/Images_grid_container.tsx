import { promises as fs } from "fs";
import path from "path";
import React from "react";

import style from "./../gallery/Image_grid.module.css";
import GalleryImg from "./Gallery";
import Image_grid from "./Image_grid";

const Images_grid_container = async ({ currentDir }: { currentDir: string }) => {
  const imageDirectory = path.join(process.cwd(), `/public/${currentDir}/S`);
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <Image_grid images={imageFilenames} currentDir={currentDir} />
      </div>
    </div>
  );
};

export default Images_grid_container;
