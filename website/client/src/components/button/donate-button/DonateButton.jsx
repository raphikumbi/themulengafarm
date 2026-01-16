import React from 'react';
import { useTranslation } from "react-i18next";
import "./DonateButton.css";
import { FaRegHeart } from "react-icons/fa";

export default function DonateButton({ className = ""}) {
    const { t } = useTranslation();

    const handleClick = () => {
        window.location.href = "https://donate.raisenow.io/xkmgf";
    };

    return (
        <div className="ButtonContainer">
            <button className={`donate-button ${className}`} onClick={handleClick}>
                <FaRegHeart className="donate-button-icon" />
                <span className="donate-button-text">{t('global.donate')}</span>
            </button>
        </div>
    );
}
