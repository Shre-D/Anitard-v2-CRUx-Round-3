import React from 'react'

function HomeImages() {
  return (
    <div>
        <div className="flex justify-center gap-14 pt-16 pb-5">
          <img
            src="show4.png"
            alt="guts"
            className="hover:animate-bounce h-48 w-48 rounded-full transition:1000 hover:opacity-95 md:invisible"
          />
          <img
            src="show1.png"
            alt="otonari"
            className="hover:animate-bounce h-48 w-48 rounded-full transition:1000 hover:opacity-95"
          />
          <img
            src="show2.png"
            alt="mylifeamovie"
            className="hover:animate-bounce h-48 w-48 rounded-full transition:1000 hover:opacity-95"
          />
          <img
            src="show3.png"
            alt="animelogo"
            className="hover:animate-bounce h-48 w-48 rounded-full transition:1000 hover:opacity-95 "
          />
          <img
            src="show5.png"
            alt="Bam"
            className="hover:animate-bounce h-48 w-48 rounded-full transition:1000 hover:opacity-75 md:invisible"
          />
        </div>
    </div>
  )
}

export default HomeImages