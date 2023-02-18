import React , { useEffect } from 'react'
import './Product.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Product = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
  <>
    <section className='product' id='product'>
        <div className='container'>
        <div className='head-product' data-aos="fade-up">
              <p>Products</p>
              <h3>Our Products.</h3>
           </div>
          <div className='product-info'>
          <div className='col-2' data-aos="fade-up">
            <div className='product-image'>
            <img src="https://img.icons8.com/pastel-glyph/64/null/iphone-x--v1.png"/>
            </div>
               <h4>Apple iPhones.</h4>
                <p>The iPhone is a GSM based Smartphone that was introduced by apple around the middle of 2007. Over twenty million units of the apple iPhone have been sold to date and more are being sold. The iPhone offers features such as a touch-sensitive screen based interface, a built-in portable media player ,The most essential factor in this regard is the fact that although the apple iPhone became extremely popular.</p>
            </div>
            <div className='col-2' data-aos="fade-up">
            <div className='product-image'>
            <img src="https://img.icons8.com/ios/50/null/macbook.png"/>
            </div>
               <h4>MacBooks</h4>
                <p>Apple MacBook pro is famous for its environmental friendliness due to the use of aluminum and glass during manufacture. Some people term it as the greenest line of products. It has a great proficient power supply that cuts down the amount washed out, transferring power from wall to computer thus reducing greenhouse gases and power bills.</p>
            </div>
            <div className='col-2' data-aos="fade-up">
            <div className='product-image'>
            <img src="https://img.icons8.com/ios/50/null/earbud-headphones.png"/>
            </div>
               <h4>Air Pods.</h4>
                <p>“AirPods delivered a magical wireless experience and have become one of the most beloved products we’ve ever made. They connect easily with all of your devices, and provide crystal clear sound and intuitive, innovative control of your music and audio,” said Phil Schiller, Apple’s senior vice president of Worldwide Marketing. “The world’s best wireless headphones just got even better with the new AirPods.</p>
            </div>
          </div>
        </div>
    </section>
  </>
  )
}

export default Product
