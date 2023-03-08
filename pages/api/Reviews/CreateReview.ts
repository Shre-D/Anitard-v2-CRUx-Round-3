import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { userId, animeId, comment, rating } = req.body;

    //    const findPair=await prisma.review.findMany({
    //     where:{
    //         userId:userId
    //     },
    //     select:{
    //         animeID:true
    //     }
    //    })
    //    const n=findPair.length
    //    if(findPair){
    //     for (var i=0;i<n;i++){
    //         if(findPair[i]==animeId){
    //             res.json({message:"a review by the user exists on the same anime!"})
    //             return
    //         }
    //     }
    //    }

    const review = await prisma.review.create({
      data: {
        user: {
          connect: {
            appid: userId,
          },
        },
        animeID: animeId,
        Comment: comment,
        Rating: rating,
      },
    });
    res.status(200).json(review);
  } catch (err) {
    console.log(err);
    res.status(403).json({ message: "bad request" });
  }
}
