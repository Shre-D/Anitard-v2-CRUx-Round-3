import SearchCardAnime from "./SearchCardAnime";
import { Animetype } from "../types";
import { ZoroType } from "./HomeDisplay";
import { useState,useEffect, use } from "react";

interface Props {
  animeList: Animetype[];
  searched: boolean;
}

function PrepareHomeAnime({ animeList, searched }: Props) {
  const [list,setList]=useState<Animetype[]|undefined>(animeList)  
  animeList = animeList.filter(((i:any) => i.popularity!=0 ));
  animeList = animeList.filter(((i:any) => i.score!=0 ));
  animeList = animeList.filter(((i:any) => i.episodes!=0 ));
  animeList = animeList.filter(((i:any) => i.aired.from?.slice(0, 4) as number!=0));
  animeList = animeList.filter(((i:any) => i.popularity!=null ));
  animeList = animeList.filter(((i:any) => i.score!=null ));
  
  animeList = animeList.filter(((i:any) => i.aired.from?.slice(0, 4) as number!=null ));

  function sortByPopularity(animeList: any) {
    animeList.sort(function(a: any, b: any) {
        if (a.popularity > b.popularity) {
          return 1;
        }
        if (a.popularity < b.popularity) {
          return -1;
        }
      return 0
  }
    );
  }
  function sortByReleaseYear(animeList: any) {
    animeList.sort(function(a: any, b: any) {
      if (
        (a.aired.from?.slice(0, 4) as number) != null||0 &&
        (b.aired.from?.slice(0, 4) as number) != null||0
      ) {
        if (
          (a.aired.from?.slice(0, 4) as number) >
          (b.aired.from?.slice(0, 4) as number)
        ) {
          return 1;
        }
        if (
          (a.aired.from?.slice(0, 4) as number) <
          (b.aired.from?.slice(0, 4) as number)
        ) {
          return -1;
        }
        return 0
      }
    });
    ;
  }

  function sortByScore(animeList: any) {
    animeList.sort(function(a: any, b: any) {
      if (a.score !=null||0 && b.score != null||0) {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        return 0
      }
    });
    ;
  }

  function sortByEpisodes(animeList: any) {
    animeList.sort((a: any, b: any) =>{
      if(a.episodes!=0||null&&b.episodes!=0||null){
        if (a.episodes>b.episodes) {
          return -1;
        }
        if (a.episodes< b.episodes) {
          return 1;
        }
        return 0
  }});
  }  

  let scoreList=[...animeList]
  let popularityList=[...animeList]
  let episodeList=[...animeList]
  let yearList=[...animeList]

  sortByScore(scoreList)  
  sortByPopularity(popularityList)
  console.log(scoreList);
  
  sortByEpisodes(episodeList)
  sortByReleaseYear(yearList)   

  return (
    <div className="mr-20">
      <div>
        {searched ? (
          <div className="flex">
            <h2 className="pl-5 text-2xl">Anime search results</h2>
            <form className="" action="">
              <label className="ml-4 text-sm" htmlFor="sort">
                Sort
              </label>
              <select
                className="w-28 ml-2 p-1 rounded bg-slate-500 text-sm"
                name="sort"
                onChange={(e) => {
                  if(e.target.value==="Popularity"){
                    setList(popularityList)
                  }    
                  if(e.target.value==="Score"){
                    setList(scoreList)
                  }
                  if(e.target.value==="Release Year"){
                    setList(yearList)
                  }
                  if(e.target.value==="Episodes"){
                    setList(episodeList)
                  }       
                  
                }}
              >               
                  <option value="Score">Score</option>
                  <option value="Popularity">Popularity</option>
                  <option value="Release Year">Release Year</option>
                  <option value="Episodes">Episodes</option>
              </select>
            </form>
          </div>
        ) : (
          <h2></h2>
        )}
      </div>
      <div className="pl-2 pt-5 pb-20 items-center max-h-80 max-w-64 space-x-0.5 grid grid-cols-3 gap-4 md:space-x-2.5 md:p-2">
        {list?.map((anime: any) => (
          <SearchCardAnime
            anime={anime}
            searched={searched}
            key={anime.mal_id}
          />
        ))}
      </div>
    </div>
  );
}

export default PrepareHomeAnime;
