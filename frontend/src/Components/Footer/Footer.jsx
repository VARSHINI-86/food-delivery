import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Browse delicious dishes, read reviews, and place your order in seconds.
                    Review your order, select your delivery option, and get ready to enjoy!..
                    Your one-stop destination for mouth-watering meals delivered straight to your door. Fast, fresh, and hassle-free.
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+91 9876543210</li>
                <li>contact@tomato.com</li>
              </ul>
            </div>            
        </div>
      <hr />
      <p className='footer-copyright'>copyright 2025 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
