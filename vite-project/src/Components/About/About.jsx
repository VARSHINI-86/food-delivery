import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
            {
              setPlayState(true)
            }}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders today</h2>
            <p>A university is an institution of higher (tertiary) education and research that awards academic degrees in various subjects.
             Universities offer a wide range of disciplines, including sciences, humanities, and professional fields. 
             They play a crucial role in research, scholarship, and the advancement of knowledge. </p>
            <p>A university is an institution of higher (tertiary) education and research that awards academic degrees in various subjects.
             Universities offer a wide range of disciplines, including sciences, humanities, and professional fields. 
             They play a crucial role in research, scholarship, and the advancement of knowledge.</p>
             <p>A university is an institution of higher (tertiary) education and research that awards academic degrees in various subjects.
             Universities offer a wide range of disciplines, including sciences, humanities, and professional fields. 
             They play a crucial role in research, scholarship, and the advancement of knowledge.</p>
        </div>      
    </div>
  )
}

export default About
