import React from 'react'
import UserContext from '../context/userContext'
function Login() {
 const [userName, setUserName] = React.useState('')
 const [password, setPassword] = React.useState('')
   const {setUser} = React.useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
    setUser({password,userName})
   }
  return (
    <>
       <h2>Login</h2>
       <input type="text" placeholder='username' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
       <input type="oassword" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <button onClick={handleSubmit}></button>
    </>
  )
}

export default Login