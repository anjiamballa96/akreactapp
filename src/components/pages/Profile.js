import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        auth.logOut()
        navigate("/")
    }

  return (
    <div>
        <h3>Welcome {auth.user}</h3>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Profile