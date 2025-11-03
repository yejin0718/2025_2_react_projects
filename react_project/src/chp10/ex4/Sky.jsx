import React from "react"
import "./Sky.css"
import img1 from "./imgs/img1.png";
import img2 from "./imgs/img2.png";
import img3 from "./imgs/img3.png";
import img4 from "./imgs/img4.png";
import img5 from "./imgs/img5.png";
import img6 from "./imgs/img6.png";
import img7 from "./imgs/img7.png";
import img8 from "./imgs/img8.png";
import img9 from "./imgs/img9.png";
import img10 from "./imgs/img10.png";

const photos = [
    {id: 1, caption: "강하늘", src: img1},
    {id: 2, caption: "아주", src: img2},
    {id: 3, caption: "잘생겼죠", src: img3},
    {id: 4, caption: "^^?", src: img4},
    {id: 5, caption: "사진을", src: img5},
    {id: 6, caption: "보니", src: img6},
    {id: 7, caption: "기분이", src: img7},
    {id: 8, caption: "아주", src: img8},
    {id: 9, caption: "좋아지네요", src: img9},
    {id: 10, caption: "^^", src: img10}
]

function sky() {
    return(
        <div className="fanpage-container">
            <h2 className="fanpage-title">☁️ 기분이 좋아지는 강하늘 사진 모음 ☁️</h2>
            <div className="photo-container">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <img className="photo-img" src={photo.src} alt={photo.caption} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default sky;