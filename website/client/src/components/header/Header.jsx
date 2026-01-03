import React from "react";
import "./Header.css";
import image from "../../../public/home_banner.jpg";

export default function Header() {
    return (
        <header className="header" style={{ backgroundImage: `url(${image})` }}>
            <h1>The Mulenga Farm</h1>
        </header>
    );
}
