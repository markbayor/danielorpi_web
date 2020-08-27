import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Navbar.module.scss'

export default function Navbar() {

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>
        <Link href='/'>
          <a><img />Logo will be here</a>
        </Link>
      </h1>
      <div className={styles.subcontainer}>
        <Link href='/'><a className={styles.navlink}>Home</a></Link>
        <Link href='/music'><a className={styles.navlink}>Music</a></Link>
        <Link href='/tour'><a className={styles.navlink}>Tour</a></Link>
        <a className={styles.navlink}>Contact</a>
      </div>
    </div>
  )
}