import Navbar from '../components/Navbar'
import Head from 'next/head'
import { GetStaticProps, GetStaticPropsResult } from 'next'

import axios from 'axios'
import styles from '../styles/Home.module.scss'
import Slider from '../components/Slider/Slider'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Orpi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h3>Slider is under here</h3>
        <Slider />
        <h1>This will be Daniel Orpi's website.</h1>
      </main>
    </div >
  )
}

