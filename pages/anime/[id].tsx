import Head from "next/head";
import { useRouter } from "next/router";
import { useState,useRef } from "react";
import Header from "../../components/Header";
import ReactPlayer from "react-player/lazy";
import getAnime from "../../components/Anilist/getAnime";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ButtonDisplay from "../../components/ButtonDisplay";
import Comments from "../../components/Comments";

function Media() {
  function titleCase(str: string) {
    if (str == null) {
      return " ";
    }
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }
  const router = useRouter();
  const fid = router.query.id;
  const id = Number(fid);
  const [showPlayer, setShowPlayer] = useState(false);
  const data = getAnime(id, "ANIME");
  console.log(data);

  const ref=useRef<null|HTMLDivElement>(null);

  const handlePlay=()=>{
    ref.current?.scrollIntoView({behavior:"smooth"});
  }
  

  const makeTitleStreamable = (str: string) => {
    const res = str
      .toLowerCase()
      .split(" ")
      .join("-");
    return res;
  };

  const handleInput = (e: any) => {
    console.log(e.target.value);
  };
  if(data==true){
    return(
      <div>
        <Head>
            <title>Anitard</title>
            <link rel="icon" href="/otonari.png" />
          </Head>
          <Header />
      <div
            role="status"
            className="flex space-x-12 space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex items-center justify-center content h-[75vh] ml-12 mt-4 rounded-3xl bg-gray-300 sm:w-96 dark:bg-gray-700">
              {/* <svg className="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg> */}
            </div>
            <div className="flex flex-col w-[120vh] mt-4">
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-8"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh]"></div>

              <div className="flex space-x-4 mt-12">
                <span className="bg-gray-200 h-10 w-24 p-2 rounded-3xl dark:bg-gray-700"></span>
                <span className="bg-gray-200 h-10 w-24 p-2 rounded-3xl dark:bg-gray-700"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          </div>
    )
  }else{

  return (
    data.Media && (
      <div>
        <div className="relative">
          <Head>
            <title>Anitard</title>
            <link rel="icon" href="/otonari.png" />
          </Head>
          <Header />
            <div>
              <section className="relative z-50">
                <div className="relative min-h-[calc(100vh-72px)]">
                  {data.Media.bannerImage ? (
                    <img
                      className="w-screen h-screen object-cover opacity-20"
                      src={data.Media.bannerImage}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-screen h-screen opacity-40"
                      src="/wallpaperfiller.jpg"
                      alt="oks"
                    />
                  )}
                </div>
                <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    {titleCase(data.Media.title.english)} <br />
                    <h1 className="text-3xl">{data.Media.title.native}</h1>
                  </h1>
                  <div className="flex items-center space-x-3 md:space-x-5">
                    <button 
                    onClick={handlePlay}
                    className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                      <img
                        src="/images/play-icon-white.svg"
                        alt=""
                        className="h-6 md:h-8"
                      />
                      <span className="uppercase font-medium tracking-wide">
                        Play
                      </span>
                    </button>

                    <button
                      className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                      onClick={() => setShowPlayer(true)}
                    >
                      <img
                        src="/play-icon-white.svg"
                        alt=""
                        className="h-6 md:h-8"
                      />
                      <span className="uppercase font-medium tracking-wide">
                        Trailer
                      </span>
                    </button>

                    {/* <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                      <PlusIcon className="h-6" />
                    </div>

                    <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                      <img src="/group-icon.svg" alt="" />
                    </div> */}
                  </div>

                  <p className="text-xs md:text-sm">
                    <>
                      <span className="font-semibold text-base">
                        {data.Media.seasonYear + "-"}{" "}
                      </span>
                      <span className="font-semibold text-base">
                        {" "}
                        {titleCase(data.Media?.season!)}
                      </span>
                    </>{" "}
                    {data.Media.genres.map((genre: string) => (
                      <button className="mx-2 p-2 bg-slate-200 text-black">
                        {genre}
                      </button>
                    ))}
                    <span className="m-2 font-bold">
                      Rating:{" "}
                      <span className="text-amber-300 text-md font-bold">
                        {data.Media.averageScore}
                      </span>
                      %
                    </span>
                  </p>
                  <h4 className="text-md md:text-lg max-w-4xl">
                    {data.Media.description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </h4>
                </div>

                {/* Bg Overlay */}
                {showPlayer && (
                  <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
                )}

                <div
                  className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
                    showPlayer ? "opacity-100 z-50" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
                    <span className="font-semibold">Play Trailer</span>
                    <div
                      className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                      onClick={() => setShowPlayer(false)}
                    >
                      <XMarkIcon className="h-5" />
                    </div>
                  </div>
                  <div className="relative pt-[56.25%]">
                    {data.Media.trailer?.id ? (
                      <ReactPlayer
                        url={`https://www.${data.Media.trailer.site}.com/watch?v=${data.Media.trailer.id}`}
                        width="100%"
                        height="100%"
                        style={{ position: "absolute", top: "0", left: "0" }}
                        controls={true}
                        playing={showPlayer}
                      />
                    ) : (
                      <>no trailer available</>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div>
            <div className=""></div>
          </div>
          <ButtonDisplay
            ref={ref}
            id={id}
            episodes={data.Media.episodes == null ? 2000 : data.Media.episodes}
          />
          <Comments/>
        </div>
          )  
  );
}
}
export default Media;
