import Link from 'next/link'
import React from 'react'
import styles from "../components/Navbar.module.css"

function Navbar() {
  return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.myNameLink}>Corentin Damas</Link>
            <ul className={styles.links}>
                <Link href="/project">Project</Link>
                <Link href="/project">Gallery</Link>
                <Link href="/project">About</Link>
            </ul>
            <button>contact me</button>
        </nav>

  )
}

export default Navbar