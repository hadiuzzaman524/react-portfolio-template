import Style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';

const iconSize = 21;
const routes = [
    {
        path: "/",
        name: "Home",
        icon: <FaHome size={iconSize} />,
    },
    {
        path: "/education",
        name: "Education",
        icon: <BiAnalyse size={iconSize} />,
    },
    {
        path: "/skills",
        name: "Skills",
        icon: <AiTwotoneFileExclamation size={iconSize} />,
    },
    {
        path: "/hireme",
        name: "HireMe",
        icon: <FaChevronRight size={iconSize} />,
    },
    {
        path: "/contacts",
        name: "Contacts",
        icon: <FaUser size={iconSize} />,
    },

    {
        path: "/projects",
        name: "Projects",
        icon: <BsCartCheck size={iconSize} />,
    },
];

const Header = ({ children }) => {
    return (
        <>
        <div className={Style.main_container}>
        <div className={Style.header}>
         {
                routes.map((item) => {
                    return (
                        <>
                        <NavLink to={item.path} 
                        key={item.name} 
                        className={Style.nav_item}
                        >
                            <div className={Style.link_text}>{item.name}</div>
                        </NavLink>
                        </>
                    );
                })}
        </div>
        <main>
            {children}
        </main>
        </div>
        </>
    );
}

export default Header; 

/*
   
*/