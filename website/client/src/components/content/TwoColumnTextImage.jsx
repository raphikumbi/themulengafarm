import React from 'react';
import PropTypes from "prop-types";
import "./TwoColumnTextImage.css";

export default function TwoColumnTextImage({ title, paragraphs, imageSrc, imageAlt, imageTextLines = [] }) {
    return (
        <section className="two-column-section">
            <div className="section-container">

                {/* Left Column */}
                <div className="section-left">
                    <h2 className="section-title">{title}</h2>
                    <div className="section-text">
                        {paragraphs.map((p, index) => (
                            <p key={index}>{p}</p>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="section-right">
                    <div className="section-image-container">
                        <img src={imageSrc} alt={imageAlt} className="section-image" />
                    </div>
                    <div className="section-image-text">
                        {imageTextLines.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

// Prop type validation
TwoColumnTextImage.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    imageTextLines: PropTypes.arrayOf(PropTypes.string),
};

// Default props
TwoColumnTextImage.defaultProps = {
    imageAlt: "Section image",
    imageTextLines: [],
};
