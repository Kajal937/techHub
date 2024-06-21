import React from "react";
import './style.css';
import Navbar from "../../components/navbar";
import Background from "../../components/background";
import Cards from "../../components/cards";
import Call from "../../components/call";
import Offer from "../../components/offer";
import Testimonals from "../../components/testimonals";
import Footer from "../../components/footer";



const Home = () =>{
    return<>
    <Navbar/>
    < Background />
    <Cards/>
    <Call/>
    <Offer/>
    <Testimonals/>
    <Footer/>
    </>
}


export default Home;