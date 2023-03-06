import React from 'react'

interface Props{
    episodeLink:string;
}

function seethings({episodeLink}:Props) {
  return (
    <div>
        <iframe
            className='mt-96'
            width="560"
              height="315"
              src="https://www.youtube.com/watch?v=eLPs_w-FepA"
              title="Watch Anime"
            ></iframe>
    </div>
  )
}

export default seethings