import React from "react";
import { Animetype } from "../types";
import { useState, useEffect } from "react";

interface Props {
  animeData: Animetype[];
}

function ShowcaseAnime({ animeData }: Props) {
  const [anime, setAnime] = useState<Animetype | undefined>(undefined);

  useEffect(() => {
    setAnime(animeData[Math.floor(Math.random() * animeData.length)]);
  }, [animeData]);

  return (
    <div>
      <div className="content pl-10 pt-5 pb-20 px-4 flex items-start space-x-20 	 ">
        <img
          src={anime?.images.jpg.large_image_url}
          className="h-[75vh] w-[50vh] rounded-2xl shadow-md"
        />
        <div className="py-5 pr-24">
          <h6 className="pb-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 ">
            {anime?.title_english}
          </h6>
          <h3 className="text-lg pt-6">{anime?.synopsis}</h3>
          <br />
          <br />
          <div className="flex space-x-5">
            <a href={anime?.trailer.url!}>
              <button className="font-medium bg-white text-black p-2 rounded hover:bg-cyan-200 duration-200">
                Trailer ▶️{" "}
              </button>
            </a>
            <a href={anime?.url!}>
              <button className="font-medium bg-white text-black p-2 rounded hover:bg-cyan-200 duration-200">
                View ↗️
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseAnime;
