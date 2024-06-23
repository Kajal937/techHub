import React from "react";
import './style.css';


const AboutPart = () => {
    return <>

        {/* <div className="max-w-[1280px] m-auto w-full" > */}

        <div className="w-full max-w-[1280px] mx-auto mt-12">
            <div className="partCard">
                <div className="left-about">
                    <h1>One stop for all your electronic service needs!</h1>
                    <p>We, at Tech Square, care to repair everything you got. We are dedicated to provide consumers with fast, affordable, and reliable repairs for all of their electronic items such as Mobile Phones, TV, Laptops, and Audio Systems. We have a team of experienced professional who have mastered their skills for the past 20 years of combined experience.</p><br></br>
                    <p>
                        We use only the highest quality parts and offer a wide range of repair services, from simple screen replacements to complex motherboard repairs. We also offer same-day repairs in most cases!</p><br></br>
                    <p>Not only the repairs, we have a wide range of accessories options for your gadget needs. We also provide stationary support such as printing and scanning.</p>
                </div>

                <div className="right-about">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/755/321/desktop-wallpaper-dolls-motherboard-repair-simulation-section-%D0%BC%D0%B0%D0%BA%D1%80%D0%BE-mobile-repair.jpg"></img>
                </div>
            </div>
        </div>
        {/* </div> */}
    </>
}


export default AboutPart;