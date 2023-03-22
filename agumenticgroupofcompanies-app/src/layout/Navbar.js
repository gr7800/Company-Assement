import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/gol-logo 1.png'

const Navbar = () => {
    return (
        <div>
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
                                <Link to='/findReservations' class="nav-link active" aria-current="page" href="findReservations">Find Reservations</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/support' class="nav-link active" aria-current="page" href="#">Suport</Link>
                            </li>

                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">Packages</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">About Lakshadweep</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'/about'} class="nav-link active" aria-current="about" href="#about">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/' class="nav-link active" aria-current="page" href="#">Gol</Link>
                            </li>



                        </ul>

                        <form class="d-lg-flex align-items-center ">
                            <p class="nav-item text-center mx-auto">
                                <Link to={'/'} class="nav-link fw-bolder active" aria-current="page" href="#">login</Link>
                            </p>

                            <button class="border-0 signup" type="submit">Signup</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
