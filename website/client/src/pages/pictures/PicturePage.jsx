import React from "react";

import "./PicturePage.css";
import PeriodButton from "../../components/button/periode-button/PeriodButton.jsx";
import HorizontalSpacer from "../../components/util/HorizontalSpacer.jsx";

import img2025_1 from "../../../public/photos/photoPage/photos2025/Mulenga2025_25.JPG";
import img2025_2 from "../../../public/photos/photoPage/photos2025/Mulenga2025_41.JPG";
import img2025_3 from "../../../public/photos/photoPage/photos2025/Mulenga2025_45.JPG";
import img2025_4 from "../../../public/photos/photoPage/photos2025/Mulenga2025_59.JPG";
import img2025_5 from "../../../public/photos/photoPage/photos2025/Mulenga2025_85.JPG";

export default function PicturePage() {

    return (
        <div>
            <div className="page-container">

                <PeriodButton
                    images={[img2025_1, img2025_2, img2025_3, img2025_4, img2025_5]}
                    text="2025"
                    url="/pictures/2025"
                />

            </div>
            <HorizontalSpacer pixels={350}/>
        </div>
    );
}