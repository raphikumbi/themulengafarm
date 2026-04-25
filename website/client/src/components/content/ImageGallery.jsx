import React from "react";
import "./ImageGallery.css";

import HorizontalSpacer from "../../components/util/HorizontalSpacer.jsx"

export default function ImageGallery({rootPath = "", vertical = [], horizontal = []}) {
    const imgPath = (name) => `${rootPath}${name}`;

    if (vertical.length / horizontal.length !== 3) {
        console.error("Horizontal & vertical picture count mismatch: " + (vertical.length / horizontal.length))
    }

    const rows = [];

    let vIndex = 0;
    let hIndex = 0;

    while (vIndex < vertical.length || hIndex < horizontal.length) {

        // 3 vertical blocks
        for (let i = 0; i < 3 && vIndex < vertical.length; i++) {
            rows.push(
                <div className="img-container-vertical" key={`v-${vIndex}`}>
                    <div className="img-container-v">
                        {vertical[vIndex].map((img, j) => (
                            <img key={j} src={imgPath(img)} alt="" />
                        ))}
                    </div>
                </div>
            );
            vIndex++;
        }

        // 1 horizontal block
        if (hIndex < horizontal.length) {
            rows.push(
                <div className="img-container-horizontal" key={`h-${hIndex}`}>
                    <div className="img-container-h">
                        <img src={imgPath(horizontal[hIndex])} alt="" />
                    </div>
                </div>
            );
            hIndex++;
        }
    }

    return (
        <div>
            <HorizontalSpacer pixels={25}/>
            {rows}
            <HorizontalSpacer pixels={25}/>
        </div>
    )
}