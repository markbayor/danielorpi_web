import {Navbar, NewsletterForm, PageHead} from "../components";
import { GetStaticProps } from "next";
import axios from "axios";
import { Carousel, Slide } from 'react-clean-carousel'

import {SlideParams} from "../common/types";


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
            <Carousel size='medium'>
              {
                slides?.map((slide) => <Slide key={slide.title} linkUrl={slide.link} imageUrl={slide.image.url}>{}</Slide>)
              }
            </Carousel>
          </div>
          <NewsletterForm />
        </section>
      </main>
      <footer className='footer'>
          
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slides: SlideParams[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/slides`)).data;

  return {
    props: {
      slides: slides.filter((slide) => slide.isActive),
    },
  };
};
