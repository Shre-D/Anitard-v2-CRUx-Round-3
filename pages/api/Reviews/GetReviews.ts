import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    try{
       const {animeId}=req.body
       const key=animeId as string+"-reviews"
       const Review= await prisma.review.findMany({
        where:{
            animeID:animeId
        },
        select:{
            Comment:true,
            Rating:true,
            user:{
                select:{
                    username:true
                }
            }
        }
       })
       res.json(Review)

        }catch(err){
            console.log(err);            
            res.status(403).json({message:"bad request"})
        }
    }