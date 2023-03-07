import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    try{
       const {userId,animeId,comment,rating}=req.body

       const findPair=await prisma.review.findUnique({
        where:{
            userId:userId
        },
        select:{
            animeID:true
        }
       })

       if(findPair?.animeID==animeId){
        res.json({message:"a review by the user exists on the same anime!"})
        return
       }else{

       const review= await prisma.review.create({
        data:{
            user:{
                connect:{
                    appid:userId
                }
            },
            animeID:animeId,
            Comment:comment,
            Rating:rating
        }
       })
       res.status(200).json(review)
    }
        }catch(err){
            console.log(err);            
            res.status(403).json({message:"bad request"})
        }
    }