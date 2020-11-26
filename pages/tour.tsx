import {GetStaticProps} from 'next'
import React from 'react'
import {PageHead,Navbar} from '../components'
import axios from 'axios'
import {TourEventParams} from '../common/types'

interface TourPageParams {
  events: TourEventParams[]
}

const tourPage = ({events}: TourPageParams) => {
  return (
    <div className='tour'>
      <PageHead />
      <Navbar />
      <main className='main'>

      </main>
      <footer className='footer'>
      </footer>
    </div>
  )
}
export default tourPage 

export const getStaticProps: GetStaticProps = async (context) => {
  const events: TourEventParams[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/events`)).data;

  return {
    props: {
      events
    },
  };
};
