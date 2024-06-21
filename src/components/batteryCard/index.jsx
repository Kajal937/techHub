import React from "react";
import './style.css';


const BatteryCard = () => {

    const battery = [
        {
            img: "https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817602.jpg",
            h1: "headphone",
            p: "starting from just $20",
        },
        {
            img: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBpcGhvbmUlMjAxMXxlbnwwfHwwfHx8MA%3D%3D",
            h1: "iphone",
            p: "starting from just $20",
        },
        {
            img: "https://m.media-amazon.com/images/I/21lijO76EoL._SY780_.jpg",
            h1: "battery",
            p: "starting from just $20",
        },
        {
            img: "https://media.istockphoto.com/id/1373017594/photo/headphones-on-the-orange-color-background.jpg?s=612x612&w=0&k=20&c=9SEBT-6kUjIBy33Ga-C9n6CQMd7FOUk3yC89mOAa0ts=",
            h1: "",
            p: "starting from just $20",
        },
        {
            img: "https://wallpapers.com/images/featured/airpods-ujqimsjtqjdisg9g.jpg",
            h1: "Airpods",
            p: "starting from just $20",
        },
        {
            img: "https://5.imimg.com/data5/SELLER/Default/2022/6/AH/BI/HB/102234567/samsung-and-iphone-phone-j-case-mobile-back-cover.jpeg",
            h1: "phone cover",
            p: "starting from just $20",
        },
        {
            img: "https://m.media-amazon.com/images/I/61Va2WZraAL.jpg",
            h1: "screen protector ",
            p: "starting from just $20",
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4OVki6cyVGg-dkd2yzGLGkv-o3Sl6rBI9cFNzbRP-zXO4SeqWKWExsUpHyMXBuvKJhmg&usqp=CAU",
            h1: "power bank",
            p: "starting from just $20",
        },
    ]
    return <>

        <div className="battery-container">


            {/* use map function */}
            {battery.map((value, index) => {
                return <div className="battery-card" key={index}>
                    <img src={value?.img}></img>
                    <div className="battery-button">
                        <button>HEADPHONE</button>
                    </div>
                    <p>{value?.p}</p>
                </div>
            })}

        </div>

    </>
}

export default BatteryCard;