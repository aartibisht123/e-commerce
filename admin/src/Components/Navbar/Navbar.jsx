import React from 'react'
import './Navber.css'
import navlog from '../../Assets/nav-logo.svg'
import navProfile from '../../Assets/nav-profile.jpg'
function Navbar() {

  return (
  <div className="navbar">
    <img src={navlog} alt="" className="nav-logo" />
    <img src={navProfile} alt="" className='nav-profile' />
  </div>
  )
}

export default Navbar