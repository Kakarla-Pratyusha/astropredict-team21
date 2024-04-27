import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function Tarot() {
  const [tarotCards, setTarotCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8081/tarotcards');
        setTarotCards(response.data.res);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
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
    <div className="card-container">
      {tarotCards.slice(0, 3).map((data, index) => (
        <Card key={index} name={data.name} desc={data.desc} />
      ))}
    </div>
    </div>
  );
}

export default Tarot;