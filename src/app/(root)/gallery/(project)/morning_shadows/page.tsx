import React from 'react'
import styles from "./page.module.css";
import Image_grid from '../../../../../../components/gallery/Image_grid';

function page() {
  return (
    <div className={styles.japan__grid}>
      <Image_grid currentDir='morning_shadows'/>
    </div>
  )
}

export default page