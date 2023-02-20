import React from 'react'
import about from '../images/about-img.jpg'
import sqr from '../images/square.png'
import {GiRoad} from 'react-icons/gi'
import {GiTap} from 'react-icons/gi'
import {GiAutoRepair} from 'react-icons/gi'
import {MdSecurity} from 'react-icons/md'
import {RiPoliceCarFill} from 'react-icons/ri'
import {MdOutlineLocalParking} from 'react-icons/md'
import {GiCctvCamera} from 'react-icons/gi'
import {FaRegLightbulb} from 'react-icons/fa'
const AboutUs = () => {
  return (
    <div>
      <section class="about_section layout_padding-bottom">
    <div class="square-box">
      <img src={sqr} alt="logo"/>
    </div>
    <div class="container-fluid ">
      <div class="row">
        <div class="col-md-5 ">
          <div className='leftSide' >
          <div class="heading_container mb-5">
              <h2>
                About Our Apartment
              </h2>
            </div>
            <p>
            Juken mall is located in Abuja's tranquil and exclusive 
            area of Guzape. With a promise of swanky recreational 
            experience combined with ease of navigation and access
             to distinguished areas in Abuja, Juken Mall offers merchants 
             a unique opportunity to attract their target
              customers effortlessly.
            </p>
            <p>
            What better way could business owners reap their well deserved returns
             in investment but to claim a unit in our mall?
            </p>
            <div class="btn btn-box  bg-white aboutBtn ">
                {/* <a href="" class="">
                  contact us
                </a> */}
                <button className='btn btn-outline-primary aboutBtn'> contact us</button>
              </div>
          </div>
            
            
        </div>
        <div class="col-md-6">
        <div class="heading_container mb-5">
              <h2>
                About Our Facility
              </h2>
              </div>
          <div class="detail-box ">
           
            <div className='features'>
              <div className='row '>
               <div className='col-md-3 border m-2 p-3  shadow-sm para1  ' id='firstDiv' tabindex="0">
                <div className=' p-2 pt-3 pb-3  iconDiv'>
                  <GiRoad/>
             </div>
             <p><h3 className='connectRoad '>01. Connecting Access Roads </h3> 
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
             
            </p>
            <hr className='horinzontal'/>
            {/* <a href="">
              Read More
            </a> */}
            </div>

            <div className='col-md-3 border m-2 p-3  shadow-sm para1'>
            <div className=' p-2 pt-3 pb-3 iconDiv'>
            <GiTap/>
             </div>
             <p><h3 className='connectRoad'>02. Steady water supply  </h3> 
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              
            </p>
            <hr className='horinzontal'/>
            
            </div>

            <div className='col-md-3 border m-2 p-3  shadow-sm para1'>
            <div className=' p-2 pt-3 pb-3  iconDiv'>
            <GiAutoRepair/>
             </div>
             <p><h3 className='connectRoad'>03. Facility maintenance Team  </h3>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
             
            </p>
            <hr className='horinzontal'/>
            {/* <a href="">
              Read More
            </a> */}
            </div>
          
            <div className='col-md-3 border m-2  p-3 shadow-sm para1'>
               <div className=' p-2 pt-3 pb-3 iconDiv'>
            <MdSecurity/>
             </div>
            <p><h3 className='connectRoad'>04. 24/7 Security Guards  </h3>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
              
            </p>
            <hr className='horinzontal'/>
            {/* <a href="">
              Read More
            </a> */}
            </div>
             
            <div className='col-md-3 border m-2  p-3  shadow-sm para1'>
            <div className=' p-2 pt-3 pb-3  iconDiv'>
            <RiPoliceCarFill/>
             </div>
            <p><h3 className='connectRoad'>05. Police Patrol Vehicle cover  </h3>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
             
            </p>
            <hr className='horinzontal'/>
            {/* <a href="">
              Read More
            </a> */}
            </div>

            <div className='col-md-3 border m-2  p-3 shadow-sm para1'>
            <div className=' p-2 pt-3 pb-3  iconDiv'>
            <MdOutlineLocalParking/>
              </div>
            <p><h3 className='connectRoad'>06. Ample parking Space  </h3>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
             
            </p>
            <hr className='horinzontal'/>
            {/* <a href="">
              Read More
            </a> */}
            </div>

            <div className='col-md-3 border m-2  p-3  shadow-sm para1'>
            <div className=' p-2 pt-3 pb-3  iconDiv'>
            <GiCctvCamera/>
             </div>
            <p><h3 className='connectRoad'>07. CCTV Coverage   </h3>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
             
            </p>
            <hr className='horinzontal'/>
            {/* <a href="">
              Read More
            </a> */}
            </div>
            <div className='col-md-3 border m-2  p-3 shadow-sm  para1'>
             <div className=' p-2 pt-3 pb-3  iconDiv'>
              <FaRegLightbulb/>
             </div>
            <p><h3 className='connectRoad'>08. Stable Power Supply  </h3>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in
            </p>
            <hr className='horinzontal'/>
            {/* <a href="">
              Read More
            </a> */}
            </div>
            </div>
           
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default AboutUs