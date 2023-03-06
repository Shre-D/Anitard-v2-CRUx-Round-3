import Link from "next/link";

interface Props {
    manga:any;
  }
  
  function SearchCardManga({manga}: Props) {
    return (
      <div className="">
        <Link href={`/manga/${manga?.mal_id}`} target="_blank" rel="noreferrer">
          <div>
            <div className="flex max-h-[55vh] h-[65vh] flex-col cursor-pointer border-4 border-slate-400 ease-out transition-500 w-full items-center justify-center rounded-2xl shadow-md lg:max-w-sm bg-gradient-to-br bg-no-repeat bg-fixed from-slate-900 to-green-600">
              <img
                className="object-cover w-48 h-64 max-h-64 max-w-48 hover:scale-105 hover:opacity-75 rounded-3xl border-4 border-slate-900"
                src={manga?.images.jpg.large_image_url}
                alt="image"
              />
              <div className="p-4 flex flex-col items-center justify-center">
                  {
                    manga?.title.length<25? <h4>{manga?.title}</h4>:<h4>{manga?.title.substring(0,10)+" ..."}</h4>
                  }
                <button className="hover:scale-105 transition-200 px-4 py-2 text-sm text-black bg-red-100 rounded shadow">
                  Add to favourites
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  
  export default SearchCardManga;
  
  