import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /></h3>
          <p>Whether you’re curious about our admissions process, want to learn more about our academic programs,
             or simply wish to explore what campus life is like at our institute, we’re here to help. 
             Our dedicated team is ready to assist you with any queries you may have. Reach out to us we’d love to 
             connect with you and guide you every step of the way.</p>
          <ul>
            <li><img src={mail_icon} alt="" />Contact@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 9876543210</li>
            <li><img src={location_icon} alt="" />Bengaluru, Karnataka, India</li>
          </ul>
        </div>
        <div className="contact-col">
            <form>
              <label>Name: </label>
              <input type="text" name='name' placeholder='Enter your name..' required/>

              <label>Phone Number</label>
              <input type="text" name='phone' placeholder='Enter your number..' required/>

              <label>Write your message</label>
              <input type="text" name='message' rows='6' placeholder='Enter your meassage..' required/>

              <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
              <span></span>
            </form>
        </div>
    </div>
  )
}

export default Contact
