import SearchCardAnime from "./SearchCardAnime";
import { Animetype } from "../types";
import { ZoroType } from "./HomeDisplay";
import { useState,useEffect } from "react";

interface Props {
  animeList: Animetype[];
  searched: boolean;
}

function PrepareHomeAnime({ animeList, searched }: Props) {
  
  const [sort, setSort] = useState("Score");

  const scoreList=animeList
  const popularityList=animeList
  const episodeList=animeList
  const yearList=animeList

  function sortByPopularity(animeList: any) {
    animeList.sort(function(a: any, b: any) {
      if ((a.popularity != 0) && (b.popularity != 0)) {
        if (a.popularity > b.popularity) {
          return 1;
        }
        if (a.popularity < b.popularity) {
          return -1;
        }
    return 0;

      }
    }
    );
  }
  function sortByReleaseYear(animeList: any) {
    animeList.sort(function(a: any, b: any) {
      if (
        (a.aired.from?.slice(0, 4) as number) != null &&
        (b.aired.from?.slice(0, 4) as number) != null
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


 function Sort(){
  console.log(sort);
  
  if(sort=="Score"){
    sortByScore(animeList)
    console.log(list);
  }
  if(sort=="Episodes"){
    sortByEpisodes(animeList)
    console.log(list);    
  }
  if(sort=="Popularity"){
    sortByPopularity(animeList)
    console.log(list);    
  }
  if(sort=="Release Year"){
    sortByReleaseYear(animeList)
    console.log(list);
  }      
 }
 
  const [list,setList]=useState<Animetype[]|undefined>(popularityList) 

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
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value)  
                  console.log(e.target.value);
                  Sort()               
                }}
              >              
                  <option value=""></option>  
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
        {animeList?.map((anime: any) => (
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
