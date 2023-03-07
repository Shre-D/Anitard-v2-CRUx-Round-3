import { dividerClasses } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { userAgent } from "next/server";

interface Props {
  anime: any;
  searched: boolean;
}

function SearchCardAnime({ anime, searched }: Props) {
  const [animeDetails, setAnimeDetails] = useState<Object>();
  const [status,setStatus]=useState<String>();
  const {data:session}=useSession()

  function decideStatus(status:string){
    if(status=="watching"){
      return {status:"watching"}
    }
    if(status=="watched"){
      return {status:"watched"}
    }
    if(status=="uninterested"){
      return {status:"uninterested"}
    }
    else{
      return {status:"undecided"}}
    }

  // interface Decision{
  //   status:string
  // }

  // const decision:Decision=decideStatus(status!)

  const submitHandler = async function() {
    const result = await fetch("/api/WatchingList/Addtowatching", {
      method: "POST",
      body: JSON.stringify({
        animeDetails: animeDetails,
        id: session?.user.id,
        status:status
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await result.json();
    console.log(res)
  };


  return (
    <div className="relative">
      <div className="">
        <Link href={`/anime/${anime?.mal_id}`} target="_blank" rel="noreferrer">
          <div>
            <div className="flex max-h-[55vh] h-[65vh] border-4 border-slate-400 flex-col cursor-pointer ease-out transition-500 w-full items-center justify-center rounded-2xl shadow-md lg:max-w-sm bg-gradient-to-br bg-no-repeat bg-fixed from-slate-900 to-green-600">
              <img
                className="object-cover w-48 h-64 max-h-64 max-w-48 hover:scale-105 hover:opacity-75 rounded-3xl border-4 border-slate-900"
                src={anime?.images.jpg.large_image_url}
                alt="image"
              />
              <div className="p-4 flex flex-col items-center justify-center">
                {anime?.title.length < 25 ? (
                  <h4>{anime?.title}</h4>
                ) : (
                  <h4>{anime?.title.substring(0, 10) + " ..."}</h4>
                )}
                <div className="absolute flex flex-col opacity-0 hover:opacity-100 bg-slate-400">
                  <form
                  onSubmit={(e)=>{
                  e.preventDefault()               
                  submitHandler()
                  }}
                  >
                    <button
                      onClick={(e) =>{
                        setStatus("watching")
                        setAnimeDetails({
                          ID: anime?.mal_id,
                          title: anime?.title,
                          image: anime?.images.jpg.large_image_url,
                          score: anime?.score,
                        })}
                      }
                      className=" hover:bg-red-200 w-48 transition-200 px-4 py-2 text-sm text-black bg-red-100 rounded shadow"
                    >
                      Add to watching
                    </button>
                    <button
                      onClick={(e)=>{
                        setStatus("watched")
                        setAnimeDetails({
                          ID: anime?.mal_id,
                          title: anime?.title,
                          image: anime?.images.jpg.large_image_url,
                          score: anime?.score
                        })
                      }}
                      className=" hover:bg-red-200 w-48 transition-200 px-4 py-2 text-sm text-black bg-red-100 rounded shadow"
                    >
                      Add to watched
                    </button>
                    <button
                      onClick={(e) =>{
                        setStatus("uninterested")
                        setAnimeDetails({
                          ID: anime?.mal_id,
                          title: anime?.title,
                          image: anime?.images.jpg.large_image_url,
                          score: anime?.score,
                        })}
                      }
                      className=" hover:bg-red-200 w-48 transition-200 px-4 py-2 text-sm text-black bg-red-100 rounded shadow"
                    >
                      Add to uninterested
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SearchCardAnime;
