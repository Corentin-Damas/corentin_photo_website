import React from 'react'
import styles from "./page.module.css";
import Image_grid from '../../../../../../components/gallery/Image_grid';

function page() {
  return (
    <div className={styles.japan__grid}>
      <Image_grid currentDir='a_year_in_japan'/>
    </div>
  )
}

export default page