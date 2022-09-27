import Style from "./SocialMedia.module.css";
import { BiCog } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {AiFillTwitterSquare} from "react-icons/ai";
import {FaWhatsappSquare} from "react-icons/fa";

import { RiFlutterFill } from "react-icons/ri";

const iconSize = 28;

const SocialMedia = ()=>{
    return (
        <div className={Style.social_icon}>
        <div style={{ color: '#1877F2' }}>
            <FaFacebookSquare size={iconSize} />
        </div>

        <div style={{ color: 'black' }}>
            <FaGithubSquare size={iconSize} />
        </div>

        <div style={{ color: '#0073B1' }}>
            <FaLinkedin size={iconSize} />
        </div>
        <div style={{ color: '#1C9CEA' }}>
            <AiFillTwitterSquare size={iconSize} />
        </div>
        <div style={{ color: '#47C056' }}>
            <FaWhatsappSquare size={iconSize} />
        </div>
    </div>
    );
}
export default SocialMedia; 