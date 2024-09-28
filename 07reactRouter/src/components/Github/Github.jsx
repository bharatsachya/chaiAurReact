import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github() {
    const data = useLoaderData()
  return (<>
      <div className='flex bg-green-500 text-white p-2 items-center'>Github Following: {data.following}</div>
    
       <img src={data.avatar_url} alt="github pic"  />
  </>
   
)
}

export const GithubInfo =async()=>{
   const response = await fetch('https://api.github.com/users/bharatsachya')
   return response.json()
}
