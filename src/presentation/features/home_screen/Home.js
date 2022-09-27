import Style from "./Home.module.css";
import hadi from "../../../images/hadiuzzaman.png";
import { BiCog } from "react-icons/bi";
import CommonButton from "../../components/Button";

import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";

const iconSize= 28; 

const HomePage = () => {
    return (
        <div className={Style.main_container}>
            <div className={Style.home_top}>
                <div className={Style.home_top_container}>
                    <h1>Hey! <span className={Style.before_name}>I'm</span> <br /> <span className={Style.name}>Md Hadiuzzaman</span> </h1>
                    <h4 >Software Engineer @HeavyTask LLC</h4>
                    <h5>To work in various national and international software or tech giants companies in the world and grow rapidly with increasing responsibility.</h5>
                    <CommonButton title="Hire me"></CommonButton>
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
                    <BiCog size={50} />
                    <h2>Services</h2>
                    <p>Android and IOS development 100% <br /> Firebase Services 100% <br />Web development 70%</p>
                </div>
                <div className={Style.for_more}>
                    <h2>Looking for more ?</h2>
                    <p>To work in various national and international software firms or tech giants companies in the world,
                        and grow rapidly with increasing responsibility.
                    </p>
                    <CommonButton title="Download Resume"></CommonButton>
                    <div className={Style.social_icon}>
                        <MdMessage size={iconSize}/>
                        <BiAnalyse size={iconSize}/>
                        <BiCog size={iconSize}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;