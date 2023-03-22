import React from 'react';
import './contract.css'

const Contact = () => {
    return (
        <div className='padding'>
            <div className='contact ' style={{
                marginTop: '104px',
                background: '#42A7C3',

            }}>
                <div className='row bgImage'>

                    <div className='col-12 col-md-6'>
                        <div className='text-white text-center text-md-start'>
                            <h3 className='contactTitle'>Let’s Ready to Explore The
                                World With Us.</h3>
                            <p className='contactDesc d-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Pellentesque efficitur ac quam in congue. </p>
                        </div>
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className=' d-flex justify-content-center justify-content-md-end '>
                            <button className='btn  contactBtn'>Contact Us</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;