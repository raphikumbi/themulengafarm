import "./VideoButton.css";
import { IoPlayOutline } from "react-icons/io5";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

export default function VideoButton({ thumbnail, url, title }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    // Lock background scroll
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const autoplayUrl = open
        ? `${url}?autoplay=1&mute=1`
        : "";

    // Close on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        if (open) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    return (
        <>
            <div className="video-info-section">
                <div className="video-info-container">
                    <button
                        className="video-button"
                        onClick={() => setOpen(true)}
                        style={{ backgroundImage: `url(${thumbnail})` }}
                    >
                        <div className="video-button-overlay">
                            <div className="video-button-title">
                                <h2>{title}</h2>
                            </div>

                            <div className="video-play-button">
                <span className="video-play-text">
                  {t("video-container.play")}
                </span>
                                <span className="video-play-icon">
                  <IoPlayOutline className="io-play-icon" />
                </span>
                            </div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {open && (
                <div className="video-modal" onClick={() => setOpen(false)}>
                    <div
                        className="video-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={autoplayUrl}
                            title={title}
                            frameBorder="0"
                            allow="autoplay; fullscreen"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}


