import React from 'react';

import './fling.css'

const Fling = () => {
    return (
        <div className='flightSection padding mt-5'>
            <div className='boxShadow rounded'>

                <h3 className='flingTitle text-start'>Where are you flying? </h3>
                <div className='row g-2'>

                    <div className='col-3 mb-2'>
                        <input value={'Lahore - Karachi'} className='w-100' type="text" />
                    </div>
                    <div className='col-3 mb-2'>
                        <input className='w-100' type="text" />
                    </div>
                    <div className='col-3 mb-2'>
                        <input className='w-100' type="text" />
                    </div>
                    <div className='col-3 mb-2'>
                        <input className='w-100' type="text" />
                    </div>
                </div>

                <div className=' d-flex justify-content-end  align-items-center   '>
                    <p className='m-0'>+ Add prommo code</p>
                    <button className='flightButton ms-2'>Show Flight</button>
                </div>
            </div>

        </div>
    );
};

export default Fling;