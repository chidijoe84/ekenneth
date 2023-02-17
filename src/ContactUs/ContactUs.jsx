import React from 'react'
import juken from '../images/juken.jpeg'
const ContactUs = () => {
  return (
    <div>
<section class="us_section layout_padding2 ">

<div class="container-fluid">
  <div class="heading_container">
    <h2>
      Contact us
    </h2>
  </div>

  
	<div class="container-fluid justify-content-center row parentContact pt-5 pb-5">
		<div class=" col-md-3">
                    <form >
                        <div class="card formDiv rounded">
                            <div class="card-header p-0">
                                <div class="bg-dark text-white text-center py-2">
                                    <h3><i class="fa fa-envelope"></i> Contact us</h3>
                                    <p class="m-0">We Reply in Less than 24 hours</p>
                                </div>
                            </div>
                            <div class="card-body p-3 pt-5" >

                                {/* <!--Body--> */}
                                <div class="form-group ">
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Name" required/>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-4">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                        </div>
                                        <input type="email" class="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required/>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                        </div>
                                        <textarea class="form-control" rows="5" placeholder="Please write a message" required></textarea>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <input type="submit" value="Submit" class="btn btn-dark btn-block rounded-0 py-2"/>
                                </div>
                            </div>

                        </div>
                    </form>
                    {/* <!--Form with header--> */}
                    
	</div>
    <div class="col-6">
    <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
    </div>
  </div>
  
</div>
                        <div >
                         <div className=' container  secondDiv mt-2  row'>
                            <div className='col-6 realestatVector bg-primary'>
                            <div class=" py-0 px-0">
                                <div class="map_container">
                                <div class="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="900" frameborder="0" style={{border:"0", width: "100%", height:"500px"}} allowfullscreen></iframe>
                                </div>
                              </div>
                            </div>
                                                    
                            
                            </div>

                            <div className='col-4'>
                                <img src={juken} alt='juken img'/>
                            </div>
                       
                        </div>
                        
                    </div>
</section>

    </div>
  )
}

export default ContactUs