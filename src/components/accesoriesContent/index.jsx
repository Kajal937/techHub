import React from "react";
import './style.css';


const AccesoriesContent = () => {
    return <>

        <div className="main-content-container">
            <div className="content-heading">
                <p>The price range for accessories can vary widely based on factors such as brand, quality, functionality, and materials. Here is a general overview of the price ranges for different types of accessories</p>
            </div>
            <br></br>
            <br></br>
            <div className="main-container">


                <div className="phone-container">
                    <div className="left-1">
                        <h2>Phone Accessories</h2>
                        <br></br>
                        <ul className="bullets">
                            <li>Phone Cases :</li>
                            <p>Basic cases can range from $10 to $30, while more specialized or branded cases can go up to $50 or more.</p>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div className="left-1">
                        <ul className="bullets">
                            <li>Screen Protectors :</li>
                            <p>Typically priced between $10 and $30.</p>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="left-1">
                        <ul className="bullets">
                            <li>Phone Cases :</li>
                            <p>Basic cases can range from $10 to $30, while more specialized or branded cases can go up to $50 or more.</p>
                        </ul>
                    </div>
                </div>


                {/* headinggggggg */}

                <div className="phone-container">
                    <div className="left-1">
                        <h2>Laptop Accessories</h2>
                        <br></br>
                        <ul className="bullets">
                            <li>Laptop Sleeves and Cases :</li>
                            <p>Prices can range from $20 to $100 or more, depending on the brand and materials.</p>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div className="left-1">
                        <ul className="bullets">
                            <li>External Keyboards and Mice :</li>
                            <p>Basic models may start at around $20, while more advanced or ergonomic options can go up to $100 or more.</p>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="left-1">
                        <ul className="bullets">
                            <li>Laptop Stands :</li>
                            <p>Prices vary, with basic stands starting at around $20, and more adjustable or feature-rich options costing $50 or more.</p>
                        </ul>
                    </div>
                </div>


                {/* 5 */}
                <div className="phone-container">
                    <div className="left-1">
                        <h2>Audio Accessories</h2>
                        <br></br>
                        <ul className="bullets">
                            <li>Headphones :</li>
                            <p>Entry-level headphones can start at around $20, while premium, noise-canceling models can cost several hundred dollars or more.</p>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div className="left-1">
                        <ul className="bullets">
                            <li>Earbuds :</li>
                            <p>Prices range from $20 to $200 or more, depending on the brand and features.</p>
                        </ul>
                    </div>

                    {/* 3 */}
                    <div className="left-1">
                        <ul className="bullets">
                            <li>Bluetooth Speakers :</li>
                            <p>Basic models may start at $30, while high-end speakers can exceed $300.</p>
                        </ul>
                    </div>
                </div>


                <div className="phone-container">
                    <div className="left-1">
                        <h2>Cables and Connectivity Accessories</h2>
                        <br></br>
                        <ul className="bullets">
                            <li>High-Quality Cables :</li>
                            <p>Prices vary, with basic cables starting at around $10 and premium, durable options costing $20 or more.</p>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div className="left-1">
                        <ul className="bullets">
                            <li>Adapters, Hubs, and Docking Stations :</li>
                            <p>Prices range from $20 to $100 or more, depending on the type and features.</p>
                        </ul>
                    </div>
                    <br></br>
                    <br></br>
                </div>

            </div>
        </div>
    </>
}


export default AccesoriesContent;