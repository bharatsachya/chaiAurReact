import React, { useEffect, useState } from 'react'
import { useParams,useNavigation } from 'react-router-dom'
import blogService from '../../appwrite/config'

function EditPost() {
    const navigate = useNavigation()
    const {slug} = useParams()
    const [post,setPost]=useState(null)

    useEffect(()=>{
           if(slug){
            blogService.getMethod(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
           }else{
            navigate('/')
           }
    },[slug,navigate])
  return post ? (<>
     <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
     </div>
  </>):null
}

export default EditPost