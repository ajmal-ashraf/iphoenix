import React, { useEffect } from 'react'
import './Hero.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className='hero' id='home'>
           <div className='hero-info container' data-aos="fade-up">
              <h1><span>Welcome to</span><br/>
                 "The world of Apple products<br/> and much more"</h1>
                 <p>Dealing with both brand new and pre owned Apple products.</p>
              <a href='#contact' className='cta-btn'>Contact</a>
           </div>
    </div>
  )
}

export default Hero
