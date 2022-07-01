import React from "react";
import { linksFooter } from "../data/data";
import { socials } from "../data/data";
import logoFooter from "../assets/images/logo-footer.svg";

export const Footer = () => {
    return (
        <div className="bg-[hsl(164,45%,72%)] space-y-12 py-10">
            <img
                className="mx-auto text-moderateCyan mb-6"
                src={logoFooter}
                alt=""
            />

            <div className="flex justify-center space-x-10">
                {linksFooter.map((props) => {
                    return (
                        <a
                            className="text-moderateCyan"
                            href={props.linkOption}
                        >
                            {props.option}
                        </a>
                    );
                })}
            </div>
            <div className="flex justify-center space-x-4">
                {socials.map((props) => {
                    return (
                        <a href={props.link}>
                            <img
                                className="text-moderateCyan"
                                src={props.logo}
                                alt=""
                            />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
