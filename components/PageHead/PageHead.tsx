import React from 'react'
import Head from "next/head";
import Pixel from './Pixel'

const PageHead =  () => 
      <Head>
        <title>Daniel Orpi</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
        <Pixel />
      </Head>

export {PageHead}