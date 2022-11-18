import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Cat = () => {
  return (
    <div>
        <ul>
            <li><Link to="all">All</Link></li>
            <li><Link to="edit/10/okpar">Edit</Link></li>
            <li><Link to="create">Create</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Cat