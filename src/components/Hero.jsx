import { MdOutlineDeliveryDining } from "react-icons/md"; 
import { AiFillClockCircle } from "react-icons/ai"; 
import { AiFillStar } from "react-icons/ai";  
import React from 'react'
import './Hero.css'
import delivery from '../images/delivery.svg'
import { Link } from 'react-router-dom'
import play from '../images/play.svg'
import hero from '../images/hero-img.png'
import heroBurger from '../images/hero-burger.png'
import Burger from '../images/burger.png'
import likeBtn from '../images/likeBtn.svg'
import appStore from '../images/appstore.png'
import playmarket from '../images/playmarket.png'
import iphone from '../images/iphone.png'

const Hero = () => {
  return (
    <div className="container">
        <div className="hero">
            <div className="hero-content">
                <img src={delivery} alt="" />
                <h1>Fastest <span>Delivery</span> & Esay <span>Pickup</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
                <div className="hero-content-links">
                    <Link>Order Now</Link>
                    <Link><span className='play'><img  src={play} alt="" /></span>Watch video</Link>
                </div>
            </div>
            <div className="hero-images">
                <img src={hero} alt="" />
                <img className='hero-burger' src={heroBurger} alt="" />
            </div>
        </div>
        <div className="menu">
            <h2>Special Menu for you</h2>
            <p className="menu-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus 
            nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>
            <div className="card-wrapper">
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
                <div className="card">
                    <img className="like" src={likeBtn} alt="" />
                    <img src={Burger} alt="" />
                    <h3>McSpicy Special <span><AiFillStar /></span> 5.0</h3>
                    <p><span><MdOutlineDeliveryDining /></span>Free Delivery <span><AiFillClockCircle /></span> 25-30 min</p>
                    <Link className='card-btn'>Order Now</Link>
                </div>
            </div>
        </div>
        <div className="mobile-app">
            <div className="mobile-app-content">
                <h2>Download our Mobile App</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.</p>
                <div className="mobile-app-content-links">
                    <Link><img src={appStore} alt="" /></Link>
                    <Link><img src={playmarket} alt="" /></Link>
                </div>
            </div>
            <img src={iphone} alt="" />
        </div>
    </div>
  )
}

export default Hero