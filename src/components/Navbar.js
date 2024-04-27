import React from 'react';
import './css/Navbar.css';

const MyNavbar = () => (
  <div className='Navbar'>
    <head>
      <title>Bootstrap Example</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>

      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Astrology</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="/Home">Home</a></li>
            <li><a href="/StarLines">About us</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="/contact"><span class="glyphicon glyphicon-envelope"></span> Contact Us</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            
            <li><a href="/display"><span class="glyphicon glyphicon-user"></span> Profile</a></li>
            <li><a href="/Login"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
          </ul>
        </div>
      </nav>

    </body>
  </div>
);

export default MyNavbar;
