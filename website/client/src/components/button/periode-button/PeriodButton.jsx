import React, { useEffect, useState } from 'react';
import "./PeriodButton.css";
import { useNavigate } from "react-router-dom";

export default function PeriodButton({images = [], text, url, debug = false}) {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 5000);

        if (debug) {
            console.log("Current image: " + images[index])
        }

        return () => clearInterval(interval);
    }, [debug, images, index]);

    const handleClick = () => {
        navigate(url);
    };

    return (
        <div className="period-button" onClick={handleClick}>
            <div className="period-button_bg-wrapper">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`period-button_bg ${i === index ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>

            <div className="period-button_overlay">
                <div className="period-button_text">{text}</div>
                <div className="period-button_see-more">see more</div>
            </div>
        </div>
    );
}