import React from 'react'
import NavBar from '../../components/header/navBar'
import { Link } from 'react-router-dom'
const AdminHome = () => {
  return (
    <div>
      <NavBar/>
     <Link to="/add-products">Add Products</Link>
       <Link to="/view-products">View Products</Link>
    </div>
  )
}

export default AdminHome
