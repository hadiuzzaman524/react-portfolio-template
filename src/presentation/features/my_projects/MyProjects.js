import Style from "./MyProjects.module.css";

import ProjectCard from "./ProjectCard";

const MyProjects = () => {
    return (
        <div className={Style.main_container}>
            
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    );
}

export default MyProjects;