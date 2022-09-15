import { motion } from 'framer-motion';
import Style from './SideBar.module.css';
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";


const routes = [
    {
        path: "/",
        name: "Home",
        icon: <FaHome />,
    },
    {
        path: "/contacts",
        name: "Contacts",
        icon: <FaUser />,
    },
    {
        path: "/messages",
        name: "Messages",
        icon: <MdMessage />,
    },
    {
        path: "/analytics",
        name: "Analytics",
        icon: <BiAnalyse />,
    },
    {
        path: "/file-manager",
        name: "File Manager",
        icon: <AiTwotoneFileExclamation />,
    },
    {
        path: "/order",
        name: "Order",
        icon: <BsCartCheck />,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <BiCog />,
    },
    {
        path: "/saved",
        name: "Saved",
        icon: <AiFillHeart />,
    },
];

const SideBar = ({ children }) => {
    return (
        <div className={Style.main_container}>
            <motion.div className={Style.sidebar} animate={{
                width: "250px",
                transition: {
                    duration: 0.5,
                    type: "spring",
                    damping: 10,
                },
            }}>
                {routes.map((item) => {
                  return(  <NavLink to={item.path} key={item.name}>
                        <div>{item.icon}</div>
                        <div>{item.name}</div>
                    </NavLink>);
                 })}
            </motion.div>
            <main>
                {children}
            </main>
        </div>
    );
}

export default SideBar;