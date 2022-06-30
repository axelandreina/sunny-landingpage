import React from "react";
import { linksFooter } from "../data/data";
import { socials } from "../data/data";
import logoFooter from "../assets/images/logo.svg";

export const Footer = () => {
    return (
        <div className="bg-moderateCyan">
            <img className="text-darkCyan" src={logoFooter} alt="" />
            <div>
                {linksFooter.map((props) => {
                    return (
                        <a className="text-moderateCyan" href={props.linkOption}>
                            {props.option}
                        </a>
                    );
                })}
            </div>
            <div>
                {socials.map((props) => {
                    return (
                        <a href={props.link}>
                            <img className="text-moderateCyan" src={props.logo} alt="" />
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
