import React from 'react'
import { useParams } from 'react-router-dom'

const Editcat = () => {
  const {id,name} = useParams();
  return (
    <div>
        <h1>Edit Category {id} {name} </h1>
    </div>
  )
}

export default Editcat