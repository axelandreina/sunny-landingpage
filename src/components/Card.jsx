import React from 'react';


export const Card = ({image, title, information, link, classCard}) => {
    return (
        <article className="relative">
            <img className="w-full" src={image} alt="" />
            <div className={classCard}>
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

// <aside class="md:p-16 p-8 pt-[30rem] bg-graphicdesign bg-cover bg-center flex flex-col justify-end"> <h2 class="text-center text-decyan text-4xl font-fraunces"> Graphic Design </h2> <p class="text-decyan text-center text-lg font-barlow"> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention. </p> </aside>