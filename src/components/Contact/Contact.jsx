import React , { useEffect } from 'react'
import './Contact.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
   useEffect(() => {
      Aos.init({duration: 2000});
    }, [])
  return (
     <section className='contact' id='contact'>
         <div className='container'>
         <div className='head-collection' data-aos="fade-up">
              <p>Contact</p>
              <h3>Connect with Us.</h3>
           </div>
           <div className='contact-content'>
              <div className='col-1'>
                 <div className='mobile'>
                    <div className='icon' data-aos="fade-up">
                    <i className="fa-solid fa-phone fa-2x"></i>
                    </div>
                    <div className='contact-info' data-aos="fade-up">
                       <h3>Phone</h3>
                       <h5>+91 8589897764</h5>
                       <h5>+91 8289828129</h5>
                    </div>
                 </div>
                 <div className='mobile'>
                    <div className='icon' data-aos="fade-up">
                    <i className="fa-solid fa-envelope fa-2x"></i>
                    </div>
                    <div className='contact-info' data-aos="fade-up">
                      <h3>E-Mail</h3>
                       <h5>iphoenistore@protonmail.com</h5>
                    </div>
                 </div>
                 <div className='mobile'>
                    <div className='icon' data-aos="fade-up">
                    <i className="fa-solid fa-location-dot fa-2x"></i>
                    </div>
                    <div className='contact-info' data-aos="fade-up">
                      <h3>Address</h3>
                       <h5>Near Hilite Mall.<br/>Palazhi-Pala P.O G.A College<br/>PIN : 673014.</h5>
                    </div>
                 </div>
                 <div className='socialmedia' data-aos="fade-up">
                  <div className='instagram'>
                     <a href='https://www.instagram.com/iphoenix.store/'><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  <div className='facebook'>
                     <a href='https://www.facebook.com/StoreiPhoenix/'><i className="fa-brands fa-facebook"></i></a>
                 </div>
                 </div>
              </div>
              <div className='col-2'>
                <div className='contact-form' data-aos="fade-up">
                    <form>
                      <h5>Name</h5>
                       <input type='text' placeholder='name' required/>
                       <br/>
                       <h5>E-mail</h5>
                       <input type='email' placeholder='Email' required/>
                       <br/>
                       <h5>Phone number</h5>
                       <input type='tel' placeholder='Phone number' required/>
                       <br/>
                       <h5>Message</h5>
                       <textarea placeholder='Message' cols='30' rows='30'></textarea>
                       <br/>
                       <button className='btn-submit'>Submit</button>
                    </form>
                </div>
              </div>
           </div>
         </div>
     </section>
  )
}

export default Contact
