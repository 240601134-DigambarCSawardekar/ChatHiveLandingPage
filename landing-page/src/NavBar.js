import React from 'react';
import logo from './Assets/Logo.png';
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <div className='nav-bar'>
        <div className='NavBar-logo-container'>
           <img src ={logo} alt='' className='NavBar-logo'/>
        </div>
        <div className="NavBar-button-group">
         <button className="NavBar-button-left">Login</button>
          <button className="NavBar-button-right">SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar