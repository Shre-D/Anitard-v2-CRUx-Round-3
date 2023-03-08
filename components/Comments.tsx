import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/dist/client/link";

interface Props {
  id: number;
}

interface Review {
  Rating: number;
  Comment: String;
  user: modelUser;
}

interface modelUser {
  username: String;
}

function Comments({ id }: Props) {
  const [rating, setRating] = useState<number>();
  const [reviewPrompt, setReviewPrompt] = useState<boolean>(false);
  const [comment, setComment] = useState<string>();
  const [reviews, setReviews] = useState<Array<Review> | null>();
  const { data: session } = useSession();

  async function GetReviews() {
    const result = await fetch("/api/Reviews/GetReviews", {
      method: "POST",
      body: JSON.stringify({
        animeId: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((x) => {
        setReviews(x);
      });
  }

  useEffect(() => {
    GetReviews();
  }, []);

  async function submitHandler() {
    const result = await fetch("/api/Reviews/CreateReview", {
      method: "POST",
      body: JSON.stringify({
        animeId: id,
        userId: session?.user.id,
        comment: comment,
        rating: rating,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await result.json();
  }

  if (session) {
    return (
      <div className="pt-4 pl-6 pb-24 bg-black">
        {reviewPrompt ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex space-x-4 pb-4">
              <h1 className="text-yellow-500 text-lg font-semibold">
                Anitard Rating
              </h1>
              <select
                className="bg-slate-700 rounded p-1 text-white"
                required
                onChange={(e) => setRating(+e.target.value)}
              >
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
            <div className="flex">
              <input
                type="text"
                placeholder="write your comment"
                className="rounded pl-2 text-black bg-white w-[80vh] h-12"
                required
                onChange={(e) => setComment(e.target.value)}
              />
              <button
                className="bg-purple-600 p-2 ml-4 rounded "
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  submitHandler();
                }}
              >
                Submit review
              </button>
            </div>
            <h1>Please write a review as well as set a rating!</h1>
          </form>
        ) : (
          <div></div>
        )}

        {reviewPrompt ? (
          <div>
            <button
              className="p-2 mt-6 rounded bg-purple-600"
              onClick={() => setReviewPrompt(false)}
            >
              back
            </button>
          </div>
        ) : (
          <div className="bg-slate-700 p-3 mr-8 rounded-2xl ">
            <h1 className="text-2xl mb-8 mt-4">
              {" "}
              <span className="font-semibold p-0.5 rounded text-white">
                Reviews
              </span>{" "}
            </h1>
            {reviews?.map((review, index) => (
              <div>
                <div className="flex mb-2">
                  <h1>
                    <span className="mt-4 bg-purple-400 rounded p-1">
                      {review?.user.username}
                    </span>
                  </h1>
                  <h1 className="ml-4 text-yellow-400">
                    {" "}
                    Rating-{review?.Rating}
                  </h1>
                </div>
                <h2 className="mb-4">{review?.Comment}</h2>
              </div>
            ))}
          </div>
        )}
        {reviewPrompt ? (
          <div></div>
        ) : (
          <button
            className="p-2 ml-2 mb-2 mt-6 rounded bg-purple-600"
            onClick={() => setReviewPrompt(true)}
          >
            Write a review
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className="pt-4 pl-6 pb-24 bg-black">
        <Link href="/Login">
          <span className="text-purple-400">Sign in</span>
        </Link>{" "}
        to write a review
        <div className="mt-6"></div>
        {reviews?.map((review, index) => (
          <div>
            <div className="flex mb-2">
              <h1>
                <span className="mt-4 bg-purple-400 rounded p-1">
                  {review?.user.username}
                </span>
              </h1>
              <h1 className="ml-4 text-yellow-400"> Rating-{review?.Rating}</h1>
            </div>
            <h2 className="mb-4">{review?.Comment}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default Comments;
