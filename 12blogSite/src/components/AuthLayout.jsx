import React from 'react'
import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function AuthLayout({children,authentication=true}) {
    const authStatus = useSelector(state=>state.auth.status)
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    useEffect(()=>{ 
        if(authentication && authStatus !== authentication){
            navigate('/login')
        }
        else if (authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoading(false)
    }  ,[authStatus,authentication,children])
  return loading ? <div>Loading...</div> : <>{children}</>
}

export default AuthLayout