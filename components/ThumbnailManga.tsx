interface Props {
  manga: any;
}

function ThumbnailManga({ manga }: Props) {
  return (
    <div className="pb-6 hover:opacity-75 hover:scale-105 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] ">
      <a href={manga?.url} target="_blank" rel="noreferrer">
        <img
          src={manga?.images.webp.large_image_url}
          className="w-64 h-72 rounded-2xl shadow-md border-4 border-slate-400"
          alt="animeData"
        />
      </a>
    </div>
  );
}

export default ThumbnailManga;
