import {GetServerSideProps, GetStaticProps} from 'next'
import React from 'react'
import {PageHead,Navbar, TourEvent, Footer} from '../components'
import axios from 'axios'
import {TourEventParams} from '../common/types'

interface TourPageParams {
  events: TourEventParams[]
}

const tourPage = ({events}: TourPageParams) => {
  return (
    <div className='tour-page'>
      <PageHead />
      <Navbar />
      <main className='main'>
        <div className='events'>
          {
            events && events.length ? events.sort((a, b) => new Date(a.startDate).getTime()  - new Date(b.startDate).getTime()).map(event => <TourEvent 
              key={event.name}
              location={event.location} 
              startDate={event.startDate} 
              endDate={event.endDate} 
              ticketLink={event.ticketLink}
              city={event.city}
              country={event.country}
              name={event.name}
              isActive={event.isActive}
            />) : <div className="c-dates-message">COMING SOON...</div>
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default tourPage 

export const getServerSideProps: GetServerSideProps = async (context) => {
  const events: TourEventParams[] = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_URL}/events`)).data;

  return {
    props: {
      events
    },
  };
};
