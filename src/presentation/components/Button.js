import Style from "./Button.module.css";

const CommonButton = (props) =>{
    return (
        <button type='text' className={Style.button} onClick={props.onClick}>{props.title}</button>
    );
}

export default CommonButton; 