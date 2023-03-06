import React, { useState,useEffect } from 'react'
import getAnime, { reception } from './Anilist/getAnime';
import exceptions from './exceptions';

interface Props{
    value:string | number | readonly string[] | undefined;
    id:number;
    info:reception;
    chooseEpisode: (eplink: string) => void
    getEpisodeNo : (number : string | number | readonly string[] | undefined) =>void
}

function Epbutton({value,id,info,chooseEpisode,getEpisodeNo}:Props) {

  

    const makeTitleStreamable=(str:string)=>{
        const res=str.toLowerCase().replace(/[^a-zA-Z0-9x ]/g, " ").trim().split(' ').join('-').replace(/-+/gi,`-`);
        function correctTitle(str:string){   
          for(var i=0;i<exceptions.length;i++){
              if(exceptions[i].name.falsy==str){
                  str=exceptions[i].name.truthy
              }
          }
          return str
      }
        const trueTitle:string=correctTitle(res)
        return trueTitle;
      }

    const titleEntry=info.title.romaji;
    const fallbackTitle=makeTitleStreamable(info.title.english!);
    const title=makeTitleStreamable(titleEntry);     
    const [episode,setEpisode]=useState(" ");
    const [selected,setSelected]=useState(false)

    const getEpisode= async()=>{
        const EpisodeLink=await (await fetch(`https://api.consumet.org/anime/gogoanime/watch/${title}-episode-${value}`)).json()
        const EpisodeLink2=await (await fetch(`https://api.consumet.org/anime/gogoanime/watch/${fallbackTitle}-episode-${value}`)).json()

        if(EpisodeLink.headers==null||undefined){
          setEpisode(EpisodeLink2.headers?.Referer)
        }else{
          setEpisode(EpisodeLink.headers.Referer)
        }

        }
    console.log(title);
    
  return (
    <div>
        <button className={`${selected?"bg-gradient-to-br bg-no-repeat bg-fixed from-purple-800 to-rose-700":"bg-gradient-to-br bg-no-repeat bg-fixed from-pink-800 to-rose-600"} cursor-default text-white hover:opacity-80 p-3 w-24 m-2 border-2 border-white rounded-2xl`} value={value}
        onClick={()=>{
            getEpisode();
            chooseEpisode(episode)
            getEpisodeNo(value)
            setSelected(true)
          }}
        >
            {value}
        </button>
    </div>
  )
}

export default Epbutton
