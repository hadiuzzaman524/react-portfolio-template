import Style from "../my_projects/MyProjects.module.css";
import hireme from "../../../images/contact_set.png";
import { MdOutlineWeb } from 'react-icons/md';

import { FaFilePdf } from "react-icons/fa";

const ResearchCard = ()=>{
    return <div className={Style.project_card}>
    <div className={Style.project_image}>
        <img src={hireme} />
    </div>
    <div className={Style.project_details}>
        <h2>Bangla Sign Language Recognition Using Neural Network</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        <div className={Style.project_link}>
            <p>View Publication</p>
            <MdOutlineWeb size={25} />
        <p>View PDF</p>
            <FaFilePdf size={25} />
        </div>
    </div>
</div>;
}
export default ResearchCard;