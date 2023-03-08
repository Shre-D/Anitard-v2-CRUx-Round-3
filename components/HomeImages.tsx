import React from "react";

function HomeImages() {
  return (
    <div>
      <div className="flex justify-center gap-14 pt-16 pb-5">
        <img
          src="show4.png"
          alt="guts"
          className="h-48 w-48 rounded-full transition:1000 md:invisible"
        />
        <img
          src="show1.png"
          alt="otonari"
          className="h-48 w-48 rounded-full transition:1000 md:invisible"
        />
        <img
          src="show2.png"
          alt="mylifeamovie"
          className="h-48 w-48 rounded-full transition:1000 md:invisible"
        />
        <img
          src="show3.png"
          alt="animelogo"
          className="h-48 w-48 rounded-full transition:1000 md:invisible"
        />
        <img
          src="show5.png"
          alt="Bam"
          className="h-48 w-48 rounded-full transition:1000 md:invisible"
        />
      </div>
    </div>
  );
}

export default HomeImages;
