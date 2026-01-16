import React from 'react';
import './HomePage.css';

import {useTranslation} from "react-i18next";

import TwoColumnTextImage from "../../components/content/TwoColumnTextImage.jsx";
import VideoButton from "../../components/button/video-button/VideoButton.jsx";

import logo from '../../assets/logo.png';
import thumbnailLatestUpdate from '../../assets/photos/site/video_1_thumbnail.png';


export default function HomePage() {
    const { t } = useTranslation();

    // Our Mission
    const ourMissionTitle = t('our-mission.title');
    const ourMissionParagraphs = [t('our-mission.p1'), t('our-mission.p2'), t('our-mission.p3'), t('our-mission.p4')];
    const ourMissionLogoText = [t('our-mission.logo-text-1'), t('our-mission.logo-text-2')];

    // Video 1
    const videoLatestUpdate = "https://www.youtube.com/embed/75ftg_fsrLQ";

    return (
        <div className="home-container">
            {/* Video */}
            <VideoButton thumbnail={thumbnailLatestUpdate}
                         url={videoLatestUpdate}
                         title={t('video-latest-update.title')}
            />

            {/* Our Mission */}
            <TwoColumnTextImage title={ourMissionTitle}
                                paragraphs={ourMissionParagraphs}
                                imageSrc={logo}
                                imageAlt="Our Mission"
                                imageTextLines={ourMissionLogoText}
            />

        </div>
    );
}