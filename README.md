# Anitard-v2-CRUx-Round-3

This project was built for the round 3 inductions of CRUx, BPHC.

# Anitard v2
Anitard is a website where users can search,discover and stream their favourite anime and search and view manga too. Anitard v2 adds streaming to Anitard along with a bunch of new cool features. Now, users can Login through various providers, mark and favourite anime, sort anime search results through various parameters and much more.

This project uses Nextjs, React, MaterialUI icons and Tailwind for the frontend. It uses PostgresSQL, Prisma, Redis, NextAuth,Supabase,Cloudinary and Apollo with GraphQL query fetching on the backend.

# CRUx Round 3
The tasks assigned to me were the following:-
>1)Implement OAuth using Google, Discord, or any other provider of your choice.
>
>2)Provide users a dashboard that will allow them to do the following: Mark an anime as watched, not interested or watching.
>
>3)Allow users to add a profile picture when registering. This image should be provided as part of the request, stored on a cloud service, and then served using a CDN (Cloudinary or similar).
>
>4)Configure your APIs to use Redis to cache page results. Use LRU for cache updates, and set an expiry time for the cached results.
>
>5)Add loading skeletons throughout the app. (For reference look at the Youtube homepage).
>
>### Brownie Points:
>Create pages for individual anime where you’ll be showing cover Image, title, and any other relevant text you feel. Along with the improved filtering now available to the user, they should also be able to sort the filtered list. Allow them to sort on various parameters such as title, release date, and popularity. You may use any cloud based service to achieve the filtering or sorting. 

# Tasks Done:
1)Implemented OAuth through Google, Github and Discord using NextAuth. As of now, only Google provides the best functionality while using the app. The rest will be configured soon.

2)Provided a Dashboard where users can see anime they mark as watching, watched and uninterested. Used the `/pages/api/` in Nextjs for the backend required. The entire backend comprises of PostgresSQL DB hosted on Supabase, Redis, NextJS and Prisma ORM.

3)After logging in, users are redirected to the Dashboard where they can view and change their Profile Picture. The images are hosted on Cloudinary CDN.

4)Configured API's to use Redis powered caching. Set an expiry timer for them, and also set `maxmemory` to `100mb` and `maxmemory-policy` to `volatile-lru` to add LRU caching. Redis-server runs on the port 6379.

5)Used svg's and hooks to add loading skeletons in the app where pages require fetching from an API to provide a better user experience. They are also styled to match the layout of the information the page displays.


### Brownie Points Tasks Done:
1) Created pages for individual anime and manga. Also used GraphQL to query and fetch in these pages using the AniList GraphQL API and Apollo Client. The page shows all relevant details related to the anime, such as score, genres, synopsis and year and season of release, along with a background image and trailer(if it exists).
2) Allowed users to sort through anime they search for in the Homepage. They can sort anime based on Release Year, Score, Popularity and Number of Episodes.

Additionally, a JWT strategy has been used with NextAuth to provide a secure Sign in experience. Currently working on caching user sessions. 

Streaming has been added to the app and users can stream anime with no ads at all. This is done using the Consumet API and using sandboxes in iframes to not allow pop-ups. Users can report anime that are not able to be streamed, and a solution is provided in the form of an `exceptions.ts` file, where anime that use exceptional titles which make sending the request url harder are configured to work.

Search results have been now segregated into anime and manga results. These search results are powered using the MyAnimeList Jikan API.

------------------------------------------------------------------
# Going Ahead:

1)Improving the Project Folder and File structure. Right now, it's a mess!

2)Currently I'm working on making existing backends CRUD. They already feature Create, Read and Update but Delete needs to be worked on. Also planning on making user profiles more modular, so users can change their username and add a bio. Also adding a feature for users to delete their accounts.

3)Another important feature being worked on is an Anitard review system where users can add comments to particular anime and give them a rating (counted separately from AniList and MAL rating). This feature will be added very soon.

4)Considering using TanStack to rewrite fetches performed. Also, considering to rewrite several pieces of code with better logic.

5)Making this project mobile resposive. This website isn't pleasing to they eye at all on mobile devices. This will take quite a while to implement.

6)Learning how to use an implement better Global State Management using Redux and Context API.

7)Adding a custom server to this project, independent of the `/pages/api/` route Nextjs offers. Not sure about this, though.

8)Using RapidAPI to provide users with a better music page. In here, users can search for songs, and possibly stream and download them. Also planning to add a feature where users can be recommended spotify playlists based on their tastes.

9)Using Machine Learning to recommend users anime, based on their Anitard ratings and reviews. Not sure about whether this will ever come to be.

------------------------------------------------------------------
### Hosting
Currently, this project is not hosted anywhere since there are some details I'm not sure of. Once they're clarified, it will be hosted.
However, prior versions of this app are hosted, and can be checked.

First instance of Anitard can be found here, [Anitard](https://anitard.vercel.app/)

Second instance of Anitard, with streaming added. [Anitard](https://anitard.netlify.app/)
