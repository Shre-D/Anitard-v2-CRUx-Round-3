import SearchCardManga from "./SearchCardManga";
import { Animetype } from "../types";

interface Props{
    mangaList:Animetype[];
    searched:boolean
}

function PrepareHomeManga({mangaList,searched}:Props) {
  return (
    <div>
        <div>{
            searched? 
            <h2 className="pl-5 text-2xl">Manga search results</h2>:
            <h2></h2>
           }
        </div>
        <div className="pl-2 pt-5 pb-20 items-center max-h-80 max-w-64 space-x-0.5 grid grid-cols-3 gap-4 md:space-x-2.5 md:p-2">
          {mangaList?.map((manga) => (
            <SearchCardManga manga={manga} key={manga.mal_id} />
          ))}
        </div>
    </div>
  )
}

export default PrepareHomeManga