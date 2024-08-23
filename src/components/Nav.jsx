import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import bag from '../images/bag-2.svg'
import loginImg from '../images/login.svg'
import search from '../images/search-normal.svg'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
        <img src={logo} alt="" />
        <ul>
            <li><Link className='list-item'>Home</Link></li>
            <li><Link className='list-item'>Service</Link></li>
            <li><Link className='list-item'>Menu</Link></li>
            <li><Link className='list-item'>Help</Link></li>
        </ul>
        <div className="nav-btns">
            <Link><img src={search} alt="" /></Link>
            <Link><img src={bag} alt="" /></Link>
            <Link className='login-btn'><img src={loginImg} alt="" />Login</Link>
        </div>
    </nav>
  )
}

export default Nav