import React from "react";

export const Testimonies = ({ image, description, name, role }) => {
    return (
        <>
            <img className="mt-5 scale-[.60] rounded-full" src={image} alt="" />
            <p className="leading-7 text-center font-Barlow text-darkGrayBlue">
                {description}
            </p>
            <h3 className="mt-5 mb-2 font-Fraunces text-xl">{name}</h3>
            <p className="font-Barlow text-grayBlue">{role}</p>
        </>
    );
};
