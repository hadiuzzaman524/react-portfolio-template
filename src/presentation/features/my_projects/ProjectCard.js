import Style from "./MyProjects.module.css";
import hireme from "../../../images/contact_set.png";
import { FaGithub } from 'react-icons/fa';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const ProjectCard = ()=>{
    return <div className={Style.project_card}>
    <div className={Style.project_image}>
        <img src={hireme} />
    </div>
    <div className={Style.project_details}>
        <h2>Mess Monitor</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div className={Style.project_link}>
            <FaGithub size={30} />
            <IoLogoGooglePlaystore size={30} />
            <FaYoutube size={30} />
        </div>
    </div>
</div>;
}
export default ProjectCard;