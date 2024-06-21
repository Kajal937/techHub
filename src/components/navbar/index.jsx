import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return <>

        <div className="fixed-container">
            <div className="navbar">
               
                <div className="logo">
                    <img src="https://www.techsquare.co.nz/_next/static/media/Web_logo.24ddbced.png"></img>
                </div>
                {/* responsive */}

                <label for="main-checkbox">
                    <i class="fa-solid fa-bars"></i>
                </label>

                <input type="checkbox" id="main-checkbox"></input>


                <ul className="nav-menu">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/repair"}>Repair</Link></li>
                    <li><Link to={"/accessories"}>Accessories</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                </ul>
           

            </div>


            {/* 2 */}

            <div className="second-navbar">
           
                <div className="email">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Email Us</p>
                </div>

                <span>|</span>

                <div className="clock">
                    <i class="fa-regular fa-clock"></i>
                    <p>Mon to Fri: (9 am to 6 pm) Sat: (12 pm to 4 pm) Sun: Closed</p>
                </div>

                <span className="span-color">|</span>

                <div className="call">
                    <i class="fa-solid fa-phone"></i>
                    <p>Call Us Now</p>
                </div>


                <span className="call-span">|</span>

                <div className="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p>161B Great South Road, Manurewa, Auckland 2102</p>
                </div>

                <span className="span-color">|</span>

                <div className="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-tiktok"></i>
                </div>
            </div>
           
        </div>
    </>
}


export default Navbar;