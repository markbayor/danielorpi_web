import Navbar from "./components/Navbar";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";

import axios from "axios";

import { ImageParams } from "../common/types";
import NewsletterForm from "./components/NewsletterForm";

// import { Carousel, Slide } from 'react-clean-carousel'

interface HomeProps {
  heroimages?: ImageParams[];
}

export default function Home({ heroimages }: HomeProps) {
  return (
    <div className='home-page'>
      <Head>
        <title>Daniel Orpi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='main'>
        {/* <Carousel>
          <Slide imageUrl="https://picsum.photos/900/400">
            children (whatever you want to put IN the slide e.g buttons, links, etc)
          </Slide>
        </Carousel> */}
      </main>
      <footer className='footer'>
        <NewsletterForm />
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const heroimages: ImageParams[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/heroimages`)).data;

  return {
    props: {
      // heroimages: heroimages.filter((image) => image.isActive),
    },
  };
};
