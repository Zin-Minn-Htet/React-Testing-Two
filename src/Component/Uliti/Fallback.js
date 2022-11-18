import React from 'react'
import { useNavigate } from 'react-router-dom'

const Fallback = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Pages Not Fond</h1>
        <button onClick={() => {navigate('/')}}>Go Home Page</button>
    </div>
  )
}

export default Fallback