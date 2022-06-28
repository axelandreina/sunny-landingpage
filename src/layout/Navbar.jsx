import React from "react";
import Logo from "/src/assets/images/logo.svg";
import Menu from "/src/assets/images/icon-hamburger.svg";


export const NavBar = () => {
    return (
        <nav className="z-20 px-4 fixed top-8 w-full">
            <div className="flex justify-between ">
                <img className="top-4 " src={Logo} alt="" />
                <img className="cursor-pointer" src={Menu} alt="" />
            </div>
        </nav>
    );
};
