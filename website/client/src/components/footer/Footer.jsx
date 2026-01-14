import "./Footer.css";
import { FaYoutube, FaInstagram, FaEnvelope} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer show">
            <h3>The Mulenga Farm</h3>
            <div className="social-buttons">
                <a href="mailto:themulengafarm@proton.me" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="https://www.instagram.com/themulengafarm/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@TheMulengaProject-2024" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                </a>
            </div>
            <p className="copyright">
                © 2024 The Mulenga Farm. All Rights Reserved.
            </p>
        </footer>
    );
}
