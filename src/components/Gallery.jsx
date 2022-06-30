import React from "react";
import imgCone from "../assets/images/mobile/image-gallery-cone.jpg";
import imgMilkBottles from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import imgOrange2 from "../assets/images/mobile/image-gallery-orange.jpg";
import imgSugarCube from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";

export const Gallery = () => {
    return (
        <div className="grid grid-cols-2 mt-[4rem]">
            <img className="" src={imgMilkBottles} alt="" />
            <img className="" src={imgOrange2} alt="" />
            <img className="" src={imgCone} alt="" />
            <img className="" src={imgSugarCube} alt="" />
        </div>
    );
};
