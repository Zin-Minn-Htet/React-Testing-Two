import React from 'react'
import { Navigate } from 'react-router-dom';
import { useLoginContext } from './LoginContex'

const RouteGuard = ({children}) => {
  const {logged,setLogged} = useLoginContext();
  if(logged) return children
  else return <Navigate to='/login' />
}

export default RouteGuard