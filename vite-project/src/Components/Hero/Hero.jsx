import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className='hero-text'>
           <h1>We Ensure better education for a better world</h1>
           <p>Education is fundamental for individual and societal progress, providing knowledge, skills, and critical thinking abilities. It empowers individuals to reach their full potential, fostering personal growth and contributing to a more informed and engaged citizenry.</p>
           <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
