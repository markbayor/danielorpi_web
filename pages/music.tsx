import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { SongDetails } from "../common/types";

import Head from "next/head";
import Navbar from "../components/Navbar";
import NewsletterForm from "../components/NewsletterForm";

import SongCard from "../components/SongCard";

interface MusicProps {
  songs: SongDetails[];
}

export default function Music({ songs }: MusicProps) {
  console.log("SONGS", songs);
  return (
    <div className='music-page'>
      <Head>
        <title>Daniel Orpi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='main'>
        <div className='cards__container'>{songs && songs.map((song) => <SongCard song={song} />)}</div>
      </main>
      <footer className='footer'>
        <NewsletterForm />
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const songs: SongDetails[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/songs`)).data;

  return {
    props: {
      // songs,
    },
  };
};
