import React , { useEffect } from 'react'
import './Collection.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Collection = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <>
      <section className='collection' id='collection'>
           <div className='container'>
               <div className='collection-head' data-aos="fade-up">
                   <p>Collection</p>
                   <h3>Latest arrivals.</h3>
                   <div className='photos'>
                     <div className='photo-1' data-aos="fade-up">
                        <img src='https://images.unsplash.com/photo-1609692814857-d0eaed5a148c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                        <img src='https://images.unsplash.com/photo-1644496037556-7ed1153046d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                        <img src='https://images.unsplash.com/photo-1605457212772-7e5afd088069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                     </div>
                     <div className='photo-1' data-aos="fade-up">
                         <img src='https://images.unsplash.com/photo-1640551497504-ec05b9e50b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                         <img src='https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9vayUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                     </div>
                     <div className='photo-1' data-aos="fade-up">
                         <img src='https://images.unsplash.com/photo-1645191424218-3a98a3cea1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWlyJTIwcG9kcyUyMHByb2R1Y3QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
                         <img src='https://images.unsplash.com/photo-1650025104987-20df3f016bc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGUlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                         <img src='https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGxlJTIwcHJvZHVjdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                    </div>
                   </div>
               </div>
           </div>
           <div className='social-media' data-aos="zoom-in">
             <div className='btn-socialmedia'>
                <a href='https://www.instagram.com/iphoenix.store/'><i className="fa-brands fa-instagram"></i> Checkout our Instagram for new updates</a>
             </div>
             </div>
      </section>
    </>
  )
}

export default Collection
