import React from 'react'
import logo from '../images/ELogo.png'
 
const Hero = () => {
  return (
 <div>



<div class="hero_area">
       {/* <!-- header section strats --> */}
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </a>
          <div class="navbar-collapse" id="">
            <ul class="navbar-nav justify-content-between ">
              <div class="User_option">
                <li class="">
                  <a class="mr-4" href="">
                    Login
                  </a>
                  <a class="" href="">
                    Sign up
                  </a>
                </li>
              </div>
            </ul>

            <div class="custom_menu-btn">
              <button onclick="openNav()">
                <span class="s-1">

                </span>
                <span class="s-2">

                </span>
                <span class="s-3">

                </span>
              </button>
            </div>
            <div id="myNav" class="overlay">
              <div class="overlay-content">
                <a href="index.html">HOME</a>
                <a href="about.html">ABOUT</a>
                <a href="house.html">HOUSE</a>
                <a href="price.html">PRICING</a>
                <a href="contact.html">CONTACT US</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* <!-- end header section -->
    <!-- slider section --> */}
    <section class="slider_section ">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 offset-md-1">
            <div class="detail-box">
              <h1>
                <span> Modern</span> <br/>
                Apartment 
                House
              </h1>
              <p>
              What better way could business owners reap their well deserved returns in investment but to claim a unit in our mall?
              </p>
              <div class="btn-box">
                <a href="" class="">
                  contact us
                </a>
                {/* <button className='btn btn-outline-primary rounded'>PrimARY</button> */}
              </div>
             
            </div>
          
        </div>
      </div>
      </div>
    </section>

    <div className='heroSvg'>
        {/* <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 -40 1440 320"><path fill="#223A8C" 
     fill-opacity="1" 
     d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,213.3C672,192,768,160,864,133.3C960,107,1056,85,1152,117.3C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        
    </path></svg> */}
        </div>
  </div>
       
   <div  className='heroSvg2'>
    
    
   {/* <svg  
   xmlns="http://www.w3.org/2000/svg" 
   viewBox="0 70 1440 320"><path fill="#223A8C"
    fill-opacity="1" 
    d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,144C672,128,768,160,864,197.3C960,235,1056,277,1152,277.3C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
   </div>


 </div>
  )
}

export default Hero