import React, { forwardRef, useState } from "react";
import getAnime from "./Anilist/getAnime";
import Epbutton from "./Epbutton";

interface Props {
  episodes: number;
  id: number;
}

function ButtonDisplay({ episodes, id }: Props,ref:any) {
  

  const [eplink, setEplink] = useState<string | null>("");
  const [number,setNumber]=useState<string | number | readonly string[] | undefined>()

  const chooseEpisode = (eplink: string) => {
    setEplink(eplink);
  };

  const getEpisodeNo =(number:string | number | readonly string[] | undefined)=>{
    setNumber(number)
  }

  const data = getAnime(id, "ANIME");

  const episodesAdjusted = episodes + 1;
  var episodeList: Array<string> = [];
  for (var i = 1; i < episodesAdjusted!; i++) {
    episodeList.push(String(i));
  }
  console.log(eplink);
  return (
    <div ref={ref} className="bg-black">
      <div className="flex items-center justify-center border-3 border-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mt-16 font-manrope text-transparent bg-clip-text bg-gradient-to-b from-slate-700 via-rose-400 to-pink-700">
            Watch episode {number} of {data.Media.title.english} at Anitard
          </h1>

          {eplink ? (
            <div className="overflow-hide">
              <iframe
                className="mt-6 rounded-2xl border-2 border-slate-600"
                src={eplink!}
                title="Watch Anime"
                width={900}
                height={510}
                allowFullScreen
                frameBorder={2}
                scrolling="no"
              ></iframe>
            </div>
          ) : (
            <h1 className="my-64">Nothing selected</h1>
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 mt-8">
        {episodeList.map((v) => (
          <Epbutton
            value={v}
            id={id}
            info={data.Media}
            chooseEpisode={(eplink: string) => chooseEpisode(eplink)}
            getEpisodeNo={(number:string | number | readonly string[] | undefined)=>getEpisodeNo(number)}
          />
        ))}
      </div>
    </div>
  );
}

export default forwardRef (ButtonDisplay);
