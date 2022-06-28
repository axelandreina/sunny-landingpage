import React from 'react';
import card1 from "/src/assets/images/mobile/image-transform.jpg";


export const Card = () => {
    return (
        <article className="mb-6">
            <img className="w-full" src={card1} alt="" />
            <div className="text-center">
                <h2 className="mt-9 mb-5 font-Fraunces text-3xl">
                    Transform your brand
                </h2>
                <p className="mx-4 font-Barlow text-l leading-7 text-grayBlue">
                    We are a full-service creative agency specializing in
                    helping brands grow fast. Engage your clients through
                    compelling visuals that do most of the marketing for you.
                </p>
                <a className="font-Fraunces uppercase text-lg font-bold inline-block mt-5 mb-6" href="">Learn more</a>
            </div>
        </article>
    );
};
