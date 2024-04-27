import React, { useState } from 'react';
import axios from 'axios';
import './css/ZodiacChar.css'

const SignDropdown = () => {
  const [sign, setSign] = useState('');
  const [horoscope, setHoroscope] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8081/horoscope/${sign}`);
      setHoroscope(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="charpage">
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
      <form onSubmit={handleSubmit}>
        <center>
            <h3>
        <label>
         <br /><br />  Choose your sign: &nbsp;
          <select value={sign} onChange={(e) => setSign(e.target.value)}>
            <option value="">Select a sign</option>
            <option value="aries">Aries</option>
            <option value="taurus">Taurus</option>
            <option value="gemini">Gemini</option>
            <option value="cancer">Cancer</option>
            <option value="leo">Leo</option>
            <option value="virgo">Virgo</option>
            <option value="libra">Libra</option>
            <option value="scorpio">Scorpio</option>
            <option value="sagittarius">Sagittarius</option>
            <option value="capricorn">Capricorn</option>
            <option value="aquarius">Aquarius</option>
            <option value="pisces">Pisces</option>
          </select>
        </label><br />
        </h3>
        <button class="b1" type="submit">&nbsp;&nbsp;Submit &nbsp;&nbsp;</button>
        </center>
      </form>
      {horoscope && (
        <div>
          <hr />
          <center><h2>{horoscope.name}</h2></center>
          <div class="conx">
          <center><p>Range of DOB:&nbsp;{horoscope.date_range}</p></center>
          <p>Symbol: {horoscope.symbol}</p> <br/>
          <div class="ab"><p>{horoscope.about}</p></div><br/>
          <center><h3>Strengths</h3></center>
          <div class="st"><center><p>{horoscope.strengths}</p></center></div><br/>
          <center><h3>Weaknesses</h3></center>
          <div class="st"><center><p>{horoscope.weaknesses}</p></center></div><br/>
          <center><h3>Love</h3></center>
          <div class="ab"><p>{horoscope.love}</p></div><br/>
          <center><h3>Relationships</h3></center>
          <div class="ab"><p>{horoscope.relationship}</p></div><br/>
          <center><h3>Friendship</h3></center>
          <div class="ab"><p>{horoscope.nature}</p></div><br/>
          <center><h3>Career</h3></center>
          <div class="ab"><p>{horoscope.career}</p></div><br/>
          <center><h3>Health</h3></center>
          <div class="ab"><p>{horoscope.health}</p></div><br/>
          <center><h3>Compatibility</h3></center>
          <div class="st"><center><p>{horoscope.compatibility}</p></center></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignDropdown;