import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { HiOutlineMenu } from 'react-icons/hi'


const Navbar = () => {
  return (
    <div className='nav-container'>
            <Link to='/' className='logo flex'>
                <div className='nav-logo'></div>
                <h1>OUTKOS</h1>
            </Link>


            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/AboutUs'>About us</Link>
                <Link to='/'>Princing</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contact us</Link>
            </div>


            <div className='nav-auth'>
                <button id='login'>Login</button>
                <button id='register'>Register</button>
            </div>

            <div className='hamburger flex'>
                <HiOutlineMenu/>
            </div>
    </div>
  )
}

export default Navbar