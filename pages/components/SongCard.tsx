import React from "react";
import { SongDetails } from "../../common/types";
import styles from "../../styles/Music.module.scss";
import { SSL_OP_SINGLE_ECDH_USE } from "constants";

interface CardProps {
  song: SongDetails;
}

export default function SongCard({ song }: CardProps) {
  const getUrls = (song: SongDetails) => {
    const urls: object = {};
    // @ts-ignore
    for (let key in song) if (song[key] && key.includes("Url")) urls[key] = song[key];
    return urls;
  };
  const urls = getUrls(song);

  return (
    <div className={styles.card}>
      <div className={styles.card_image_container}>
        <img className={styles.card_img} src={`${process.env.NEXT_PUBLIC_CMS_URL}${song.cover.url}`} />
      </div>
      <div className={styles.undercard_container}>
        {urls &&
          Object.entries(urls).map((url: string[]) => (
            <div className={styles.url_container}>
              <span>{url[0]}:</span>{" "}
              <span>
                <a href={`http://${url[1]}`}>{url[1]}</a>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
