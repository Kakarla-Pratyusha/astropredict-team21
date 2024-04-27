import axios from 'axios';
import Home from "../Home";
import { useState } from 'react';
import '../css/Login.css';

function Login({ store }) {
  const [result, setResult] = useState(null);
  const [un, setUn] = useState(null);

  function handleForm(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setUn(data.get("un"));
    const pw = data.get("pw");

    axios.get('http://localhost:8081/check', {
      params: {
        un: data.get("un"),
        pw: data.get("pw"),
      }
    }).then((response) => {
      if (response.data === 'pass') {
        // Successful login, redirect to Home
        setResult('pass');
      } else {
        // Failed login, display error
        setResult('fail');
      }
    }).catch((error) => {
      console.error(error);
      setResult('error');
    });
  }

  if (result === null || result === 'fail') {
    return (
      <div className='Login'>
        <button className="home-button" onClick={() => window.location.href = '/'}>Home</button>
        <form id='container' method="get" onSubmit={handleForm}>
          <h3 id='Heading'>Sign In</h3>
          <label>Username:</label>
          <div className='row'>
            <div className='icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='100%'>
                <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
              </svg>
            </div>
            <input type='text' name='un' placeholder='Username' required />
          </div>
          <label>Password:</label>
          <div className='row'>
            <div className='icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='30px'>
                <path d='M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z' />
              </svg>
            </div>
            <input type='password' name='pw' placeholder='Password' required />
          </div>
          <button type='submit'>Sign In</button>
          <a>Don't have account?</a>
          <a href='/reg' className=''>Signup</a>
        </form>
      </div>
    );
  } else if (result === 'pass') {
    // Redirect to Home
    return <Home Username={un} store={store} />;
  } else {
    // Error occurred
    return <div>Error occurred. Please try again later.</div>;
  }
}

export default Login;
