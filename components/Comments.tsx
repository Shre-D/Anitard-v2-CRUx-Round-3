import React from "react";
import { useState } from "react";

function Comments() {
    const [rating,setRating]=useState<Number>()
    console.log(rating);
    
  return (
    <div className="pt-4 pl-6 pb-24 bg-black">
      <div className="flex space-x-4 pb-4">
        <h1 className="text-yellow-500 text-lg font-semibold">Anitard Rating</h1>
        <select className="bg-slate-700 rounded p-1 text-white" onChange={(e)=>setRating(+e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <h1 className="mb-6 font-semibold text-2xl">Comments</h1>
      <form action="">
        <input
          type="text"
          placeholder="write your comment"
          className="rounded pl-2 text-black bg-white pr-[80vh] h-12"
        />
      </form>
      <h1 className="pt-5 text-yellow-500">User1</h1>
      <h1 className="pb-2">Great!Love it!</h1>
      <h1 className="pt-5 text-yellow-500">User2</h1>
      <h1 className="pb-2">Ewww!Hate it!</h1>
    </div>
  );
}

export default Comments;
