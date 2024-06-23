import React from "react";
import './style.css';

const Background = () => {
  return (
    <div className=" back grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-[1280px] mx-auto mt-12  ">
      <div className="left-background-container">
        <img src="https://www.techsquare.co.nz/_next/static/media/TV-homepage-website-banners.0a72e673.jpg" className="object-cover w-full h-full" alt="Left Background" />
      </div>

      <div className="right-background-container">
        <img src="https://www.techsquare.co.nz/_next/static/media/iphone-homepage-website-banners.47652b26.jpg" className="object-cover w-full h-full" alt="Right Background" />
      </div>
    </div>
  );
}

export default Background;
