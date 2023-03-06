import { NextApiRequest,NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(req:NextApiRequest,res:NextApiResponse){
    try{
        const {appid}=req.body
        const image=await prisma.user.findUnique({
            where:{
                appid:appid
            },
            select:{
                image:true
            }
        })
        res.send({image})
    }
        catch(err){
            console.log(err);            
            res.status(403).json({message:"bad request"})
        }
    }