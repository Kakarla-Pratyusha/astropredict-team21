//&nbsp; is used to give space
import axios from 'axios';
import '../css/Profile.css';
import React, { useState } from 'react';
import Login from './Login';

export default function Profile() {


    const [result, setResult]=useState(null);
    const handleSubmit = (event) => { 
        event.preventDefault(); 
        const data = new FormData(event.currentTarget); 
        console.log({ 
            name: data.get('name'), 
            surname: data.get('surname'),
            Phn: data.get('Phn'),
            dob: data.get('dob'),
            sign: data.get('sign'),
            state: data.get('state'),
            email: data.get('email'),
            country: data.get('country'),
            gender: data.get('gender'),
    
        }); 
    axios.post("http://localhost:8081/profile",{ 
        name: data.get('name'), 
        surname: data.get('surname'),
        Phn: data.get('Phn'),
        dob: data.get('dob'),
        sign: data.get('sign'),
        state: data.get('state'),
        email: data.get('email'),
        country: data.get('country'),
        gender: data.get('gender'),
     
    }).then((response)=>{ 
      console.log(response.data); 
      setResult(response.data)
      if (response.data==="Email already exists" || response.data==="Phone number already exists"){
        alert(response.data);
      }
     })
    }
if(result===null || result==="Email already exists" || result ==="Phone number already exists"){
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"/>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <form onSubmit={handleSubmit}>
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
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" name='name'/></div>
                    <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control"  name='surname' placeholder="surname"/></div>
                </div>
                <div class="row mt-3">
                <div class="col-md-12"><label class="labels">Age</label><input type="number" class="form-control" placeholder="Age" name='age' /></div>
                    <div class="col-md-12"><label class="labels">Mobile Number</label><input type="number" class="form-control" placeholder="enter phone number" name='Phn' /></div>
                    <div class="col-md-12"><label class="labels">Date of Birth</label><input type="date" class="form-control" placeholder="Date of Birth" name='dob' /></div>
                    <div class="col-md-12"><label class="labels">Zodiac Sign</label><input type="text" class="form-control" placeholder="Zodiac Sign" name='sign' /></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter state" name='state' /></div>                   
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" name='email' /></div> 
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" name='country' /></div>
                    <div class="col-md-6"><label class="labels">Gender(Male/Female/Other)</label><input type="text" class="form-control"  name='gender' placeholder="gender"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>
</div>
            </form>

        </div>
      );
}
else{
    return(
        <div>
          <Login/>
        </div>
      );
}
      
}


