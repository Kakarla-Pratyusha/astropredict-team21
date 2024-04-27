//&nbsp; is used to give space
import axios from 'axios';
import '../css/Profile.css';
import React, { useState, useEffect } from 'react';



export default function Display() {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8081/find')
            .then(res => {
                console.log(res.data); // prints the response data to the console
                setUserData(res.data);
            })
            .catch(err => console.log(err));
    }, []);
   
  
    return (
        <div className='display'>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
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
        <form>
        <div>
        <div class="container rounded bg-white mt-5 mb-5">
<div class="row">
    <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">Astrology</span><span class="text-black-50">ABCD@mail.com</span><span> </span></div>
    </div>
    <div class="col-md-5 border-right">
        <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
                <div class="col-md-6"><label class="labels"><h5>Name:</h5></label>&nbsp;&nbsp;{userData.name}</div>
                <div class="col-md-6"><label class="labels"><h5>Surname:</h5></label>&nbsp;&nbsp;{userData.surname}</div>
            </div>
            <div class="row mt-3">
            <div class="col-md-12"><label class="labels"><h5>Age:</h5></label>&nbsp;&nbsp;{userData.age}</div>
                <div class="col-md-12"><label class="labels"><h5>Mobile Number:</h5></label>&nbsp;&nbsp;{userData.Phn}</div>
                <div class="col-md-12"><label class="labels"><h5>Date of Birth:</h5></label>&nbsp;&nbsp;{userData.dob}</div>
                <div class="col-md-12"><label class="labels"><h5>Zodiac Sign:</h5></label>&nbsp;&nbsp;{userData.sign}</div>
                <div class="col-md-12"><label class="labels"><h5>State:</h5></label>&nbsp;&nbsp;{userData.state}</div>                   
                <div class="col-md-12"><label class="labels"><h5>Email ID:</h5></label>&nbsp;&nbsp;{userData.email}</div> 
            </div>
            <div class="row mt-3">
                <div class="col-md-6"><label class="labels"><h5>Country:</h5></label>&nbsp;&nbsp;{userData.country}</div>
                <div class="col-md-6"><label class="labels"><h5>Gender(Male/Female/Other):</h5></label>{userData.gender}</div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
        </form>

    </div>
      );
}     



