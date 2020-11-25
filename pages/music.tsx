import React, { useState, useEffect } from "react";
import axios from "axios";
import { GetStaticProps } from "next";
import { SongDetails } from "../common/types";
import {Navbar, NewsletterForm, PageHead} from "../components";

import {Card, CardProps} from 'react-clean-card';

interface MusicProps {
  songs: SongDetails[];
}

export default function Music({ songs }: MusicProps) {
  return (
    <div className='music-page'>
      <PageHead />
      <Navbar />
      <main className='main'>
        <div className='cards__container'>{songs && songs.map((song) => <Card size='normal' imageUrl={song.cover.url} {...song} />)}</div>
      </main>
      <footer className='footer'>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const songs: SongDetails[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/eps`)).data;

  return {
    props: {
      songs
    },
  };
};
