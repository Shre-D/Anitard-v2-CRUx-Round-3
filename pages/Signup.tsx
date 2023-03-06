import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'


function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [error, setError] = useState("");
  const [isRegistered,setIsRegistered]=useState(false)

  const submitHandler = async function () {
    const result = await fetch(
      "/api/users/register",
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          firstname: firstname,
          email: email
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res= await result.json()
    console.log(res)
  };

  return (
    <div className="flex">
      <div>
        <div className="flex flex-col w-[70vh] h-[100vh] justify-center items-center bg-gradient-to-br bg-no-repeat bg-fixed from-slate-800 to-slate-900">
          <h1 className="text-5xl font-extrabold flex items-center justify-center font-manrope text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 hover:white">
            ANITARD
          </h1>
          <p className='mb-16'>Simply, the best.</p>
          <div className='flex-col'>
            <form
            onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
        }}
      >
              <h1 className='text-lg pl-2'>Username</h1>
              <input
                type="text"
                className={`input hover:bg-slate-200 pl-4 text-black items-center mt-2 w-80 h-10 rounded-3xl`}
                maxLength={20}
                placeholder='Username'
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              /> <br /><br />

              <h1 className='text-lg pl-2'>First name</h1>
              <input
                type="text"
                className={`input hover:bg-slate-200 pl-4 text-black items-center mt-2 w-80 h-10 rounded-3xl`}
                required
                maxLength={20}
                placeholder='First name'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              /> <br /><br />

              <h1 className='text-lg pl-2'>Email</h1>
              <input type="email"
                className={`input hover:bg-slate-200 pl-4 text-black items-center mt-2 w-80 h-10 rounded-3xl`}
                required
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br /><br />
              <h1 className='text-lg pl-2'>Password</h1>
              <input type="password"
                className={`input hover:bg-slate-200 pl-4 text-black items-center mt-2 w-80 h-10 rounded-3xl`}
                required
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className='flex flex-col items-center justify-center pt-5'>
                <button className='bg-purple-900 p-3 pl-4 pr-4 rounded-3xl hover:text-slate-400'
                  type="submit"
                >
                  {
                    isRegistered ? <Link href="/Login">Login!</Link>:"Register"!
                  }

                </button >
              </div>

            </form>
          </div>

        </div>

      </div>
      <div className='bg-cover'>
        <img
          src="bg5.png"
          alt="imageidk"
          className='h-[100vh]'
        />

      </div>
    </div>

  )
}

export default Signup
