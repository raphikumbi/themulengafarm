import React from "react";
import "./YoutubeVideo.css";

export default function YoutubeVideo( {src, title }) {
    return (
        <div className="video-container">
            <iframe
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </div>
    );
}
