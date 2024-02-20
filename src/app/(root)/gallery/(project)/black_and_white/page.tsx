import React from 'react'
import styles from "./page.module.css";
import Image_grid from '../../../../../../components/gallery/Image_grid';

function page() {
  return (
    <div className={styles.japan__grid}>
      <Image_grid currentDir='black_and_white'/>
    </div>
  )
}

export default page