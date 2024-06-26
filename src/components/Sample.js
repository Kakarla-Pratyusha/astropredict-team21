import React, { useState } from 'react';
import './css/Sample.css';





export default function Sample(){
    //TOP NAVIGATION
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myTopnav").style.width = "100%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "0%";
    document.getElementById("roll_back").style.display = "flex";
    } else {
    document.getElementById("myTopnav").style.width = "80%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "4rem";
    document.getElementById("roll_back").style.display = "none";
    }
    }
    
  return (
    <div>
          <head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Playfair+Display:wght@400;500;600;700&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet" />
          </head>

          <body>
          <header>
                  <div class="header">
                      <section>
                          <span><a href="emailto:"><i class="fa fa-envelope"></i> support@websitename.com</a></span>
                          <span><a href="tel:"><i class="fa fa-phone"></i> (+64) 00 000 00000</a></span>
                      </section>
                      <section>
                          <span><a href="#"><i class="fa fa-facebook"></i></a></span>
                          <span><a href="#"><i class="fa fa-instagram"></i></a></span>
                          <span><a href="#"><i class="fa fa-youtube"></i></a></span>
                          <span><a href="#"><i class="fa fa-twitter"></i></a></span>
                      </section>
                  </div>
              </header>
              <nav id="header">
                  <div class="topnav" id="myTopnav">
                      <a href="#"><img id="logo" src="https://i.ibb.co/BqRjXSV/ev-logo.png" alt="" /></a>
                      <a href="#">Home</a>
                      <div class="dropdown">
                          <button class="dropbtn"> Events
                              <i class="fa fa-caret-down"></i>
                          </button>
                          <div class="dropdown-content animate">
                              <a href="#">Cubic</a>
                              <a href="#">Square</a>
                          </div>
                      </div>
                      <a href="#contact">Contact</a>
                      <a href="#about">About</a>
                      <a href="#about" style="float:right;padding: 14px 2px;"><i class="fa fa-search"></i></a>
                      <a href="#about" style="float:right;padding: 16px 2px;"><i class="fa fa-user-circle-o"></i></a>
                      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="NavBar()">&#9776;</a>
                  </div>
              </nav>
              <div class="banner">
                  <section>
                      <h1 class="cursive"><em>M</em>ichelle <em>N</em>ame</h1>
                      <h2>We create events that are inspired by our clients. We work collaboratively to ensure your event is cohensive & thoughtful.</h2>
                      <a href="#" class="btn1">Contact Us</a>
                      <a href="#" class="btn2" style="background-color:#1e1e1e !important;">Recent Events</a>
                  </section>
              </div>
              <div class="about_mr">
                  <section>
                      <img src="https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="inline-photo2 show-on-scroll2" />
                      <img src="https://images.unsplash.com/photo-1470328358326-dee4879da669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" class="inline-photo3 show-on-scroll3" />
                  </section>
                  <section>
                      <span class="line inline-photo3 show-on-scroll3"></span>
                      <h1 class="title inline-photo2 show-on-scroll2">Meet <em>Michelle</em></h1>
                      <h3>Marketer & Event Manager From Country</h3>
                      <p>Michelle [full_name] is a Marketer and Event Manager from [country]. He/She works in PR, TV Host and creates the best events in [province] collaborating with [collaboration] like, [names_here] etc</p>
                      <p>Now he/she is expanding into Talent Management, discovering new talent that he/she presents on his/her events and talent shows. </p>
                      <a href="#" class="btn1"><i class="fa fa-instagram"></i> Instagram</a>
                  </section>
              </div>
              <div class="section2">
                  <div class="title_header">
                      <h1 class="title">Discover the best things we do</h1>
                      <h3>We exist for non-profits, social enterprises, community groups, activists,lorem politicians and individual citizens that are making.</h3>
                      <span class="border-shape"></span>
                  </div>
                  <div class="cards">
                      <section>
                          <div class="card">
                              <h3>We create amazing <em>Telivision Programmes</em> in an affordable cost</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum excepturi</p>
                              <span><em>Finance</em> collecting & supporting</span>
                              <span class="mark">01</span>
                          </div>
                          <div class="card">
                              <h3>We create amazing <em>Telivision Programmes</em> in an affordable cost</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum excepturi</p>
                              <span><em>Finance</em> collecting & supporting</span>
                              <span class="mark">02</span>
                          </div>
                          <div class="card">
                              <h3>We create amazing <em>Telivision Programmes</em> in an affordable cost</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum excepturi</p>
                              <span><em>Finance</em> collecting & supporting</span>
                              <span class="mark">03</span>
                          </div>
                      </section>
                      <section>
                          <div class="card">
                              <h3>We create amazing <em>Telivision Programmes</em> in an affordable cost</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum excepturi</p>
                              <span><em>Finance</em> collecting & supporting</span>
                              <span class="mark">04</span>
                          </div>
                          <div class="card">
                              <h3>We create amazing <em>Telivision Programmes</em> in an affordable cost</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum excepturi</p>
                              <span><em>Finance</em> collecting & supporting</span>
                              <span class="mark">05</span>
                          </div>
                          <div class="card">
                              <h3>We create amazing <em>Telivision Programmes</em> in an affordable cost</h3>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique illum excepturi</p>
                              <span><em>Finance</em> collecting & supporting</span>
                              <span class="mark">06</span>
                          </div>
                      </section>
                  </div>
              </div>
              <div class="section3">
                  <section>
                      <h1 class="title">What can he/she <em>achieve</em> in an event?</h1>
                      <p>Michelle can create business and corporative events, personal events and parties, but his/her specialization is [specialization fields].</p>
                      <p>His/Her event agency performs on a minimum ROI of [roi_here] and a cross selling ROI of [roi_here] average. As an example: [Zombies are trendy. They’re the new vampires. Zombie Ipsum is a great looking site with 50% more braaiinnns than other offerings.].</p>
                      <div class="card">
                          <span><img src="https://i.ibb.co/jkL4mJ7/icon1.png" alt="" /></span>
                          <span>
                              <h3>Create Protecting Shield</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                          </span>
                      </div>
                  </section>
              </div>
              <div class="contact">
                  <section>
                      <div class="title_header">
                          <h1 class="title">Let's talk...!</h1>
                          <h3>We always love to hear from you. Having any queris please feel free to contact us.</h3>
                          <span class="border-shape"></span>
                      </div>
                      <div class="contact_info">
                          <ul>
                              <li><i class="fa fa-map-marker"></i></li>
                              <li>22 Baker Street, London,
                                  United Kingdom, W1U 3BW </li>
                          </ul>
                          <ul>
                              <li><i class="fa fa-phone"></i></li>
                              <li>(+xx) xxx xxxx xxx</li>
                          </ul>
                          <ul>
                              <li><i class="fa fa-envelope"></i></li>
                              <li>support@michellerelayze.com</li>
                          </ul>
                      </div>
                  </section>
                  <section>
                      <form action="" method="POST">
                          <fieldset>
                              <input type="text" name="fname" placeholder="Full name*" maxlength="50" required="" />
                          </fieldset>
                          <fieldset>
                              <input type="tel" name="mobile" placeholder="Mobile no*" maxlength="15" required="" />
                          </fieldset>
                          <fieldset>
                              <input type="email" name="email" placeholder="Email address*" maxlength="100" required="" />
                          </fieldset>
                          <fieldset>
                              <textarea name="message" placeholder="Your message..." maxlength="500"></textarea>
                          </fieldset>
                          <fieldset>
                              <button type="submit" class="btn1">Submit</button>
                          </fieldset>
                      </form>
                  </section>
              </div>
              <div class="section4">
                  <div class="title_header">
                      <h1 class="title">Latest news & articles directly from our blog</h1>
                      <h3>Lorem ipsum dolor sit amet, consetetur sadipi scing elitr, sed diam nonumy eirmo dr temp orr invidunt ut labore et dolore magna aliquyam </h3>
                      <span class="border-shape"></span>
                  </div>
                  <div class="cards">
                      <div class="card content">
                          <div class="card-content">
                              <div class="card-img">
                                  <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Gamer" />
                              </div>
                              <div class="card-label">E-Sports</div>
                              <div class="card-title">
                                  Fnatic raises $19 million, shakes up leadership team
                              </div>
                          </div>
                      </div>
                      <div class="card content">
                          <div class="card-content">
                              <div class="card-img">
                                  <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard" />
                              </div>
                              <div class="card-label">
                                  Technology
                              </div>
                              <div class="card-title">
                                  Google Stadia: The Future of Gaming
                              </div>
                          </div>
                      </div>
                      <div class="card content">
                          <div class="card-content">
                              <div class="card-img">
                                  <img src="https://images.unsplash.com/photo-1519326844852-704caea5679e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2034&q=80" alt="Controller" />
                              </div>
                              <div class="card-label">
                                  Consoles
                              </div>
                              <div class="card-title">
                                  PS5 won't launch before mid-2020
                              </div>
                          </div>
                      </div>
                      <div class="card content">
                          <div class="card-content">
                              <div class="card-img">
                                  <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="keyboard" />
                              </div>
                              <div class="card-label">
                                  Technology
                              </div>
                              <div class="card-title">
                                  Google Stadia: The Future of Gaming
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <footer>
              <div class="middle_section">
                  <section>
                      <span>
                          <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                          <a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                          <a href="#" target="_blank"><i class="fa fa-youtube"></i></a>
                          <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                      </span>
                      <span>
                          <a href="#">Privacy Policy</a>
                          <a href="#">FAQ</a>
                          <a href="#">About Us</a>
                          <a href="#">Contact Us</a>
                      </span>
                  </section>
              </div>
              <div class="bottom_section">
                  <span>Copyright © 2021. All rights reserved</span>
              </div>
          </footer>
          <a href="#" id="roll_back" class="animate"><i class="fa fa-angle-up"></i></a><div class="credits">
              Logo: <a href="https://www.brandcrowd.com/maker/logo/strong-man-circle-12151" target="_blank">BrandCrowd</a>
              NavBar: <a href="https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp" target="_blank">W3Schools</a><br></br>
              Blog: <a href="https://codepen.io/SebastianOpperman/pen/wZLrQz" target="_blank">Sebastian</a>
              Images: <a href="https://images.unsplash.com" target="_blank">Unsplash</a>
          </div>


</body>
    </div>
  );
}





              


              








              





              






              




              




              
          
