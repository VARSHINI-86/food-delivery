import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VedioPlayer from './Components/VedioPlayer/VedioPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);
  
  return (
    <div>
       <Navbar />
       <Hero />
       <div className='container'>

           <Title subTitle='About Us' title='Know about our Institute'/>
           <About setPlayState={setPlayState}/>

           <Title subTitle='Our Program' title='What we Offer'/>
           <Program />

           <Title subTitle='Gallery' title='Campus Photos'/>
           <Campus />

           <Title subTitle='Testimonials' title='What Students Say'/>
           <Testimonials />

          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact />

          <Footer />

       </div>       
         <VedioPlayer playState={playState} setPlayState={setPlayState}/>                   
    </div>
  )
}

export default App
