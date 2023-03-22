import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import image1 from '../../assets/Kavaratti1.png'
import image2 from '../../assets/Kavaratti2.png'
import image3 from '../../assets/Kavaratti3.png'
import image4 from '../../assets/Kavaratti4.png'
import image5 from '../../assets/Kavaratti5.png'
import image6 from '../../assets/Kavaratti6.png'

import './islandStay.css'

const datas = [
    {
        img: image1,
        "location": 'Indonesia',
        "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
        "ratting": '4.5'
    },
    {
        img: image2,
        "location": 'Indonesia',
        "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
        "ratting": '4.5'
    },
    {
        img: image3,
        "location": 'Indonesia',
        "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
        "ratting": '4.5'
    },
    {
        img: image1,
        "location": 'Indonesia',
        "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
        "ratting": '4.5'
    },
    {
        img: image2,
        "location": 'Indonesia',
        "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
        "ratting": '4.5'
    },
    {
        img: image3,
        "location": 'Indonesia',
        "desc": 'Explore the Beauty of the island for 3 days and 2 nights with our travel agency...',
        "ratting": '4.5'
    },
]

const IslandStay = () => {
    return (
        <div className='padding'>
            <h2 className='mb-2' style={{ marginTop: '88px' }}>Island Stays</h2>
            <p className='IslandStayDesc mx-w-75'>
                One can choose from a variety of beautiful coral islands which offers different staying experiences from thatched huts to luxurious
                modern properties. Every island offers a wider range of water sports and beach activities for you to enjoy.</p>
            <div>
                <div className='row g-3'>
                    {
                        datas.map((data) => {
                            return (
                                <div className='col-12  col-md-6 col-lg-4'>
                                    <div className=''>
                                        <div className='islandDesc'>
                                            <img className='w-100' src={data.img} alt='package' />
                                        </div>

                                        <div className='p-3 shadow rounded'>
                                            <span className='cardTitle'>{data.location}</span>
                                            <p className='cardDesc text-start'>{data.desc}</p>

                                            <div className='d-flex justify-content-between'>
                                                <div className=''>
                                                    <span className='ratting'>  <AiFillStar style={{ color: '#3282AD' }} /> {data.ratting}</span>
                                                    <span className=' ms-2 totalReview'>(1.5k Review)</span>
                                                </div>
                                                <button className='cardButton ms-auto border-0 text-white'>Explore More</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default IslandStay;