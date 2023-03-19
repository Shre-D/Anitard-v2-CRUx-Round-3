import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
      req:NextApiRequest
    , res:NextApiResponse
    ) {try
      {
        function checkDuplicates(arr:Array<any>){
          for(var i=0;i<arr.length;i++){
            if(arr[i].ID==animeDetails.ID){
              return true
            }
          }
        }

        const {animeDetails,id,status} = req.body;
        const existingUser= await prisma.dashboard.findFirst({
          where: { userId: id},
        });
        console.log(existingUser)
        //check if user exists
        //creating dashboard if user does not exist

        if(!existingUser){
          
          if(status=="watching"){
            const dashboard = await prisma.dashboard.create({
              data: {
                user:{
                  connect:{
                    appid:id,
                  },
                },
                watchstatus:status,
                watched:{
                  "userwatched":[]
                },
                watching:{
                  "userwatching":
                  [
                    animeDetails
                  ]
                },
                notInterested:{
                  "useruninterested":[]
                }
              },
              
            })
            res.status(201).json({dashboard});
            return;
          }
          if (status=="watched"){
            const dashboard = await prisma.dashboard.create({
              data: {
                user:{
                  connect:{
                    appid:id,
                  },
                },
                watchstatus:status,
                watching:{"userwatching":[]},
                watched:{
                  "userwatched":
                  [
                    animeDetails
                  ]
                },
                notInterested:{"useruninterested":[]}
              },
              
            })
            res.status(201).json({dashboard});
            return;
          }
          if (status=="uninterested"){
            const dashboard = await prisma.dashboard.create({
              data: {
                user:{
                  connect:{
                    appid:id,
                  },
                },
                watchstatus:status,
                watched:{"userwatched":[]},
                watching:{"userwatching":[]},
                notInterested:{
                  "useruninterested":
                  [
                    animeDetails
                  ]
                }
              },
              
            })
            res.status(201).json({dashboard});
            return;
          }
        
        }
        if(existingUser){

          if(status=="watching"){
            const currentuserdata= await prisma.dashboard.findFirst({
              where:{
                userId:id
              },
              select:{
                watching:true
              }        
            })

            //@ts-ignore
            let currentArray=currentuserdata?.watching?.userwatching
            const animeAlreadyInList=checkDuplicates(currentArray)
            if(animeAlreadyInList){
              res.send({message:"exists"})
              return
            }
            else{
              //@ts-ignore
              let updatedArray=currentuserdata?.watching?.userwatching.concat([animeDetails])
              const dashboard=await prisma.dashboard.updateMany({
                where:{
                  userId:id
                },
                data:{
                    watching:{
                      "userwatching":updatedArray
                    }
                  },
                }
              )
              res.send({dashboard})
            }
                  
          }
          if(status=="watched"){
              const currentuserdata= await prisma.dashboard.findFirst({
                where:{
                  userId:id
                },
                select:{
                  watched:true
                }        
              })
              //@ts-ignore
              let currentArray=currentuserdata?.watched?.userwatched
              const animeAlreadyInList=checkDuplicates(currentArray)
              if(animeAlreadyInList){
                res.send({message:"exists"})
                return
              }
              else{
                //@ts-ignore
                let updatedArray=currentuserdata?.watched?.userwatched.concat([animeDetails])
                console.log(updatedArray);
                const dashboard=await prisma.dashboard.updateMany({
                  where:{
                    userId:id
                  },
                  data:{
                      watched:{
                        "userwatched":updatedArray
                      }
                    },
                  }
                )
                console.log(updatedArray);
                res.send({dashboard})
              }

          }
          if(status=="uninterested"){
            const currentuserdata= await prisma.dashboard.findFirst({
              where:{
                userId:id
              },
              select:{
                notInterested:true
              }        
            })
            //@ts-ignore
            let currentArray=currentuserdata?.notInterested?.useruninterested
            const animeAlreadyInList=checkDuplicates(currentArray)
            if(animeAlreadyInList){
              res.send({message:"exists"})
              return
            }
            else{
              //@ts-ignore
              let updatedArray=currentuserdata?.notInterested?.useruninterested.concat([animeDetails])
              console.log(updatedArray);
              const dashboard=await prisma.dashboard.updateMany({
                where:{
                  userId:id
                },
                data:{
                    notInterested:{
                      "useruninterested":updatedArray
                    }
                  },
                }
              )
              console.log(updatedArray);
              res.send({dashboard})
            }

        }
        }
        //if exists=> first determine request status
        //if watching->get watching list->determine if anime has already been added->update list 
        //if watched->get watched list->update list
        //if uninterested->get uninterested->update list
        //if user does not exist, create dashboard through status
       } 
    catch (err) {
    console.log(err);
    res.status(500).json("not ok");
  }
  }