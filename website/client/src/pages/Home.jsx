import React from 'react';
import './Home.css';

import {useTranslation} from "react-i18next";

import HorizontalSpacer from "../components/util/HorizontalSpacer.jsx";
import TwoColumnTextImage from "../components/content-section/TwoColumnTextImage.jsx";
import VideoButton from "../components/content-section/VideoButton.jsx";

import banner from '../../src/assets/photos/site/banner.jpg';
import logo from '../../src/assets/logo.png';
import thumbnailLatestUpdate from '../assets/photos/site/video_1_thumbnail.png';


export default function Home() {
    const { t } = useTranslation();

    // Our Mission
    const ourMissionTitle = t('our-mission.title');
    const ourMissionParagraphs = [t('our-mission.p1'), t('our-mission.p2'), t('our-mission.p3'), t('our-mission.p4')];
    const ourMissionLogoText = [t('our-mission.logo-text-1'), t('our-mission.logo-text-2')];

    // Video 1
    const videoLatestUpdate = "https://www.youtube.com/embed/75ftg_fsrLQ";

    return (
        <div className="home-container">
            {/* Page Banner */}
            <div className="page-banner">
                <img src={banner} alt="banner farm" className="image-banner" />
            </div>

            <HorizontalSpacer pixels={25} />

            {/* Our Mission */}
            <TwoColumnTextImage title={ourMissionTitle}
                                paragraphs={ourMissionParagraphs}
                                imageSrc={logo}
                                imageAlt="Our Mission"
                                imageTextLines={ourMissionLogoText}
            />

            {/* Video */}
            <VideoButton thumbnail={thumbnailLatestUpdate}
                         url={videoLatestUpdate}
                         title={t('video-latest-update.title')}
            />

        </div>
    );

}
