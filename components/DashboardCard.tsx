import React from "react";
import Link from "next/link";

interface DashboardAnime {
  ID: number;
  title: string;
  image: string;
  score: number;
}

interface Props {
  anime: DashboardAnime;
}

function DashboardCard({ anime }: Props) {
  return (
    <div>
      <div className="hover:opacity-75 hover:scale-105 cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] ">
        <Link href={`/anime/${anime?.ID}`}>
        <img
          src={anime?.image}
          className="rounded-2xl h-64 w-40 shadow-md border-4 border-slate-400"
          alt="animeData"
        />
        </Link>
      </div>
    </div>
  );
}

export default DashboardCard;
