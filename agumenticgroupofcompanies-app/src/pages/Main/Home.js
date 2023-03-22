import React from 'react';
import logo from '../../assets/gol-logo 1.png'
import bannerimage from '../../assets/banner image.png'
import './home.css'
import Fling from '../../components/Fling';
import Packages from '../../components/Packages/Packages';
import IslandStay from '../../components/Island/IslandStay';
import Contact from '../../components/Contact/Contact';
import Testmonial from '../../components/Testmonial/Testmonial';
import visitIcon from '../../assets/Vector.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className='Banner padding'>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div style={{ paddingTop: '30px' }} class="container-fluid d-flex align-items-center align-middle">
                        <div className='navLogo me-5' class="nav-item " style={{ paddingleft: '87px' }}>
                            <Link to='/'>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <button class="navbar-toggler menuBtn border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <Link to='findReservations' class="nav-link active" aria-current="findReservations" href="findReservations">Find Reservations</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to='/support' class="nav-link active" aria-current="page" href="#">Suport</Link>
                                </li>

                                <li class="nav-item " aria-disabled>
                                    <Link to='/' class="nav-link active" aria-current="page" href="#">Packages</Link>
                                </li>

                                <li class="nav-item">
                                    <Link to='/' class="nav-link active" aria-current="page" href="#">About Lakshadweep</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to={'about'} class="nav-link active" aria-current="about" href="#about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/' class="nav-link active" aria-current="page" href="#">Gol</Link>
                                </li>
                            </ul>

                            <form class="d-lg-flex align-items-center ">
                                <p class="nav-item text-center m-0 mx-auto">
                                    <Link to={'/'} class="nav-link fw-bolder active" aria-current="page" href="#">login</Link>
                                </p>

                                <button class="border-0 signup" type="submit">Signup</button>
                            </form>
                        </div>
                    </div>
                </nav>

                {/* banner  start*/}
                <div className='bannerContainer'>

                    <div class="row d-flex align-items-center align-middle">

                        <div class="col-sm-6">
                            <div class="text-center text-md-start">
                                <div className='hide'>
                                    <button className='visitButton  border-0 px-2  d-flex align-items-center gap-2 align-middle rounded-pill'>Visit <img style={{ width: '20px' }} src={visitIcon} alt="" /></button>
                                </div>
                                <h2 className='title'>The Exotic <span className='titleColor'>Lakshadweep</span> Islands</h2>
                                <button className='bannerButton'>Discover Now</button>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="imageBg">
                                <div class="imageBg2">
                                    <div className='image3'>
                                        <img className='bannerImage' src={bannerimage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Fling />
            <Packages />
            <div></div>
            <IslandStay />
            <Contact />
            <Testmonial />
        </>
    );
};

export default Home;
