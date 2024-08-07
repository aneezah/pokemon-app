import React, { useState } from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo.jpg'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftNav'>
          <img src={Logo} style={{border:"none"}}/>
        </div>
        <div className='rightNav'>
          <Link to= "/pokemon">Home</Link>
          <Link to="/team">Your Pokemon</Link>
        </div>
    </div>
  )
}

export default Navbar;