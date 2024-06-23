import React from "react";
import './style.css';
import { test } from '../../data/homePge/index';

const Testimonials = () => {


    return (
        <>

            <div className="testimonal-background-color">
                <div className="testimonials-heading">
                    <h1>TESTIMONIALS</h1>
                    <div className="hr"></div>
                </div>

                <div className="testimonials-container px-4">


                    {/* use-map-function */}

                    {test.map((value, index) => {
                        return <div className="testimonials-card" key={index}>
                            <div className="testimonials-1">
                                <div className="circle-color">
                                    <h2>{value?.h2}</h2>
                                </div>
                                <div className="emily-heading">
                                    <h1>{value?.h1}</h1>
                                </div>
                                <div className="line">|</div>
                                <div className="testimonials-2">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                </div>
                            </div>


                            <div className="outer-padding">
                                <div className="Emily-manu">
                                    <p>{value?.p}</p>
                                </div>

                                <div className="date">
                                    <div className="date-1">
                                        <p>12/02/2024</p>
                                    </div>

                                    <div className="date-2">
                                        <p>3 weeks ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}
                </div>

            </div>
        </>
    );
}

export default Testimonials;
