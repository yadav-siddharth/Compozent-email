import React from 'react';
import Form from '../Form/Form';
import {FaSearchLocation,FaPhoneAlt,FaMailBulk} from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <div className='left-section'>
        <div className='contact'>
          <h2>Contact information</h2>
          <p>To request a quote or want to meet up for coffee,
              Contact us directly or fill out the form and we will
              get back to you promptly.
          </p>
        </div>
        <div className='company-info'>
      <div className="location">
            
              <p>
              <FaSearchLocation size={20} style={{ color: "#ffff", marginRight: "2rem" }} />
               Chembur, Mumbai - 71 
              </p>
           
          </div>

          <div className="phone">
            <p>
              <FaPhoneAlt
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />
              91+ 9137948726 
            </p>
          </div>

          <div className="email">
            <p>
              <FaMailBulk
                size={20}
                style={{ color: "#ffff", marginRight: "2rem" }}
              />
              siddharth.yadav0913@gmail.com
            </p>
          </div>
      </div> 
      </div>
      <div className='ball'></div>
      </div>

      <div className='hero-right'>
        <Form/>
      </div>


    </div>
  )
}

export default Hero
