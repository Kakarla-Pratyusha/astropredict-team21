import React, { useState } from 'react';
import '../css/Register.css';
import axios from "axios";
import Profile from "../User/Profile";


export default function Register(){
  const [result, setResult]=useState(null);
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    const data = new FormData(event.currentTarget); 
    console.log({ 
      username: data.get('username'), 
      email: data.get('email'), 
      password:data.get('password'), 

    }); 
axios.post("http://localhost:8081/",{ 
      username: data.get('username'), 
      email: data.get('email'), 
      password:data.get('password')
 
}).then((response)=>{ 
  console.log(response.data); 
  setResult(response.data)
  if (response.data==="Username already exists in the database" || response.data==="Email already exists in the database"){
    alert("Credentials already exits");
  }
 })
}
if(result===null || result==="Username already exists in the database" || result==="Email already exists in the database"){
  return (
    <div className='Register'>
      <button className="home-button" onClick={() => window.location.href = '/Home'}>Home</button>
      <form id='container' onSubmit={handleSubmit}>
        <h3 id='Heading'>Register</h3>
        <label>Username:</label>
        <div className='row'>
          <div className='icon'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='100%'>
              <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
            </svg>
          </div>
          <input type='text' name='username'  placeholder='Username'  required />
        </div>
        <label>Email:</label>
        <div className='row'>
          <div className='icon'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='30px'>
              <path d='M437.016 75.984H74.984C50.632 75.984 30 96.616 30 121.016v269.969c0 24.352 20.632 44.984 44.984 44.984h362.031c24.352 0 44.969-20.632 44.969-44.984V121.016c0-24.4-20.617-45.032-44.969-45.032zM256 296.969l-97.016-72.984h194.031L256 296.969zm111.016-127.969H144V153.5l111.016 83.5L367.016 153.5v15.5z'/>
            </svg>
          </div>
          <input  type='email'  name='email'  placeholder='Email' required />
        </div>
        <label>Password:</label>
        <div className='row'>
      <div className='icon'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='30px'>
          <path d='M568 240H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM568 136H8C3.6 136 0 139.6 0 144v16c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM568 344H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM288 432c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48zm264-224v-48c0-70.6-57.4-128-128-128H128C57.4 32 0 89.4 0 160v48c0 35.3 28.7 64 64 64v128c0 70.6 57.4 128 128 128h192c70.6 0 128-57.4 128-128V224c35.3 0 64-28.7 64-64zm-88 0H288c-53 0-96 43-96 96s43 96 96 96h176c53 0 96-43 96-96s-43-96-96-96z' />
        </svg>
      </div>
      <input  type='password'  name='password' placeholder='Password'  required />
    </div>
    <button type='submit'>Register</button>
    <a href='/Login' >&nbsp;&nbsp;already have account?</a>
        <a href='/Login' >&nbsp;&nbsp;Login</a>
  </form>
</div>
);
}
else{
  return(
    <div>
      <Profile/>
    </div>
  );
}

  
}

