import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:8081/api/numerology/${number}`);
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
      <center><h1>Numerology Calculator</h1></center><br/>
      <form onSubmit={handleSubmit}>
       <center> <label>
          Enter a number:
          <input type="text" value={number} onChange={(event) => setNumber(event.target.value)} />
        </label>
        </center>
        <center><button type="submit" class="b1">Calculate</button></center>
      </form>
      {result && result.desc && <p>The numerology result for {number} is {result.desc} ({result.number})</p>}
    </div>
  );
}

export default App;