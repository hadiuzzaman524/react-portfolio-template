import Style from "./Research.module.css"; 

import { ReactComponent as ResearchSvg } from "../../../images/research.svg";
import SmallDivider from "../components/SmallDivider";
import ProjectCard from "../my_projects/ProjectCard";
import ResearchCard from "./ResearchCard";
const Research= ()=>{
    return(
        <div className={Style.main_container}>
            <div className={Style.tag_image}>
                <div className={Style.tag}>
                 <h1>Are you interested to view my research work?</h1>
                 <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,</p>
                </div>
                <div className={Style.research_image}>
                <ResearchSvg/>
                </div>
            </div>
            <h1>My Research Work</h1>
            <SmallDivider></SmallDivider>
            <div className={Style.research_list}>
               <ResearchCard/>
               <ResearchCard/>
               <ResearchCard/>
            </div>
        </div>
    );
}

export default Research;