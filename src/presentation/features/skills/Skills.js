import Style from "./Skills.module.css"; 
import cplus from "../../../images/cplus64x64.png";
import java from "../../../images/java64x64.png";
import dart from "../../../images/dart64x64.png";
import python from "../../../images/python64x64.png";
import php from "../../../images/php64x64.png";
import latex from "../../../images/latex.png";
import javascript from "../../../images/javascript.jpg";

import SkillCard from "./SkillCard";

const Skills= ()=>{
    return(
        <div className={Style.main_container}>
        <h1>Top Languages</h1>
        <div className={Style.skill_set}>
          <SkillCard image={java} title="Java"></SkillCard>
          <SkillCard image={cplus} title="C++"></SkillCard>
          <SkillCard image={cplus} title="C"></SkillCard>
          <SkillCard image={javascript} title="Java Script"></SkillCard>
        </div>
        <div className={Style.skill_set}>
          <SkillCard image={dart} title="Dart"></SkillCard>
          <SkillCard image={python} title="Python"></SkillCard>
          <SkillCard image={php} title="PHP"></SkillCard>
          <SkillCard image={latex} title="Latex"></SkillCard>

        </div>
          
        <h1>Top Framework</h1>
        <div className={Style.skill_set}>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
        </div>
        <div className={Style.skill_set}>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
          <SkillCard></SkillCard>
        </div>
         
        </div>
    );
}

export default Skills;