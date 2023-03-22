import React from 'react';
import p1 from '../../assets/packeg 1.png'
import p2 from '../../assets/packeg2.png'
import p3 from '../../assets/package3.png'

import './Package.css'
import { AiFillStar } from 'react-icons/ai';

const Packages = () => {

    const datas = [
        {
            img: p1,
            "location": 'Indonesia',
            "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
            "ratting": '4.5'
        },
        {
            img: p2,
            "location": 'Indonesia',
            "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
            "ratting": '4.5'
        },
        {
            img: p3,
            "location": 'Indonesia',
            "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
            "ratting": '4.5'
        }
    ]

    return (
        <>
            <div className='mt-5 padding'>
                <h2 className='packagesTitle'>Best Packages For You</h2>
                <p className=''>This is a unique experience on ship, sea and land, exploring different coral islands of Lakshadweep.</p>


                <div class="btn-group packagesButtons" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn PackageButton text-white" style={{ background: '#3282AD' }} >Maldives</button>
                    <button type="button" class="btn PackageButton">Samudram</button>
                    <button type="button" class="btn PackageButton cordelia">Cordelia</button>
                    <button type="button" class="btn PackageButton agatti">Agatti</button>
                    <button type="button" class="btn PackageButton">More</button>
                </div>

                <div className=''>
                    <div className='row g-4'>
                        {
                            datas.map((data) => {
                                return (
                                    <div className='packageCard col-12 col-md-6 col-lg-4 '>
                                        <div className='shadow rounded'>
                                            <div className='image'>
                                                <img className='w-100 rounded-top' src={data.img} alt='package' />
                                                <span className='price'>₹500</span>
                                            </div>

                                            <div className='cardDescriptions'>
                                                <div className='d-flex justify-content-between'>
                                                    <span className='cardTitle'>{data.location}</span>
                                                    <span className='ratting'>  <AiFillStar style={{ color: '#3282AD' }} /> {data.ratting}</span>
                                                </div>

                                                <p className='cardDesc text-start'>{data.desc}</p>
                                                <button className='cardButton  border-0 text-white text-center mx-auto'>Book now</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                </div>
                <div className='pt-5 '>
                    <span className='carasoulDots rounded-pill'>......</span>
                    <span style={{ background: '#3282AD', color: '#3282AD' }} className='carasoulDots'>......</span>
                    <span className='carasoulDots'>......</span>
                </div>

            </div>

            <button className='discoverMore'>Discover More</button>
        </>
    );
};

export default Packages;