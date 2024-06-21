import React from "react";
import './style.css';
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Background from "../../components/background";
import BatteryCard from "../../components/batteryCard";
import AccesoriesContent from "../../components/accesoriesContent";


const Accessories = () => {
    return <>
        <Navbar />
        < Background />
        <BatteryCard />
        <AccesoriesContent/>
        <Footer />

    </>
}


export default Accessories;