import Header from "../components/Header";

function About() {
  return (
    <div>
      <title>Anitard-About</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/otonari.png" className="rounded-full" />
      <Header />
      <div className="flex items-start">
        <img
          src="/pfp.png"
          className="h-[70vh] w-[50vh] rounded-full shadow-md pl-5 pt-5"
          alt="animeData"
        />

        <div>
          <h6 className="pb-2 pt-10 pl-6 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 ">
            Hi, I am ShreD. I like anime and manga.
          </h6>{" "}
          <br />
          <h3 className="pr-10 pl-6 text-xl">
            This website would one day like to have the ability to let the user
            stream and download anime, though I am not sure if it is possible as
            of now. The backend also needs a lot more work. I would like the
            user to be able to authenticate and add some user specific features.
          </h3>
          <br /> <br />
          <h3 className="pl-6 pr-10 text-xl">
            However, for now I wont let you go empty handed. Here are some sites
            where you can stream and download anime, read manga and light
            novels.
          </h3>
          <div className="flex items-center pt-12 pl-8 gap-5">
            <a href="https://zoro.to/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl hover:text-slate-400">
                Zoro
              </button>
            </a>
            <a href="https://9anime.vc/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-purple-600 to-pink-400 rounded-2xl hover:text-slate-400">
                9anime
              </button>
            </a>
            <a href="https://mangadex.org/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-2xl hover:text-slate-400">
                MangaDex
              </button>
            </a>
            <a href="https://nyaa.si/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-blue-500 to-cyan-300 rounded-2xl hover:text-slate-400">
                Nyaa
              </button>
            </a>
            <a href="https://animepahe.ru/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl hover:text-slate-400">
                Animepahe
              </button>
            </a>
          </div>
          <div className="flex pt-10 pl-8 gap-5">
            <a href="https://anilist.co/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-blue-700 to-cyan-600 rounded-2xl hover:text-slate-400">
                AniList
              </button>
            </a>
            <a href="https://myanimelist.net/ ">
              <button className="text-white shadow-lg h-16 w-24 bg-gradient-to-r from-yellow-700 to-orange-300 rounded-2xl hover:text-slate-400">
                MyAnimeList
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="pl-[22vh] pt-4">
        <a href="https://github.com/Shre-D ">
          <img
            src="/github_logo.png"
            className="rounded-full grayscale hover:grayscale-0 h-20 w-16 pt-5 pl-15"
            alt="ye"
          />
        </a>
      </div>
    </div>
  );
}

export default About;
