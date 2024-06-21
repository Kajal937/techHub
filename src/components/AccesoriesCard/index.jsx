import React from "react";
import './style.css';


const AccessoriesCard = () => {
    return <>

        <div className="accessories-container">

            <div className="left-accessories">
                <h1>Common TV Issues and Possible Solutions</h1><br></br>
                <p>Repairing a TV can be a bit more complex than some other devices, and the specific steps will depend on the nature of the issue. Our expert technicians can visit to your place and fix your television quickly.</p>
                <br></br>
                <div className="left-1">
                    <h2>No Power</h2>
                    <br></br>
                    <div className="inner-left-1">
                        <ul className="bullets">
                            <li>Check the power source :</li>
                            <p>Make sure the power outlet is working. Try plugging the TV into a different outlet.</p>
                        </ul>

                    </div>
                    <ul className="bullets">
                        <li>Power cord and connections :</li>
                        <p>Inspect the power cord for any damage. Ensure all connections are secure.</p>
                    </ul>
                </div>
                <br></br>

                {/* 2 */}


                <div className="left-1">
                    <h2>No Picture or Sound</h2>
                    <br></br>
                    <ul className="bullets">
                        <li>Input selection :</li>
                        <p>Make sure the power outlet is working. Try plugging the TV into a different outlet.</p>  
                        </ul> 
                        <ul className="bullets">
                        <li>Check external devices :</li>
                        <p>If you're using external devices (cable box, DVD player, etc.), make sure they are connected and powered on.</p>
                   </ul>
                </div>
                <br></br>

                {/* 3 */}


                <div className="left-1">
                    <h2>Poor Picture Quality</h2>
                    <br></br>
                    <ul className="bullets">
                        <li>Check cables :</li>
                        <p>Ensure that your HDMI, component, or other video/audio cables are securely connected.</p>
               </ul>
                        <ul className="bullets">
                        <li>Adjust picture settings :</li>
                        <p>Experiment with the TV's picture settings to improve image quality.</p>
                 </ul>
                </div>
                <br></br>
                {/* 4 */}

                <div className="left-1">
                    <h2>Distorted or No Soundr</h2>
                    <br></br>
                    <ul className="bullets">
                        <li>Volume settings :</li>
                        <p>Check the TV's volume settings and ensure it's not muted.</p>
                        </ul>
                        <ul className="bullets">
                        <li>Audio output settings :</li>
                        <p>Make sure the correct audio output is selected in the TV settings.</p>
                      </ul>
                        <ul className="bullets">
                        <li>liExternal devices :</li>
                        <p>Make sure the correct audio output is selected in the TV settings.</p>
                 </ul>
                </div>
                <br></br>

                {/* 5 */}

                <div className="left-1">
                    <h2>Remote Control Issues</h2>
                    <br></br>
                    <ul className="bullets">
                        <li>Replace batteries :</li>
                        <p>If your remote is not working, try replacing the batteries.</p>
                       </ul>
                        <ul className="bullets">
                        <li>Check for interference :</li>
                        <p>Make sure there are no obstacles between the remote and the TV.</p>
                  </ul>
                </div>
                <br></br>
                {/* 6 */}

                <div className="left-1">
                    <h2>Lines or Spots on the Screen</h2>
                    <br></br>
                    <ul className="bullets">
                        <li>Check cables :</li>
                        <p>Ensure that video cables are securely connected.</p>
                       </ul>
                        <ul className="bullets">
                        <li>Update firmware :</li>
                        <p>Check if there's a firmware update available for your TV</p>
                 </ul>

                    {/* </div> */}
                    <br></br>

                    <div className="trouble">
                        <h1>Advanced Troubleshooting</h1>
                        <br></br>
                        <p>If basic troubleshooting doesn't resolve the issue, and if you're comfortable doing so, you may consider opening the TV and checking for obvious issues like loose cables, burnt components, or swollen capacitors. However, this should be done with caution and, ideally, with some knowledge of electronics.</p>
                    </div>

                    {/* 1 */}
                    <br></br>
                    <div className="trouble">
                        <h1>Professional Assistance</h1>
                        <br></br>
                        <p>If the issue persists or if you're not comfortable attempting the repair yourself, it's advisable to seek assistance from our qualified TV technicians. We can provide more specialized help, especially for internal components and circuitry. Remember, attempting to repair a TV without proper knowledge can be risky and may cause further problems.</p>
                    </div>

                </div>
                <br></br>
                <br></br>
            </div>
            <div className="right-accessories">
                <img src="https://www.sony.co.in/image/7f33a19fca96e58947da2afc8ebef9bc?fmt=pjpeg&wid=1200&hei=470&bgcolor=F1F5F9&bgc=F1F5F9"></img>
            </div>
        </div>



    </>
}


export default AccessoriesCard;