import React from "react";
import axios from "axios";
import { GetServerSideProps } from "next";
import { SongDetails } from "../common/types";
import {Footer, Navbar, PageHead} from "../components";

import {Card} from 'react-clean-card';

interface MusicProps {
  songs: SongDetails[];
}

export default function Music({ songs }: MusicProps) {
  return (
    <div className='music-page'>
      <PageHead />
      <Navbar />
      <main className='main'>
        <div className='cards__container'>{songs && songs.map((song) => <Card mainStyle={{fontFamily: "Bebas Neue"}} size='normal' imageUrl={song.cover.url} {...song} />)}</div>
      </main>
      
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const songs: SongDetails[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/eps`)).data;

  return {
    props: {
      songs
    },
  };
};
