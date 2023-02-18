import React , { useEffect } from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <section className='about' id='about'>
        <div className='container'>
           <div className='head' data-aos="fade-up">
              <p>About</p>
              <h3>Why Us?</h3>
           </div>
           <div className='head-info'>
            <div className='col-1' data-aos="fade-up">
            <div className='head-image'>
              <img src="https://img.icons8.com/ios-filled/70/null/process.png"/>
            </div>
             <div className='heading'>
               <h4>25+ Test process.</h4>
               </div>
               <div className='description'>
                <p>We will undergoes more than twenty five plus test process before we sell any of apple products. So, the customers don't need to worry about product quality. Also we don't deal with refurbished or cloned products. we are one of the leading trusted sellers in the market more than hundreds of clients. We would love to make your Apple dream come true!</p>
                </div>
             </div>
            <div className='col-1' data-aos="fade-up">
              <div className='head-image'>
               <img src="https://img.icons8.com/ios-filled/70/null/mac-os.png"/>
              </div>
              <div className='heading'>
               <h4>Apple certified products.</h4>
               </div>
               <div className='description'>
                <p>We are only deals with apple certified products only. We don't deal with clone products or refurbs. And also We will undergoes more than twenty five plus test process before we sell any of apple products. So, the customers don't need to worry about product quality. This makes us the leading reseller in the market with more than hundreds of clients.</p>
                </div>
            </div>
            <div className='col-1' data-aos="fade-up">
              <div className='head-image'>
              <img src="https://img.icons8.com/external-victoruler-solid-victoruler/70/null/external-return-box-logistics-victoruler-solid-victoruler.png"/>
              </div>
              <div className='heading'>
               <h4>Replacement policy.</h4>
               </div>
               <div className='description'>
                <p>We give 7 days replacement warranty for any of our products. Customers can return the product if they found any defects in the products. And also We will undergoes more than twenty five plus test process before we sell any of apple products. So, the customers don't need to worry about product quality.</p>
                </div>
            </div>
           </div>
        </div>
    </section>
  )
}


export default About
