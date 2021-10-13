
import React from "react-dom";
import importAll from "./importAll";

const GetArt = () => {
    const imgs = importAll(require.context('../media/art_folder', false, /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i));
    const artArray = []

    imgs.forEach((img) => {
        const newImage = new Image();
        newImage.src = img.default;
        artArray.push(newImage);
    })

    return artArray;
}

export default GetArt;