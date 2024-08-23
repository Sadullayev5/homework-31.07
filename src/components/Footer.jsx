import { AiFillGithub } from "react-icons/ai"; 
import { BsInstagram } from "react-icons/bs"; 
import { CgFacebook } from "react-icons/cg"; 
import { BsTwitter } from "react-icons/bs"; 
import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="header">
        <img src={logo} alt="" />
        <ul>
          <li><Link className="footer-item">About</Link></li>
          <li><Link className="footer-item">Service</Link></li>
          <li><Link className="footer-item">Blog</Link></li>
          <li><Link className="footer-item">Contact Us</Link></li>
        </ul>
        <div className="socials">
          <Link><BsTwitter /></Link>
          <Link><CgFacebook /></Link>
          <Link><BsInstagram /></Link>
          <Link><AiFillGithub /></Link>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright © 2022. All rights reserved by </p>
        <Link>Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default Footer