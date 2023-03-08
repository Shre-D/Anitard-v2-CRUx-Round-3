import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useRef, useState } from "react";
import DashboardCard from "./DashboardCard";

interface DashboardAnime {
  ID: number;
  title: string;
  image: string;
  score: number;
}

interface Props {
  watching: Array<DashboardAnime> | null;
  watched: Array<DashboardAnime> | null;
  uninterested: Array<DashboardAnime> | null;
}

function DashboardCarousel({ watching, watched, uninterested }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const rowRef1 = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);
  const [isMoved1, setIsMoved1] = useState(false);
  const rowRef2 = useRef<HTMLDivElement>(null);
  const [isMoved2, setIsMoved2] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleClick1 = (direction: string) => {
    setIsMoved1(true);
    if (rowRef1.current) {
      const { scrollLeft, clientWidth } = rowRef1.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef1.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleClick2 = (direction: string) => {
    setIsMoved2(true);
    if (rowRef2.current) {
      const { scrollLeft, clientWidth } = rowRef2.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef2.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="text-3xl mb-6 ml-4 text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-rose-600">
        Watchlist
      </div>
      <div className="h-40 pb-80 space-y-0.5 md:space-y-2">
        <h2 className="p-1 w-56 cursor-pointer text-xl ml-3 font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-pink-400 transition duration-200 hover:text-white md:text-2xl">
          Watching {"(" + watching?.length + ")"}
        </h2>
        <div className="relative group md:-ml-2">
          <KeyboardArrowLeftIcon
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved &&
              "hidden"}`}
            onClick={() => handleClick("left")}
          />
          <div
            className="flex p-4 gap-4 items-center overflow-y-hidden space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
            ref={rowRef}
          >
            {watching?.map((anime) => (
              <DashboardCard key={anime?.ID} anime={anime} />
            ))}
          </div>
          <KeyboardArrowRightIcon
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
      <div className="h-40 pt-2 pb-80 space-y-0.5 md:space-y-2">
        <h2 className="p-1 w-56 cursor-pointer text-xl ml-3 font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-pink-400 transition duration-200 hover:text-white md:text-2xl">
          Watched {"(" + watched?.length + ")"}
        </h2>
        <div className="relative group md:-ml-2">
          <KeyboardArrowLeftIcon
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved1 &&
              "hidden"}`}
            onClick={() => handleClick1("left")}
          />
          <div
            className="flex p-4 gap-4 overflow-y-hidden items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
            ref={rowRef1}
          >
            {watched?.map((anime) => (
              <DashboardCard key={anime?.ID} anime={anime} />
            ))}
          </div>
          <KeyboardArrowRightIcon
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick1("right")}
          />
        </div>
      </div>
      <div className="h-40 pb-80 space-y-0.5 md:space-y-2">
        <h2 className="p-2 w-56 cursor-pointer text-xl ml-3 font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-500 to-pink-400 transition duration-200 hover:text-white md:text-2xl">
          Uninterested {"(" + uninterested?.length + ")"}
        </h2>
        <div className="relative group md:-ml-2">
          <KeyboardArrowLeftIcon
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved2 &&
              "hidden"}`}
            onClick={() => handleClick1("left")}
          />
          <div
            className="flex p-4 gap-4 overflow-y-hidden items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
            ref={rowRef2}
          >
            {uninterested?.map((anime) => (
              <DashboardCard key={anime?.ID} anime={anime} />
            ))}
          </div>
          <KeyboardArrowRightIcon
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick1("right")}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardCarousel;
