import React from 'react';
import "./Footer.css";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <h3>The Mulenga Farm</h3>
            <p>
                <a href="mailto:themulengafarm@proton.me">
                    themulengafarm@proton.me
                </a>
            </p>
            <div className="social-buttons">
                <a href="https://www.youtube.com/@TheMulengaProject-2024" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
                <a href="https://www.instagram.com/themulengafarm/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
            <p className="copyright">
                © 2024 The Mulenga Farm. All Rights Reserved.
            </p>
        </footer>
    );
}
