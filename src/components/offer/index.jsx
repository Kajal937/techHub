import React from "react";
import './style.css';


const Offer = () => {

    const cardInfo = [
        {
            imges: "https://www.techsquare.co.nz/_next/static/media/Picture%201.37ec5a94.png",
            h1: "Quality Repair",
            p: "We guarantee the quality of our workmanship. Our technicians have 20+years of combined experience in the trade who can fix your product with the quality you deserve.",
        },
        {
            imges: "https://www.techsquare.co.nz/_next/static/media/Picture2.07b4c02d.png",
            h1: "3 Months Warranty",
            p: "Enjoy the benefits of stress free repairs. If you encounter any problems within 90 days from your product being repaired by us for the same problem, we will cover it under warranty. Keep in mind that warranties do not typically cover damage caused by misuse, accidents, or unauthorized repairs.",
        },
        {
            imges: "https://www.techsquare.co.nz/_next/static/media/Picture3.d2943aa3.png",
            h1: "Fast Turnaround",
            p: "We value your time. Our expert technicians will fix your product in no time with best quality. Avail our services to save your time and get faster solutions.",
        },
        {
            imges: "https://www.techsquare.co.nz/_next/static/media/Picture4.54a47c71.png",
            h1: "Free Screen Protectors",
            p: "We understand how a broken phone feels like. We offer free screen protection worth up to $30 if you get your phone screen replaced from us.",
        },
        {
            imges: "https://www.techsquare.co.nz/_next/static/media/Picture5.7798753e.png",
            h1: "On-site TV repairs",
            p: "Tech Square offers hassle free services. We offer convenient options such as home visits or pick-up and drop facilities for TV repair. Get in touch with us if your TV needs a solution!",
        },
        {
            imges: "https://www.techsquare.co.nz/_next/static/media/Picture6.e690487a.png",
            h1: "Expert Technicians",
            p: "We have a team of specialized technicians who will ensure your product works in best manner. This team has a combined experience of 20+ years in the field of IT and Electronics.",
        }
    ]
    return <>
        <div className="offer-background-color">
            <div className="offer-heading">
                <h1>What we offer!</h1>
                <div className="hr-line"></div>
            </div>


            <div className="offer-main-container">

                {/* use map function */}

                {cardInfo.map((value, index) => {
                    return <div className="offer-card" key={index}>
                        <div className="left-offer">
                            <img src={value?.imges}></img>
                        </div>

                        <div className="right-offer">
                            <h1>{value?.h1}</h1>
                            <p>{value?.p}</p>
                        </div>
                    </div>
                })}
                {/* <div className="offer-card">
                <div className="left-offer">
                    <img src="https://www.techsquare.co.nz/_next/static/media/Picture%201.37ec5a94.png"></img>
                </div>

                <div className="right-offer">
                    <h1>Quality Repair</h1>
                    <p>We guarantee the quality of our workmanship. Our technicians have 20+years of combined experience in the trade who can fix your product with the quality you deserve.</p>
                </div>
            </div> */}
            </div>
        </div>
    </>
}


export default Offer;