import React, { useState } from 'react';
import axios from 'axios';
import './css/Compatability.css';
function Love() {
  const [sign1, setSign1] = useState('');
  const [sign2, setSign2] = useState('');
  const [result, setResult] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8081/compatibility`, {
        params: { sign1, sign2 },
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="comp">
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
        <br/>
      <form onSubmit={handleFormSubmit}>
        <center>
        <label htmlFor="sign1">Your Sign:</label>
        <select id="sign1" value={sign1} onChange={(e) => setSign1(e.target.value)}>
          <option value="">Select a sign</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Cancer">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
        </select>
        &nbsp;&nbsp;&nbsp;
        <label htmlFor="sign2">Your Patner Sign:</label>
        <select id="sign2" value={sign2} onChange={(e) => setSign2(e.target.value)}>
          <option value="">Select a sign</option>
          <option value="Aries">Aries</option>
          <option value="Taurus">Taurus</option>
          <option value="Gemini">Gemini</option>
          <option value="Cancer">Cancer</option>
          <option value="Leo">Leo</option>
          <option value="Virgo">Virgo</option>
          <option value="Libra">Libra</option>
          <option value="Scorpio">Scorpio</option>
          <option value="Sagittarius">Sagittarius</option>
          <option value="Capricorn">Capricorn</option>
          <option value="Aquarius">Aquarius</option>
          <option value="Pisces">Pisces</option>
        </select>
        </center><br/>
        <center> <button class="b1" type="submit">&nbsp;&nbsp;Submit &nbsp;&nbsp;</button></center>
      </form>
      <hr />
      {result.length > 0 && (
        <div>
          {result.map((data, index) => (
            <div key={index} class="conx" >
              <center><h2>{data.header}</h2></center>
              <div class="ab"><p>{data.text}</p></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Love;