import React from 'react'
import instagram from '../images/instagram.png'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import fb from '../images/fb.png'

const Footer = () => {
  return (
    <div>
         {/* <!-- contact section --> */}

<section class="contact_section ">
  <div class="container">
    {/* <div class="heading_container">
      <h2>
        Get In Touch
      </h2>
    </div> */}
  </div>
  {/* <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 px-0">
        <div class="map_container">
          <div class="map-responsive">
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="300" frameborder="0" style={{border:"0", width: "100%", height:"100%"}} allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-5 ">
        <div class="form_container">
          <form action="">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone Number" />
            </div>
            <div>
              <input type="text" class="message-box" placeholder="Message" />
            </div>
            <div class="d-flex ">
              <button>
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  </div> */}
</section>

{/* <!-- end contact section -->



<!-- info section --> */}
<section class="info_section ">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="info_contact">
          <h5>
            About Apartment
          </h5>
          <div>
            <div class="img-box">
              <img src="images/location.png" width="18px" alt=""/>
            </div>
            <p>
             
            </p>
          </div>
          <div>
            <div class="img-box">
              <img src="images/phone.png" width="12px" alt=""/>
            </div>
            <p>
              +234 07037631029
            </p>
          </div>
          <div>
            <div class="img-box">
              <img src="images/mail.png" width="18px" alt=""/>
            </div>
            <p>
            ekenneth.properties@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="info_info">
          <h5>
            Information
          </h5>
          <p>
          Juken mall is located in Abuja's tranquil and exclusive area of Guzape
          </p>
        </div>
      </div>
              
      <div class="col-md-3">
        <div class="info_links">
          <h5>
          Address
          </h5>
          <ul>
            <li>
              <a href="">
              plot 1510 Cadastral Zone A09
              </a>
            </li>
            <li>
              <a href="">
              Guzape diplomatic
              </a>
            </li>
            <li>
              <a href="">
              behind common wealth of Zion Assembly (COZA Church)
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="info_form ">
          <h5>
            Newsletter
          </h5>
          <form action="">
            <input type="email" placeholder="Enter your email"/>
            <button>
              Subscribe
            </button>
          </form>
          <div class="social_box">
            <a href="">
              <img src={fb} alt=""/>
            </a>
            <a href="">
              <img src={linkedin} alt=""/>
            </a>
            <a href="">
              <img src={twitter} alt=""/>
            </a>
            <a href="https://www.instagram.com/e_kenneth_properties/">
              <img src={instagram} alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- end info_section --> */}


{/* <!-- footer section --> */}
<section class="container-fluid footer_section ">
  <div class="container">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By 
       <a href=""> Ekenneth</a>
    </p>
  </div>
</section>
    </div>
  )
}

export default Footer