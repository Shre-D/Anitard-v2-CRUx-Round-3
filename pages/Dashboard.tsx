import { useEffect, useState } from "react";
import { useSession,getSession } from "next-auth/react";
import DashboardCard from "../components/DashboardCard";
import Header from "../components/Header";
import DashboardCarousel from "../components/DashboardCarousel";
import Link from "next/link";


function Dashboard() {

  const [image, setImage] = useState<string | Blob>("");
  const [url, setUrl] = useState<string|undefined>();
  const [pfp,setPfp]=useState<string>()
  const {data:session}=useSession();
  const [trigger,setTrigger]=useState(1)
  const [uploaded,setUploaded]=useState(false)

  const createUser = async function () {
    const result = await fetch(
      "/api/users/register",
      {
        method: "POST",
        body: JSON.stringify({
          username: session?.user.name,
          email:session?.user.email,
          appid:session?.user.id,
          provider:session?.user.provider,
          image:url,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setTrigger(2)
    }
  
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "uomxnt5e");
    data.append("cloud_name", "dwfuw3y3n");

    fetch("https://api.cloudinary.com/v1_1/dwfuw3y3n/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function updatePfp(){
    const result = await fetch("/api/users/updateprofilepic", {
      method: "POST",
      body: JSON.stringify({
        appid: session?.user.id,
        image:url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await result.json();

    console.log(res);
  }

  async function getPfp(){
    const result = await fetch("/api/users/getprofilepic", {
      method: "POST",
      body: JSON.stringify({
        appid: session?.user.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await result.json();
    setPfp(res.image?.image);
  }

  const [loading, setLoading] = useState(true);
  const [watching, setWatching] = useState([]);
  const [watched, setWatched] = useState([]);
  const [uninterested, setUninterested] = useState([]);
  const [showUploadButton, setShowUploadButton] = useState(false);

    async function getDashboard() {
      const result = await fetch("/api/WatchingList/Getwatchlist", {
        method: "POST",
        body: JSON.stringify({
          id: session?.user.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await result.json();
      setWatching(res.dashboard?.watching.userwatching);
      setWatched(res.dashboard?.watched.userwatched);
      setUninterested(res.dashboard?.notInterested.useruninterested);
    }

    useEffect(() => {
      Promise.all([getDashboard(),getPfp()])
      setLoading(false)
    }, [trigger]) 

    async function imageProcess(){
      await setTimeout(uploadImage,5000)
      await setTimeout(updatePfp,10000)
      await setTimeout(getPfp,2000)
    }
     
  if(session){  
    createUser()
  return (
    loading?
    <div
            role="status"
            className="flex space-x-12 space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="flex items-center justify-center content h-[75vh] ml-12 mt-4 rounded-3xl bg-gray-300 sm:w-96 dark:bg-gray-700">
              {/* <svg className="h-12 w-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg> */}
            </div>
            <div className="flex flex-col w-[120vh] mt-4">
              <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-8"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh] mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100vh]"></div>

              <div className="flex space-x-4 mt-12">
                <span className="bg-gray-200 h-10 w-24 p-2 rounded-3xl dark:bg-gray-700"></span>
                <span className="bg-gray-200 h-10 w-24 p-2 rounded-3xl dark:bg-gray-700"></span>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
    :<div>
      <Header />
      <div className="mb-3">
        <div className="flex space-x-4 h-64 w-64">
          <img
            className="rounded-full p-5"
            src={pfp}
          />
          <div>
            <h1 className="mt-8 mb-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300">
              {session?.user.name}'s Dashboard
            </h1>
            <button
              className="bg-purple-700 p-2 rounded-2xl"
              onClick={(e) => {
                setShowUploadButton(true);
              }}
            >
              Change Profile picture
            </button>
            {showUploadButton ? (
              <div className="mt-4 mb-4">
                <input
                  type="file"
                  onChange={(e) => {
                    setImage(e.target.files![0]);
                    console.log(e.target.files![0]);
                  }}
                ></input>
                <div className="mt-3"></div>
                <div className="flex space-x-4">
                  {
                    uploaded?
                    <div className="flex space-x-4">
                      
                    <button
                  className="bg-purple-700 p-2 rounded-2xl"
                  onClick={()=>
                    {
                      setTimeout(updatePfp,2000)
                      setTrigger(3)
                      setTrigger(4)
                      setTrigger(5)
                    }}
                >
                  Confirm
                </button>
                <h1 className="mt-2 text-red-400">Wait 3 seconds and confirm!!!</h1>
                </div>
                :
                <button
                className="bg-purple-700 p-2 rounded-2xl"
                onClick={()=>
                  {
                    setTimeout(uploadImage)
                    setUploaded(true)
                  }}
              >
                Upload
              </button>
                
                  }
                
                
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <DashboardCarousel watching={watching} watched={watched} uninterested={uninterested}/>
      </div>
    </div>

  );}else{
    return(
    <div>
      <Header/>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4">You must be signed in to access Dashboard!</h1>
        <Link href="/Login">
          <button className="p-1 bg-purple-600 rounded-2xl text-slate-300">Sign In</button>
        </Link>
      </div>
      </div>
    )
  }
}


export default Dashboard;
