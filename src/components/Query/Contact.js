import React from 'react';
import '../css/Contact.css';
import axios from "axios";

export default function Contact(){
    const handleContact = (event) => { 
    event.preventDefault(); 
    const data = new FormData(event.currentTarget); 
    console.log({ 
        name: data.get('name'), 
        email: data.get('email'), 
        subject:data.get('subject'),
        message:data.get('message'),

    }); 
axios.post('http://localhost:8081/cot',{ 
    name: data.get('name'), 
    email: data.get('email'), 
    subject:data.get('subject'),
    message:data.get('message'),

 
}).then((response)=>{ 
  console.log(response.data);
  window.location.href = '/Home'
 })
}
    return(
    <div className='Contact'>
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
        
        <div class="formbold-main-wrapper">
  <div class="formbold-form-wrapper">
    <h2 style={{ textAlign: 'center' }}>Contact Us</h2>
    <form onSubmit={handleContact} method="post" >
      <div class="formbold-mb-5">
        <label for="name" class="formbold-form-label"> Full Name </label>
        <input type="text" name="name" id="name" placeholder="Full Name" class="formbold-form-input"/>
      </div>

      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label"> Email Address </label>
        <input type="email" name="email" id="email" placeholder="Enter your email" class="formbold-form-input"/>
      </div>

      <div class="formbold-mb-5">
        <label for="subject" class="formbold-form-label"> Subject </label>
        <input type="text" name="subject" id="subject" placeholder="Enter your subject" class="formbold-form-input"/>
      </div>

      <div class="formbold-mb-5">
        <label for="message" class="formbold-form-label"> Message </label>
        <textarea rows="6" name="message" id="message" placeholder="Type your message" class="formbold-form-input" ></textarea>
      </div>

      <div>
        <button class="formbold-btn"  >Submit</button>
      </div>
    </form>
  </div>
</div>
<style></style>
    </div>
    );
}
