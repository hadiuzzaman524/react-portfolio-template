import Style from "./Skills.module.css"; 
import cplus from "../../../images/cplus64x64.png";


const SkillCard = (props) => {
    return (
        <div className={Style.skill_box}>
            <div className={Style.skill_card}>
                <div className={Style.skill_image}>
                    <img src={props.image} />
                </div>
                <div className={Style.skill_details}>
                    <h2>{props.title}</h2>
                    <p>General purpose <br />Programming Language</p>
                </div>
            </div>
        </div>
    );
}
export default SkillCard; 