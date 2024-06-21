import React from "react";
import './style.css';


const Cards = () => {


    const infoCards = [
        {
            imges: "https://images.unsplash.com/photo-1653589048352-7c3b90241ae2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            imges: "https://images.okr.ro/serve/product/1afbf9de961aca3deb6a58fc377dc0d4-53252-1000_1000"
        },
        {
            imges: "https://www.nicepng.com/png/detail/237-2370146_tablets-mobiles-and-tablets-png.png"
        },
        {
            imges: "https://5.imimg.com/data5/SELLER/Default/2021/8/GH/PW/MY/53210007/mobile-accessories.jpg"
        },
        {
            imges: "https://www.source-data.com/wp-content/uploads/2020/02/SS-1.jpg"
        },
        {
            imges: "https://m.media-amazon.com/images/I/41hZnutigQL._AC_UF1000,1000_QL80_.jpg"
        }
    ]

    console.log(infoCards.length, "info")
    return <>

        <div className="card-container">


            {/* use map funtcion */}
            {infoCards.map((value, index) => {
                return (
                    <div className="card" key={index}>
                        <img src={value?.imges} alt="Card"></img>

                        <div className="card-content">
                        <h1>Nonfunctional or Damaged Phone</h1>
                        <p>Phone issues can range from hardware damage, such as a broken screen or malfunctioning buttons, to software issues like app crashes or system errors. Get in touch for quick solution!</p>
                    </div>
                    </div>
                );
            })}
            {/* <div className="card">
                <img src="https://images.unsplash.com/photo-1653589048352-7c3b90241ae2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <h1>Nonfunctional or Damaged Phone</h1>
                <p>Phone issues can range from hardware damage, such as a broken screen or malfunctioning buttons, to software issues like app crashes or system errors. Get in touch for quick solution!</p>
            </div> */}
        </div>

    </>
}


export default Cards;