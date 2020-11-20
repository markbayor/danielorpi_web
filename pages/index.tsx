import {Navbar, NewsletterForm, PageHead} from "../components";
import { GetStaticProps, GetStaticPropsResult } from "next";
import axios from "axios";

import { ImageParams } from "../common/types";

import { Carousel, Slide } from 'react-clean-carousel'


interface HomeProps {
  heroimages?: ImageParams[];
}

export default function Home({ heroimages }: HomeProps) {
  return (
    <div className='home'>
      <PageHead />
      <Navbar />

      <main className='main'>
        {/* <img className='home__background--img' src="/hero-bg.jpg" alt="" /> */}
        <section className="featured">
          {/* <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
          {/* <hr className="hr" /> */}
          <Carousel size='medium-large'>
            <Slide imageUrl="/tw-banner.jpg">
            </Slide>
            <Slide imageUrl="/bannner-crate-diggaz.jpg">
            </Slide>
            <Slide imageUrl="/rumble-ep.jpg">
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
