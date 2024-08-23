import React from 'react'
import stars from '../images/stars.png'
import profile from '../images/profile.png'
import buttons from '../images/buttons.svg'

import './Customer.css'

const Customer = () => {
  return (
    <div className="customers">
        <div className="title">
        <h2>What our customer say about this</h2>
        <div className="buttons">
            <img src={buttons} alt="" />
        </div>
        </div>
        <div className="cards">
            <div className="customer-card">
                <img src={stars} alt="" />
                <p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className="profile-text">
                        <h3>John Smith</h3>
                        <p>Founder</p>
                    </div>
                </div>
            </div>
            <div className="customer-card">
                <img src={stars} alt="" />
                <p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className="profile-text">
                        <h3>John Smith</h3>
                        <p>Founder</p>
                    </div>
                </div>
            </div>
            <div className="customer-card">
                <img src={stars} alt="" />
                <p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”</p>
                <div className="profile">
                    <img src={profile} alt="" />
                    <div className="profile-text">
                        <h3>John Smith</h3>
                        <p>Founder</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer