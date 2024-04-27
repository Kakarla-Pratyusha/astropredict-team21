import React, { useState,useEffect } from 'react';
import MyNavbar from '../components/Navbar';
import '../components/css/Home.css';
import axios from "axios";

const Home = (props) => {
  function Check(event){
    alert("Are you sure ?")
    event.preventDefault();
    
    axios.get('http://localhost:8081/logout').then((response)=>{
      console.log(response.data)
      if (response.data === 'Logout successful') {
        window.location.href = '/Login'; // redirect to /Login page
      }
    })
  }
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get('http://localhost:8081/data').then((response)=>{
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <div>

      <section>
        <div class="banner">
          <div class="navigation">
            
          
          <h2 class="logo">StarLines</h2>
            <ul>
               
              <li><a href="/Home">Home</a></li>
              <li><a href='/StarLines'>About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/display">Profile</a></li>
              <li><a href="/Login" onClick={Check}>Logout</a></li>
            </ul>
          </div>
          <div class="content">
             <p>Welcome {data}</p>
             <h1>Star Lines</h1>
             <p>Destiny Made by the Stars</p>
          </div>
        </div>
      </section>
     

      <section class="ser" id="ser">
        <h1 align="center">Our Services</h1>
        
       
<div>
<div class="flex-container">

<div class="flex-child magenta">
<div class="cardhome">
<div class="cardhome-details">
  <p class="text-title">Find Zodiac</p>
  <p class="text-body">Know your zodiac sign </p>
</div>
<button class="cardhome-button"><a href='/zodiac'>More info</a></button>
</div>
</div>

<div class="flex-child green">
<div class="cardhome">
<div class="cardhome-details">
  <p class="text-title">Zodiac Characterstics</p>
  <p class="text-body">Know your Characterstics</p>
</div>
<button class="cardhome-button" ><a href="/char">More info</a></button>
</div>
</div>

</div>
<br></br>
<div class="flex-container">

  <div class="flex-child magenta">
  <div class="cardhome">
  <div class="cardhome-details">
    <p class="text-title"> Daily Horoscope </p>
    <p class="text-body">Know Todays Horoscope</p>
  </div>
  <button class="cardhome-button"><a href="/tarot">More info</a></button>
</div>
  </div>
  
  {/* <div class="flex-child green">
  <div class="cardhome">
  <div class="cardhome-details">
    <p class="text-title">Numerology</p>
    <p class="text-body">Here are the details of the cardhome</p>
  </div>
  <button class="cardhome-button"><a href="/num">More info</a></button>
</div>
  </div> */}



  
</div>
<br/>
<div class="flex-container">

  <div class="flex-child magenta">
  <div class="cardhome">
  <div class="cardhome-details">
    <p class="text-title"> Marriage Compatability </p>
    <p class="text-body">See your compatibility with your desired sign</p>
  </div>
  <button class="cardhome-button"><a href='/Love'>More info</a></button>
</div>
  </div>
  
 
 
</div>

</div>
        

      
      
        

</section>

      

    </div>
  );
}

export default Home;



