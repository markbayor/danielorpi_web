import React from 'react'
import { GetServerSideProps, GetStaticProps } from "next";
import axios from "axios";
import {SlideParams} from "../common/types";

import {Footer, Navbar, PageHead} from "../components";
import { Carousel, Slide } from 'react-clean-carousel'

interface HomeProps {
  slides?: SlideParams[];
}

export default function Home({ slides }: HomeProps) {
  return (
    <div className='home'>
      <PageHead />
      <Navbar />
      
      <main className='main'>
        <section className="featured">
          <div className='slider__container'>
            <Carousel size='medium' arrowsContainerStyle={{ width: '100%' }} >
              {
                slides?.map((slide) => <Slide key={slide.title} linkUrl={slide.link} imageUrl={slide.image.url}>{}</Slide>)
              }
            </Carousel>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slides: SlideParams[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/slides`)).data;

  return {
    props: {
      slides: slides.filter((slide) => slide.isActive),
    },
  };
};
