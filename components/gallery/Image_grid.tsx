import { promises as fs } from "fs";
import path from "path";
import React, { useState } from "react";

import style from "./../gallery/Image_grid.module.css";
import GalleryImg from "./Gallery";

const Image_grid = async ({ currentDir }: { currentDir: string }) => {
  const imageDirectory = path.join(process.cwd(), `/public/${currentDir}/S`);
  const imageFilenames = await fs.readdir(imageDirectory);

  return (
    <div className={style.container}>
      <div className={style.main}>
        <GalleryImg images={imageFilenames} currentDir={currentDir} />
      </div>
    </div>
  );
};

export default Image_grid;


