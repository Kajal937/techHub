import React from "react";
import './style.css';
// import { Link } from "react-router-dom";


const Footer = () => {
    return <>

        <div className="main-footer-container">
            <div className="footer-section-1">
                <img src="https://www.techsquare.co.nz/_next/static/media/Web_logo.24ddbced.png"></img>

                <div className="icon">
                    <i className="fa-solid fa-phone"></i>
                    <p>+64 211172680</p>
                </div>
                <div className="icon-2">
                    <i className="fa-solid fa-envelope"></i>
                    <p>manurewa@techsquare.co.nz</p>
                </div>

                <div className="icon-3">
                    <p>Mon to Fri: (9 am to 6 pm)</p>
                    <p>Sat: (12 pm to 4 pm) </p>
                    <p>Sun: Closed</p>
                </div>
            </div>

            {/* 2 */}
            <div className="footer-section-2">
                <h1>Company</h1>
                {/* <li><Link to={"/accessories"}>About</Link></li> */}
                <p>About Us</p>
                <p>Legal</p>
            </div>
            

            {/* 3 */}
            <div className="footer-section-3">
                <h1>Services</h1>
                <p>Nonfunctional or Damaged Phone</p>
                <p>TV repair</p>
                <p>Laptop or Tablet</p>
                <p>Accessories</p>
                <p>Software Support</p>
                <p>Phone Protection</p>
            </div>

            {/* 4 */}
            <div className="footer-section-4">


                {/* <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials">
                </iframe> */}

                <div className="location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>161B Great South Road, Manurewa, Auckland 2102</p>
                </div>
            </div>


        </div>

        <div className="inner-footer-color">
            <div className="inner-hr"></div>
            <div className="inner-footer">
                <p>Copyright 2023 © Tech Square</p>
            </div>
        </div>
    </>
}


export default Footer;