import React from "react";
import './style.css';


const Cards = () => {


    const infoCards = [
        {
            imges: "https://images.unsplash.com/photo-1653589048352-7c3b90241ae2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            h1: "Nonfunctional or Damaged Phone",
            p: "Phone issues can range from hardware damage, such as a broken screen or malfunctioning buttons, to software issues like app crashes or system errors. Get in touch for quick solution!"
        },
        {
            imges: "https://images.okr.ro/serve/product/1afbf9de961aca3deb6a58fc377dc0d4-53252-1000_1000",
            h1: "TV repair",
            p: "Repairing a TV can be a bit more complex than some other devices, and the specific steps will depend on the nature of the issue. Our expert technicians can visit to your place and fix your television quickly."
        },
        {
            imges: "https://www.nicepng.com/png/detail/237-2370146_tablets-mobiles-and-tablets-png.png",
            h1: "Laptop or Tablet",
            p: "Laptop issues can range from hardware problems to software glitches. To help you troubleshoot and potentially resolve the issue, we advise you to contact us."
        },
        {
            imges: "https://5.imimg.com/data5/SELLER/Default/2021/8/GH/PW/MY/53210007/mobile-accessories.jpg",
            h1: "Accessories",
            p: "Accessories can enhance the functionality, convenience, and aesthetics of various devices and products. We have a range of accessories available for various devices such as phones, laptops or other gadgets."
        },
        {
            imges: "https://www.source-data.com/wp-content/uploads/2020/02/SS-1.jpg",
            h1: "Software Support",
            p: "If you're experiencing a software issue, there are several general steps you can take to troubleshoot and potentially resolve the problem. Nonetheless, if you are uncertain about it, ask us!"
        },
        {
            imges: "https://m.media-amazon.com/images/I/41hZnutigQL._AC_UF1000,1000_QL80_.jpg",
            h1: "Phone Protection",
            p: "Protecting your phone is important to ensure its longevity and functionality. We have a range of options available to safeguard your phone. Call us to check which one suits your needs."
        }
    ]

    console.log(infoCards.length, "info")
    return <>

        <div className="card-container px-4">


            {/* use map funtcion */}
            {infoCards.map((value, index) => {
                return (
                    <div className="card" key={index}>
                        <img src={value?.imges} alt="Card"></img>

                        <div className="card-content">
                            <h1>{value?.h1}</h1>
                            <p>{value?.p}</p>
                        </div>
                    </div>
                );
            })}

        </div>

    </>
}


export default Cards;