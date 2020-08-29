import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { GetStaticProps } from 'next'
import { SongDetails } from '../common/types'

import Head from 'next/head'
import Navbar from './components/Navbar'
import { NewsletterForm } from './components/NewsletterForm'

import styles from '../styles/Home.module.scss'

export default function Music({ songs }: any) {

  console.log('SONGS', songs)
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Orpi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>This will be Daniel Orpi's Music page</h1>
      </main>
      <footer className={styles.footer}>
        <NewsletterForm />
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const songs: SongDetails[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/songs`)).data

  return {
    props: {
      songs
    }
  }
}
