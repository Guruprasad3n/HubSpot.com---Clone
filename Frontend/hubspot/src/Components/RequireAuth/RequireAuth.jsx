import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation,Navigate } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const location = useLocation()
    const isAuth = useSelector((store) => store.auth.isAuth)
    if(!isAuth){
        return <Navigate to="/login" state={{from:location}}></Navigate>
    }
  return children
}

export default RequireAuth