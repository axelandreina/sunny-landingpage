import React from "react";
import { Testimonies } from "./Testimonies.jsx";
import { testimonies } from "../data/data.js";


export const Testimonials = () => {
    return (
        <div className="flex flex-col items-center mx-6">
            <h1 className="text-center font-Fraunces text-xl uppercase tracking-[0.2rem] text-grayBlue">
                Client Testimonials
            </h1>
            {testimonies.map(({ image, description, name, role }) => (
                <Testimonies
                    key={name}
                    image={image}
                    description={description}
                    name={name}
                    role={role}
                />
            ))}
        </div>
    );
};
