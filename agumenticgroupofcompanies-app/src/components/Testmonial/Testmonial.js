import React from 'react';
import './testmonial.css'
import image1 from '../../assets/RomanRey.png'
import image2 from '../../assets/AlexTom.png'
import image3 from '../../assets/FinnBalor.png'
import Ratting from '../Ratting/Ratting';


const Testmonial = () => {

    const reviews = [
        {
            'img': image1,
            'name': 'Roman Rey',
            'location': 'toranto Canada',
            'message': 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. '
        },
        {
            'img': image2,
            'name': 'Roman Rey',
            'location': 'toranto Canada',
            'message': 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. '
        },
        {
            "img": image3,
            "name": 'Roman Rey',
            "location": 'toranto Canada',
            "message": 'Lorem ipsum dolor sit amet,  consectetur adipiscing elit. Pellentesque efficitur ac quam in congue. '
        },
    ]

    return (
        <div className='padding'>
            <h2 class='testmonialTitle' >What Our Clients Says <br /> About Us</h2>

            <div className='row g-3 '>
                {
                    reviews.map((review) => {
                        return (
                            <div className='col-12 col-md-6 col-lg-4'>
                                <div className='reviewCard '>
                                    <img className='mt-4' src={review.img} alt="user" />
                                    <h4 className='pt-3'>{review.name}</h4>
                                    <p className='location'>{review.location}</p>
                                    <p className='reviewDesc'>{review.message}</p>
                                    <span><Ratting /></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className='pt-5 '>
                <span className='carasoulDots rounded-pill'>......</span>
                <span style={{ background: '#3282AD', color: '#3282AD' }} className='carasoulDots'>......</span>
                <span className='carasoulDots'>......</span>
            </div>

        </div>
    );
};

export default Testmonial;