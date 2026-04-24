import React from "react";
import Spacer from "../../components/util/HorizontalSpacer.jsx"

import "./PicturePage.css";

export default function PicturePage() {
    const imgPath = (name) =>
        `/photos/photos2025/${name}`;

    const verticalPairs2025 = [
            ["Mulenga2025_3.JPG",  "Mulenga2025_2.JPG"],
            ["Mulenga2025_4.JPG",  "Mulenga2025_5.JPG"],
            ["Mulenga2025_6.JPG",  "Mulenga2025_7.JPG"],

            ["Mulenga2025_8.JPG",  "Mulenga2025_9.JPG"],
            ["Mulenga2025_10.JPG", "Mulenga2025_12.JPG"],
            ["Mulenga2025_13.JPG", "Mulenga2025_14.JPG"],

            ["Mulenga2025_15.JPG", "Mulenga2025_16.JPG"],
            ["Mulenga2025_17.JPG", "Mulenga2025_18.JPG"],
            ["Mulenga2025_19.JPG", "Mulenga2025_20.JPG"],

            ["Mulenga2025_21.JPG", "Mulenga2025_22.JPG"],
            ["Mulenga2025_24.JPG", "Mulenga2025_26.JPG"],
            ["Mulenga2025_27.JPG", "Mulenga2025_28.JPG"],

            ["Mulenga2025_29.JPG", "Mulenga2025_30.JPG"],
            ["Mulenga2025_31.JPG", "Mulenga2025_32.JPG"],
            ["Mulenga2025_33.JPG", "Mulenga2025_34.JPG"],
    ];

    const horizontalSingles2025 = [
        "Mulenga2025_1.JPG",
        "Mulenga2025_11.JPG",
        "Mulenga2025_23.JPG",
        "Mulenga2025_25.JPG",
        "Mulenga2025_36.JPG",
    ];

    if (verticalPairs2025.length / horizontalSingles2025.length !== 3) {
        console.error(
            "Horizontal & vertical picture count mismatch: "
            + (verticalPairs2025.length / horizontalSingles2025.length)
        )
    }

    const rows = [];

    let vIndex = 0;
    let hIndex = 0;

    while (vIndex < verticalPairs2025.length || hIndex < horizontalSingles2025.length) {

        // 3 vertical blocks
        for (let i = 0; i < 3 && vIndex < verticalPairs2025.length; i++) {
            rows.push(
                <div className="img-container-vertical" key={`v-${vIndex}`}>
                    <div className="img-container-v">
                        {verticalPairs2025[vIndex].map((img, j) => (
                            <img key={j} src={imgPath(img)} alt="" />
                        ))}
                    </div>
                </div>
            );
            vIndex++;
        }

        // 1 horizontal block
        if (hIndex < horizontalSingles2025.length) {
            rows.push(
                <div className="img-container-horizontal" key={`h-${hIndex}`}>
                    <div className="img-container-h">
                        <img src={imgPath(horizontalSingles2025[hIndex])} alt="" />
                    </div>
                </div>
            );
            hIndex++;
        }
    }

    return (
        <div className="page-container">

            <div className="segment-title">
                <h1>2025</h1>
            </div>

            {rows}

            <Spacer pixels={50}/>

        </div>
    );
}