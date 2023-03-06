import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GoogleButton from 'react-google-button'
import {GithubLoginButton,GoogleLoginButton,DiscordLoginButton } from "react-social-login-buttons";
import {getSession,useSession,signIn,signOut} from "next-auth/react"


interface Inputs {
  email: string
  password: string
}

function Login() { 
  const {data:session}=useSession()
  
  return (
    <div className="flex">
      <div>
        <div className="flex flex-col w-[70vh] h-[100vh] justify-center items-center bg-gradient-to-br bg-no-repeat bg-fixed from-slate-800 to-slate-900">
          <h1 className="text-5xl font-extrabold flex items-center justify-center font-manrope text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 hover:white">
            ANITARD
          </h1>
          <p className='mb-16'>Simply, the best.</p>
          <div className='flex-col'>
            <form action="">
            <GoogleLoginButton onClick={()=>{signIn('google',{callbackUrl:'/Dashboard'})}}/>
            <div className='mb-4'></div>
            <GithubLoginButton />
            <div className='mb-4'></div>
            <DiscordLoginButton />
              <div className='flex flex-col items-center justify-center pt-5'>
                <h1 className='pt-6'>Continue without Signing In</h1>
                <Link href="/">
                <button className='mt-4 bg-purple-900 p-3 pl-4 pr-4 rounded-3xl'>
                  Back to Home
                </button>
                </Link>
                
              </div>

            </form>
          </div>

        </div>

      </div>
      <div className='w-[130vh] bg-black'>
        <img
          src="bg3.png"
          alt="imageidk"
          className='h-[100vh] w-[130vh]'
        />

      </div>
    </div>

  )
}

export default Login
