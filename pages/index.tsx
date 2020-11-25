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
        {/* <img className='home__background--img' src="/hero-bg.jpg" alt="" /> */}
        <section className="featured">
          {/* <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
          {/* <hr className="hr" /> */}
          <div style={{padding: '10px', backgroundColor: 'rgba(50, 50, 50, .5)', borderRadius: '3px'}}>
          <Carousel size='medium'>
            {
              slides?.map((slide) => <Slide key={slide.title} linkUrl={slide.link} imageUrl={slide.image.url}>{}</Slide>)
            }
          </Carousel>
          </div>
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
