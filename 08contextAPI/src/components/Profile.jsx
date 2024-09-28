import React from 'react'
import UserContext from '../context/userContext'
function Profile() {
  const {user} = React.useContext(UserContext)
  if(!user) return <h2>please login</h2>
  return (
    <>
        
        <h2>Profile</h2>
        <p>username: {user.userName}</p>
    </>
  )
}

export default Profile