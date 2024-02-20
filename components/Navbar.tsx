import Link from 'next/link'
import React from 'react'
import styles from "../components/Navbar.module.css"

function Navbar() {
  return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.myNameLink}>Corentin Damas</Link>
            <ul className={styles.links}>
                <Link href="/gallery">Project</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/About">About</Link>
                {/* <Link href="/your_print">Your Print</Link> */}
            </ul>
            <button>contact me</button>
        </nav>

  )
}

export default Navbar