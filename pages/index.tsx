import Navbar from "./components/Navbar";
import Head from "next/head";
import { GetStaticProps, GetStaticPropsResult } from "next";

import axios from "axios";

import Slider from "./components/Slider";
import { ImageParams } from "../common/types";
import { NewsletterForm } from "./components/NewsletterForm";

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
        {/* <div className='slider__container'>
          <Slider images={heroimages} />
        </div> */}
      </main>
      <footer className='footer'>
        <NewsletterForm />
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const heroimages: ImageParams[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/heroimages`)).data;

  return {
    props: {
      heroimages: heroimages.filter((image) => image.isActive),
    },
  };
};
