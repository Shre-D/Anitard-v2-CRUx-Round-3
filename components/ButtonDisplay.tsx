import React, { forwardRef, useState, useEffect } from "react";
import getAnime from "./Anilist/getAnime";
import Epbutton from "./Epbutton";
import exceptions from "./exceptions";

interface Props {
  episodes: number;
  id: number;
}

function ButtonDisplay({ episodes, id }: Props, ref: any) {
  // const [eplink, setEplink] = useState<string | null>("");
  const [number, setNumber] = useState<
    string | number | readonly string[] | undefined
  >();

  // const chooseEpisode = (eplink: string) => {
  //   setEplink(eplink);
  //   console.log(eplink);
  // };

  const getEpisodeNo = (
    number: string | number | readonly string[] | undefined
  ) => {
    setNumber(number);
    console.log(number);
  };

  const makeTitleStreamable = (str: string) => {
    const res = str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9x ]/g, " ")
      .trim()
      .split(" ")
      .join("-")
      .replace(/-+/gi, `-`);
    function correctTitle(str: string) {
      for (var i = 0; i < exceptions.length; i++) {
        if (exceptions[i].name.falsy == str) {
          str = exceptions[i].name.truthy;
        }
      }
      return str;
    }
    const trueTitle: string = correctTitle(res);
    return trueTitle;
  };

  const data = getAnime(id, "ANIME");

  const titleEntry = data.Media.title.romaji;
  const fallbackTitle = makeTitleStreamable(data.Media.title.english!);
  const title = makeTitleStreamable(titleEntry);
  const [episode, setEpisode] = useState("");
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEpisode = async () => {
      const EpisodeLink = await (
        await fetch(
          `https://api.consumet.org/anime/gogoanime/watch/${title}-episode-${number}`
        )
      ).json();
      const EpisodeLink2 = await (
        await fetch(
          `https://api.consumet.org/anime/gogoanime/watch/${fallbackTitle}-episode-${number}`
        )
      ).json();

      if (EpisodeLink.headers == null || undefined) {
        setEpisode(EpisodeLink2.headers?.Referer);
      } else {
        setEpisode(EpisodeLink.headers?.Referer);
      }
    };
    getEpisode();
  }, [number]);

  const episodesAdjusted = episodes + 1;
  var episodeList: Array<string> = [];
  for (var i = 1; i < episodesAdjusted!; i++) {
    episodeList.push(String(i));
  }
  return (
    <div ref={ref} className="bg-black">
      <div className="flex items-center justify-center border-3 border-white">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mt-16 font-manrope text-transparent bg-clip-text bg-gradient-to-b from-slate-700 via-rose-400 to-pink-700">
            Watch episode {number} of {data.Media.title.english} at Anitard
          </h1>

          {episode ? (
            <div className="overflow-hide">
              <iframe
                className="mt-6 rounded-2xl border-2 border-slate-600"
                src={episode!}
                title="Watch Anime"
                width={900}
                height={510}
                allowFullScreen
                frameBorder={2}
                scrolling="no"
              ></iframe>
            </div>
          ) : (
            <div>
              <h1 className="my-64">
                <div role="status" className="ml-11">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                <div className="my-2">

                </div>
                <h1>Select an episode</h1>
              </h1>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-12 mt-8">
        {episodeList.map((v) => (
          <Epbutton
            key={id}
            value={v}
            getEpisodeNo={(
              number: string | number | readonly string[] | undefined
            ) => getEpisodeNo(number)}
          />
        ))}
      </div>
    </div>
  );
}

export default forwardRef(ButtonDisplay);
