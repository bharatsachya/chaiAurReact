import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { login,logout } from '../../store/authSlice'
import { PostCard,Container } from '../../components'
import blogService from '../../appwrite/config'
function Home() {
  const [Loading, setLoading] = React.useState(true)
  const [posts,Setposts] = useState([]);

  useEffect(()=>{
       blogService.listMethod().then((posts)=>{
           if(posts){
            Setposts(posts.documents)
           }
       }
      )
  },[])
   if(posts.length === 0){
    return (
      <>
          <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
      </>
    )
   }
   return (
    <>
        <div>
            <Container>
               <div className='flex flex-wrap'>
                   {posts.map((post)=>{
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post}/>
                    </div>
                   })}
                </div>  
            </Container>  
        </div>
    </>
   )
}

export default Home