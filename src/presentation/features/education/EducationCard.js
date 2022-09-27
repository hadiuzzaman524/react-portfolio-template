import Style from "./Education.module.css";

const EducationCard = (props) => {
    return (
        <div className={Style.education_card}>
            <div className={Style.education_card_top}>
               <div className={Style.image}><img src={props.image}/></div>
               <div className={Style.education_info}>
                <h2>{props.title}</h2>
                <h3>{props.institute}</h3>
                <p><span>{props.year}<br/> {props.board} <br/> {props.group} <br/> {props.gpa}</span></p>
            
            </div>

            </div>
            <div className={Style.education_card_bottom}>
            <div className={Style.design}>
                {props.degree}
            </div>
            </div>
            
        </div>
    );
}
export default EducationCard; 

/*
 <div className={Style.education_info}>
                <h2>Secondary School Certificate</h2>
                <h3>Bir Uttam Shaheed Shamad School and College, Rangpur.</h3>
                <h4>Passing Year: 2015</h4>
                <h4>Board: Dinajpur</h4>
                <h4>Group: Science</h4>
                <h4>GPA: 5.00</h4>
            </div>
*/