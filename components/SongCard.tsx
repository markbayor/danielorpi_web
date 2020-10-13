import React from "react";
import { SongDetails } from "../common/types";

interface CardProps {
  song: SongDetails;
}

const SongCard = ({ song }: CardProps) => {
  const getUrls = (song: SongDetails) => {
    const urls: object = {};
    // @ts-ignore
    for (let key in song) if (song[key] && key.includes("Url")) urls[key] = song[key];
    return urls;
  };
  const urls = getUrls(song);

  return (
    <div className='card'>
      {/* <div className='card__hero'>
        <img className='card__hero__img' src={`${process.env.NEXT_PUBLIC_CMS_URL}${song.cover.url}`} />
      </div>
      <div className='undercard'>
        <div className='undercard__info--container'>
          <span className='undercard__info--name'>{song.name}</span>
          <span className='undercard__info--artist'>{song.artist}</span>
        </div>
        <div className='undercard__urls--container'>
          {urls &&
            Object.entries(urls).map((url: string[]) => (
              <div className='undercard__url--container'>
                <div className="undercard__url--icon"></div>
                <span className='undercard__url--url'>{url[0]}:</span>{" "}
                <span>
                  <a className='undercard__url--link' href={`${url[1]}`}>{url[1]}</a>
                </span>
              </div>
            ))}
        </div>
      </div> */}
    </div>
  );
}

export default SongCard;