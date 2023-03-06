import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try{
    const {id} = req.body;
    const dashboard=await prisma.dashboard.findUnique({
        where:{userId:id},
    })
    res.send({dashboard})
  }
  catch(err){
    console.log(err);
    res.status(404).json("not ok");
  }
}
