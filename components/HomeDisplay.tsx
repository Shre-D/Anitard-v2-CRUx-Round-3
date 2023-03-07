import SearchCardAnime from "./SearchCardAnime";
import SearchCardManga from "./SearchCardManga";
import { Animetype } from "../types";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PrepareHomeAnime from "./PrepareHomeAnime";
import PrepareHomeManga from "./PrepareHomeManga";

export interface ZoroType {
  currentPage: number;
  hasNextPage: boolean;
  totalPages:  number;
  results:     Result[];
}

export interface Result {
  id:    string;
  title: string;
  type:  Type;
  image: string;
  url:   string;
}

export enum Type {
  Movie = "MOVIE",
  Ona = "ONA",
  Tv = "TV",
}

interface Props {
  animeList: Animetype[];
  mangaList: Animetype[];
  searched:boolean

}

function HomeDisplay({animeList,mangaList,searched}:Props) {
  return (
    <main className="flex mt-16 bg-purple">
      <div>
          <PrepareHomeAnime animeList={animeList} searched={searched}/>      
      </div>
       <div>
          <PrepareHomeManga mangaList={mangaList} searched={searched}/>
      </div>
    </main>
  );
}

export default HomeDisplay;
