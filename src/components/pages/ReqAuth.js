import React from 'react'
import { useAuth } from './Auth'
import { Navigate, useLocation } from 'react-router-dom'

const ReqAuth = ({children}) => {
  const location = useLocation()
    const auth = useAuth()
    if(!auth.user){
        return <Navigate to="/login" state={{path : location.pathname}}/>
    }
  return children
}

export default ReqAuth