import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [userData1, setUserData1] = useState([]);
    const [userData2, setUserData2] = useState([]);
    const [userData3, setUserData3] = useState([]);
    const [userData4, setUserData4] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8081/adminreg')
        .then(res => {
          console.log(res.data);
          setUserData1(res.data);
        })
        .catch(err => console.log(err));
  
      axios.get('http://localhost:8081/admincont')
        .then(res => {
          console.log(res.data);
          setUserData2(res.data);
        })
        .catch(err => console.log(err));
  
      axios.get('http://localhost:8081/adminprof')
        .then(res => {
          console.log(res.data);
          se
          tUserData3(res.data);
        })
        .catch(err => console.log(err));
  
      axios.get('http://localhost:8081/adminstat')
        .then(res => {
          console.log(res.data);
          setUserData4(res.data);
        })
        .catch(err => console.log(err));
    }, []);
  
    return (
      <div>
        <h2>Register data:</h2>
        <ul>
          {userData1.map(item => (
            <li key={item._id}>
              <strong>Name: </strong>
              {item.name} <br />
              <strong>Email: </strong>
              {item.email} <br />
              <strong>Password: </strong>
              {item.password} <br />
            </li>
          ))}
        </ul>
  
        <h2>Contact data:</h2>
        <ul>
          {userData2.map(item => (
            <li key={item._id}>
              <strong>Name: </strong>
              {item.name} <br />
              <strong>Email: </strong>
              {item.email} <br />
              <strong>Message: </strong>
              {item.message} <br />
            </li>
          ))}
        </ul>
  
        <h2>Profile data:</h2>
        <ul>
          {userData3.map(item => (
            <li key={item._id}>
              <strong>Name: </strong>
              {item.name} <br />
              <strong>Age: </strong>
              {item.age} <br />
              <strong>Gender: </strong>
              {item.gender} <br />
              <strong>Country: </strong>
              {item.country} <br />
            </li>
          ))}
        </ul>
  
        <h2>Status data:</h2>
        <ul>
          {userData4.map(item => (
            <li key={item._id}>
              <strong>User ID: </strong>
              {item.user_id} <br />
              <strong>Status: </strong>
              {item.status} <br />
              <strong>Updated At: </strong>
              {item.updatedAt} <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
  
