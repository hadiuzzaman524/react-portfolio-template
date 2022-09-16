import { AnimatePresence, motion } from 'framer-motion';
import Style from './SideBar.module.css';
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
        path: "/aboutme",
        name: "About Me",
        icon: <MdMessage size={iconSize} />,
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

const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.4,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <div className={Style.main_container}>

            <motion.div className={Style.sidebar} animate={{
                width: isOpen ? "270px" : "40px",
                transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 10,
                },
            }}>
                <div className="top_section">
                    <div className={Style.bar}>
                        {isOpen ? <FaChevronLeft onClick={toggle} /> : <FaChevronRight onClick={toggle} />}
                    </div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="show"
                            className="logo"
                        >
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhh-2Jy0QFHOU2HPjPIe6QSp4bzuhizTNhHlHjBrgdQ&s' />
                            <h2>Md Hadiuzzaman</h2>
                            <h4>Software Engineer @HeavyTask LLC</h4>
                        </motion.div>
                    )}
                </AnimatePresence>

                {
                    routes.map((item) => {
                        return (
                            <>
                                <NavLink to={item.path} 
                                key={item.name} 
                                className={Style.nav_item}
                                >
                                    <div className={Style.icon}>{item.icon}</div>
                                    <div className={Style.link_text}>{item.name}</div>
                                </NavLink>
                            </>
                        );
                    })}

            </motion.div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default SideBar;