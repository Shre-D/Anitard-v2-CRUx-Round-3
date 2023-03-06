import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/Header";
import ReactPlayer from "react-player/lazy";
import getManga from "../../components/Anilist/getManga";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Manga() {
  function titleCase(str:string) {
    if(str==null){
      return " "
    }
    var splitStr = str.toLowerCase().split(' ');
    
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }
  const router = useRouter();
  const fid = router.query.id;
  const id = Number(fid);
  const [showPlayer, setShowPlayer] = useState(false);
  const data = getManga(id,"MANGA");
  console.log(data)

  return (
    data.Media &&(
      <div>
        <div className="relative">
          <Head>
            <title>Anitard</title>
            <link rel="icon" href="/otonari.png" />
          </Head>
          <Header />
          <section className="relative z-50">
            <div className="relative min-h-[calc(100vh-72px)]">
              {data.Media.bannerImage?
              <img className="w-screen h-screen opacity-40" src={data.Media.bannerImage} alt="" />:
              <img className="w-screen h-screen opacity-40" src="/wallpaperfiller.jpg" alt="oks" />
            }
            </div>
            <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                {titleCase(data.Media.title.english)} <br />
                <h1 className="text-3xl">{data.Media.title.native}</h1>
              </h1>
              <div className="flex items-center space-x-3 md:space-x-5">
                <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
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

                <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                  <PlusIcon className="h-6" />
                </div>

                <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                  <img src="/group-icon.svg" alt="" />
                </div>
              </div>

              <p className="text-xs md:text-sm">
              <>
                   <span className="font-semibold text-base">{data.Media.seasonYear+"-"} </span> 
                  </>
                {" "}
                {" "}
                  {data.Media.genres.map((genre: string) => (
                    <button className="mx-2 p-2 bg-slate-200 text-black">
                      {genre}
                    </button>
                  ))}
                <span className="m-2 font-bold">Rating: <span className="text-amber-300 text-md font-bold">{data.Media.averageScore}</span>%</span>
                
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
    )
  );
}

export default Manga;
