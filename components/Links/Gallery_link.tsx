import React from 'react'
import Link from 'next/link'
import styles from "./Gallery_link.module.css";

function Gallery_link({path, content}: {path: string, content: string}) {
  return (
    <Link href={path} className={styles.gallery_Link}>
    {content} _<span className="main-Color">&gt;</span>
  </Link>
  )
}

export default Gallery_link