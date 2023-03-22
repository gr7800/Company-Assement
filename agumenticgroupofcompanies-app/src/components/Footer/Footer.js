import React from 'react';
import image from '../../assets/footerMobile.png'
import logo from '../../assets/google-play-store.png'
import icon from '../../assets/social media.png'
import gol from '../../assets/gol-logo-white.png'


import './footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()


    return (
        <div className='footerConatiner'>


            <div className='blackpart'>
                <div className='bg-dark image blackSection text-white'>
                    <div className='row'>

                        <div className='col-12 col-md-6'>
                            <div className='text-start formobile desc'>
                                <div className=''>
                                    <h3 className='footerTitle'>Download Our App</h3>
                                    <small>The best travel in the world</small>
                                </div>

                                <button className='d-flex align-middle footerButton'>
                                    <div>
                                        <img className='logo pt-2' src={logo} alt="" />
                                    </div>
                                    <div className=' ps-2 text-start'>
                                        <span style={{ fontSize: '8px' }}>GET IN ON</span>
                                        <br />
                                        <span style={{ fontSize: '16px' }} className=''>Goolge Play</span>

                                    </div>

                                </button>
                            </div>
                        </div>

                        <div className='col-12 col-md-6'>
                            <div className='FooterMobile d-none d-md-block'>
                                <img className='footrMobile mobileHeight  moble' src={image} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className='socialSection '>
                <div className='socialLinks padding mx-w-100 row'>

                    <div className='col-3 mobileHeight '>
                        <img src={gol} alt="" />
                        <p className='footerDescription'>Lorem Ipsum is simply dummy
                            text of the printing and type
                            setting industry.</p>
                        <img className='icons' src={icon} alt="" />
                    </div>

                    <div className='col-3 mobileHeight'>
                        <h4>Company</h4>
                        <p>Events</p>
                        <p>Blogs</p>
                        <p>FAQ</p>
                        <p>Join US</p>
                    </div>
                    <div className='col-3 mobileHeight'>
                        <h4>About</h4>
                        <p>Project</p>
                        <p>Lorem</p>
                        <p>Services</p>
                        <p>Our Story</p>
                    </div>
                    <div className='col-3 mobileHeight'>
                        <h4>Contact Us</h4>
                        <p>abc@lorem.com</p>
                        <p>India</p>
                    </div>
                </div>

                {/* accordion start */}
                <div className='accordion w-90 p-2 '>
                    <div class="accordion accordion-flush" id="accordionFlushExample">


                        <div class="accordion-item w-90">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <h4>Company</h4>

                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <p>Events</p>
                                    <p>Blogs</p>
                                    <p>FAQ</p>
                                    <p>Join US</p>

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item mt-2">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <h4>About</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <p>Project</p>
                                    <p>Lorem</p>
                                    <p>Services</p>
                                    <p>Our Story</p>
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item  mt-2">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h4>Contact Us</h4>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">

                                    <p>abc@lorem.com</p>
                                    <p>India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='line' />
                <div>
                    <p className='warning mb-0'>
                        Copyright © {year} GoL Travels Private Limited. All Rights Reserved.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Footer;
