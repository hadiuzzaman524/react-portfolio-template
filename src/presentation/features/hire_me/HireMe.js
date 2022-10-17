import SmallDivider from "../components/SmallDivider";
import Style from "./HireMe.module.css";
import hireme from "../../../images/contact_set.png";

const HireMe = () => {
    return (
        <div className={Style.main_container}>
            <h1>Hire Me</h1>
            <SmallDivider></SmallDivider>

            <div className={Style.hireme_container}>
               
                <div className={Style.hireme_right}>
                    
                    <div className={Style.hire_form}>
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
                    <img src={hireme} />
                </div>
            </div>
        </div>
    );
}

export default HireMe;