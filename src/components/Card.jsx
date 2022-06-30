import React from 'react';


export const Card = ({image, title, information, link, classCard}) => {
    return (
        <article className="mb-6">
            <img className="w-full" src={image} alt="" />
            <div className="text-center">
                <h2 className="mt-9 mb-5 font-Fraunces text-3xl">
                    {title}
                </h2>
                <p className="mx-4 font-Barlow text-l leading-7 text-grayBlue">
                    {information}
                </p>
                <a className="font-Fraunces uppercase text-lg font-bold inline-block mt-5 mb-6" href={link}>Learn more</a>
            </div>
        </article>
    );
};
