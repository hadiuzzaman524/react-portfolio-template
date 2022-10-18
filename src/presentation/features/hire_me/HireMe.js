import SmallDivider from "../components/SmallDivider";
import Style from "./HireMe.module.css";
import hireme from "../../../images/contact_set.png";
import  { ReactComponent as HireMeSvg } from "../../../images/contact.svg";


const HireMe = () => {
    return (
        <div className={Style.main_container}>
  
            <div className={Style.hireme_container}>
               
                <div className={Style.hireme_right}>
                   
                    <div className={Style.hire_form}>
                    <h2>Ready to hire me? Please fill up the form and reach me!</h2>
                    <label>Your Name</label>
                    <input type="text" className={Style.form_input}></input>
                    <label>Your Contact Number</label>
                    <input type="text" className={Style.form_input}></input>
                    <label>Your Email</label>
                    <input type="text" className={Style.form_input}></input>
                    <label>Describe your work</label>
                    <input type="text" className={Style.description}></input>
                    <button>Submit</button>
                    </div>
                </div>
                <div className={Style.hireme_left}>
                    <HireMeSvg/>
                </div>
            </div>
        </div>
    );
}

export default HireMe;