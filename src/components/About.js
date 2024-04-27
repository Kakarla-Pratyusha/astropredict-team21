import React from 'react';
import MyNavbar from './Navbar';
import './css/About.css';

const About = () => {
  return (
    <div>
      <section>
       <div class="b">
      
        <div class="navigation">
            
                
            <h2 class="logo">StarLines</h2>
              <ul>
                 
                <li><a href="/Home">Home</a></li>
                <li><a href='/StarLines'>About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/display">Profile</a></li>
                <li><a href="/Login">Logout</a></li>
              </ul>
        </div>

        <div className='About'>
          <h1>About Us</h1>

          <p>We are a team of astrology enthusiasts who are passionate about bringing the ancient wisdom of astrology to the modern world. Our goal is to provide accurate and insightful horoscopes, birth chart interpretations, and other astrological services to help our clients gain a deeper understanding of themselves and the world around them.

          Our team consists of experienced astrologers who are dedicated to helping people unlock the secrets of the universe through astrology. We use a variety of astrological techniques and tools to provide our clients with the most accurate and comprehensive information possible.
          
          Whether you're looking for guidance in your career, relationships, or personal growth, we're here to help. Contact us today to schedule a consultation or learn more about our services.</p>
        </div>
       </div>
      </section>
    </div>
  );
}

export default About;
