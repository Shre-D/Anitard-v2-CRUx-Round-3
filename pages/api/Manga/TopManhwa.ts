import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from 'redis';

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT as number|undefined
    }
});

client.on('error', (err:any) => {
  console.log('Error ' + err);
});

async function redisconnect() {
  await client.connect()
  console.log('connect ok');
}

redisconnect()

async function setkey(key:string,expiry:number,val:string){
    await client.setEx(key,expiry,val)
    console.log('bruh it ran wtf');
}

const getTopManhwaFromMAL= async () => {
  const top = await(await fetch("https://api.jikan.moe/v4/top/manga?type=manhwa")).json();
  return top
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  async function sendTopManhwa(){
    let isCached=false;
    let results;
    try{
    const cachedResults=await client.get('topmanhwa')
    if(cachedResults){
      isCached=true;
      results=JSON.parse(cachedResults)
    }else if(!isCached){
      results=await getTopManhwaFromMAL()
      console.log(results);
      setkey('topmanhwa',600,JSON.stringify(results))
    }    
    res.send({
      cached:isCached,
      data: results.data,
    });
    }catch(err){
      console.log(err)
      res.status(404).json({message:"Request unsuccessful"})
    }
  }
  sendTopManhwa()
}


