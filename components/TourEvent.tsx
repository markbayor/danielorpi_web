import React from "react";
import {TourEventParams} from "../common/types";

const TourEvent = ({location, ticketLink, city, country, name, startDate, endDate}: TourEventParams) => {
  console.log(typeof startDate)

  const parsedStartDate = new Date(startDate)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

  return (
    <div className='tour_event'>
      <div className="tour_event-date-big">
        <div className="tour_event-date-big--month">{`${months[parsedStartDate.getMonth()]}`}</div>
        <div className="tour_event-date-big--day">{`${parsedStartDate.getDay() < 10 ? '0' : ''}${parsedStartDate.getDay()}`}</div>
      </div>
      <div className="tour_event-info">
        <div className="tour_event-info--name">
          {name}
        </div>
        <div className="tour_event-info--dates">
          <span style={{paddingRight: '.7rem'}}>{startDate}</span> 
            - 
          <span style={{paddingLeft: '.7rem'}}>{endDate}</span>
        </div>
      </div>
      <div className="tour_event-location">
        <div className="tour_event-location--location">
          {location}
        </div>
        <div className="tour_event-location--city">
          {city},
        </div>
        <div className="tour_event-location--country">
          {country}
        </div>
      </div>  
      <a href={ticketLink || '#'} className="tour_event-button">
        GET TICKETS
      </a>   
    </div>
  )
}

export {TourEvent}