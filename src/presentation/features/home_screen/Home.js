import Style from "./Home.module.css";
import hadi from "../../../images/hadiuzzaman.png";

const HomePage = () => {
    return (
        <>
            <div className={Style.home_top}>
                <div className={Style.home_top_container}>
                    <h1>Hey! <span className={Style.before_name}>I'm</span> <br /> <span className={Style.name}>Md Hadiuzzaman</span> </h1>
                    <h4 >Software Engineer @HeavyTask LLC</h4>
                    <h5>To work in various national and international software or tech giants companies in the world and grow rapidly with increasing responsibility.</h5>
                    <button>Hire Me</button>
                </div>
                    <img src={hadi} />
                
            </div>
            <div className={Style.home_bottom}>
                <div className={Style.home_bottom_container}>
                    <div className={Style.my_scrvices}>
                        Services
                    </div>
                    <div className={Style.resume}>
                        Resume
                    </div>
                    <div className={Style.resume}>
                        Resume
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;