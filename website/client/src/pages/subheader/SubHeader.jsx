import React from "react";
import "./SubHeader.css";
import banner from "../../assets/photos/site/banner.jpg";
import HeaderButton from "../../components/button/header-button/HeaderButton.jsx";
import {FaEnvelope, FaInstagram, FaYoutube} from "react-icons/fa";
import {useTranslation} from "react-i18next";

export default function SubHeader() {
    const { t } = useTranslation();

    return (
        <div>
            <div className="page-banner">
                <img src={banner} alt="banner farm" className="image-banner" />
            </div>

            <div className="secondary-header-container">
                <div className="secondary-header-container-inner">
                    <div className="secondary-header-left">
                        <div className="secondary-header-button-spacer">
                            <HeaderButton url="/home" name={t('subheader.home')} />
                        </div>
                        <div className="secondary-header-button-spacer">
                            <HeaderButton url="/pictures" name={t('subheader.pictures')} />
                        </div>
                        <div className="secondary-header-button-spacer">
                            <HeaderButton url="/videos" name={t('subheader.videos')} />
                        </div>
                    </div>

                    <div className="secondary-header-right">
                        <div className="secondary-header-icon-spacer">
                            <a href="https://www.instagram.com/themulengafarm/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="instagram" />
                            </a>
                        </div>
                        <div className="secondary-header-icon-spacer">
                            <a href="https://www.youtube.com/@TheMulengaProject-2024" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="youtube" />
                            </a>
                        </div>
                        <div className="secondary-header-icon-spacer">
                            <a href="mailto:themulengafarm@proton.me" target="_blank" rel="noopener noreferrer">
                                <FaEnvelope className="mail" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}