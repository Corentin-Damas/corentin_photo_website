import React from 'react'
import styles from "./page.module.css";
import Image_grid from '../../../../../../components/gallery/Image_grid';

function page() {
  return (
    <div className={styles.japan__grid}>
      <Image_grid currentDir='earth_and_sky'/>
    </div>
  )
}

export default page