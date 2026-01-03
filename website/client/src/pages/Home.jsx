import React from 'react';
import YoutubeVideo from "../components/video/YoutubeVideo.jsx";

export default function Home() {
    return (
        <>
            <YoutubeVideo
                src="https://www.youtube.com/embed/75ftg_fsrLQ" // Embedded url
                title="Update Weihnachten 2025">
            </YoutubeVideo>
        </>
    );
}
