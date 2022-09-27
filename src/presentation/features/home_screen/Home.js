import Style from "./Home.module.css";
import hadi from "../../../images/hadiuzzaman.png";
import { BiCog } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import {CgWebsite} from "react-icons/cg";
import {GiArtificialIntelligence} from "react-icons/gi";
import CommonButton from "../../components/Button";

import { RiFlutterFill } from "react-icons/ri";
import {SiFirebase} from "react-icons/si";
import SocialMedia from "../../components/SocialMedia";


const iconSize = 28;

const HomePage = () => {
    return (
        <div className={Style.main_container}>
            <div className={Style.home_top}>
                <div className={Style.home_top_container}>
                    <h1>Hey! <span className={Style.before_name}>I'm</span> <br /> <span className={Style.name}>Md Hadiuzzaman</span> </h1>
                    <h4 >Software Engineer @HeavyTask LLC</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electro</p>
                    <CommonButton title="Hire me"></CommonButton>
                    <SocialMedia></SocialMedia>
                </div>
                <img src={hadi} />

            </div>

            <div className={Style.home_bottom}>

                <div className={Style.my_scrvices}>
                    <div className={Style.outer_circle}>
                        <div className={Style.inner_circle}>
                            <div className={Style.inner_circle2}><h2>15+</h2></div>
                        </div>
                    </div>
                    <h2>Project Done</h2>

                </div>
                <div className={Style.my_scrvices}>
                    <h2>My Services</h2>
                    <p> <span>
                        <RiFlutterFill size={20} />
                    </span> Flutter Development 100% <br />
                     <span><SiFirebase size={20} />  Firebase Services 100% </span><br /> 
                     <span><CgWebsite size={20} /> Web development 70%</span> <br />
                      <span><GiArtificialIntelligence size={20} /> Machine learning 70%</span></p>
                </div>
                <div className={Style.for_more}>
                    <h2>Looking for more ?</h2>
                    <p>To work in various national and international software firms or tech giants companies in the world,
                        and grow rapidly with increasing responsibility.
                    </p>
                    <CommonButton title="Download Resume"></CommonButton>
                    <SocialMedia></SocialMedia>
                </div>
            </div>
        </div>
    );
}

export default HomePage;