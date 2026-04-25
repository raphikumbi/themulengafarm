import React from "react";
import ImageGallery  from "../../../components/content/ImageGallery.jsx";

export default function PicturePage2025() {
    const vertical = [
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

    const horizontal = [
        "Mulenga2025_1.JPG",
        "Mulenga2025_11.JPG",
        "Mulenga2025_23.JPG",
        "Mulenga2025_25.JPG",
        "Mulenga2025_36.JPG",
    ];

    return (
        <div>
            <ImageGallery
                rootPath = "/photos/photoPage/photos2025/"
                vertical={vertical}
                horizontal={horizontal}
            />
        </div>
    )
}