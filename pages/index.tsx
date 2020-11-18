import Navbar from "../components/Navbar";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";
import Pixel from '../components/Pixel'

import axios from "axios";

import { ImageParams } from "../common/types";
import NewsletterForm from "../components/NewsletterForm";

import { Carousel, Slide } from 'react-clean-carousel'


interface HomeProps {
  heroimages?: ImageParams[];
}

export default function Home({ heroimages }: HomeProps) {
  return (
    <div className='home'>
      <Head>
        <title>Daniel Orpi</title>
        <link rel="icon" href="/favicon.ico" />
        <Pixel />
      </Head>
      <Navbar />

      <main className='main'>
        <img className='home__background--img' src="/header-bg.jpg" alt="" />
        <section className="featured">
          <hr className="hr" />
        </section>
        <section className="news">
          <Carousel size='large'>
            <Slide imageUrl="/tw-banner.jpg">
            </Slide>
            <Slide imageUrl="/2-1.jpg">
            </Slide>
          </Carousel>
        </section>
      </main>
      {/* <footer className='footer'>
        <NewsletterForm />
      </footer> */}
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
