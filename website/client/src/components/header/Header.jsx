import React from "react";
import "./Header.css";

import DonateButton from "../button/donate/DonateButton.jsx";
import ImageButton from "../button/logo/ImageButton.jsx";
import logo from "../../assets/logo.png";
import {useTranslation} from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <>
            <header className="HeaderContent">

                <div className="header-left">
                    <ImageButton className="logo" image={logo} url="/home" />

                    <div className="title desktop-only">
                        <h1>{t('global.title')}</h1>
                    </div>

                    <div className="title phone-only">
                        <h1>{t('global.title')}</h1>
                    </div>
                </div>

                <div className="header-right">
                    <DonateButton className="donate-button"/>
                </div>
            </header>
        </>
    );

}
