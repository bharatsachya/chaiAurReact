import React, { useEffect, useState } from 'react'
import { PostCard,Container } from '../../components'
import blogService from '../../appwrite/config'
function AllPosts() {
    const [posts,Setposts] = useState([]);
    useEffect(()=>{
    },[])
    blogService.listMethod().then((posts)=>
    {
        if(posts){
            Setposts(posts.documents)
        }
    })
  return (
    <div>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                   <div key={post.$id} className='p-2 w-1/4'>
                      <PostCard post={post} />
                   </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts