import React from 'react';
import Navbar from '../../layout/Navbar';
import booking from '../../assets/bookingImages/bookiing.png'

import './findReservations.css'

const FindReservations = () => {
    return (
        <div className='bookingBgImage ' >
            <div className='padding'>
                <Navbar />

                <div className='mapBg '>
                    <div>
                        <div className='BookingBgImage'>
                            <h2 className='pageTitle'>My booking</h2>
                        </div>
                    </div>

                    <div>
                        <div className='row  bookingSection d-flex align-items-center align-middle'>

                            <div className='col-12 col-lg-6 '>
                                <div className='images'>
                                    <img className='w-100' src={booking} alt="user" />
                                </div>
                            </div>

                            <div className='col-12 col-lg-6'>
                                <div className='text-start'>
                                    <label className='label' htmlFor="email">Email</label>
                                    <br />
                                    <input className='w-100 input_box' type="email" />
                                </div>

                                <div className='text-start'>
                                    <label className='label' htmlFor="Booking ">Booking ID</label>
                                    <br />
                                    <input className='w-100 input_box' type="text" />
                                </div>

                                <button className='w-100 findBooking'>Find</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FindReservations;