"use client"
import {getSession,useSession,signIn,signOut} from "next-auth/react"

export default function Login(){
  const {data:session}=useSession()

  async function SessionDetails(){
    const sessiondetails=await getSession()
    return {sessiondetails}
  }

  const sessionDetails=SessionDetails()
  console.log(sessionDetails);

  if(session){
    return (
      <div className="flex flex-col mt-[40vh] items-center justify-center">
        hi
        <h5 className="text-white"> you are {session.user?.name!}</h5>
        <img className="rounded-full" src={session.user?.image!} alt="user's image"/>
        <button className="rounded px-3 mt-3 bg-slate-100 text-black" onClick={()=>signOut()}>
          Sign out
        </button>
      </div>
    )
  }else{
    return(
      <div>
        <button className="rounded p-5 bg-slate-100 text-black" onClick={(e)=>{
          e.preventDefault()
          signIn()}}>
          Sign In
        </button>
      </div>
    )
  }
}