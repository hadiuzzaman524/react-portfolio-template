import Style from "./Skills.module.css";
import cplus from "../../../images/cplus64x64.png";
import java from "../../../images/java64x64.png";
import dart from "../../../images/dart64x64.png";
import python from "../../../images/python64x64.png";
import php from "../../../images/php64x64.png";
import latex from "../../../images/latex.png";
import javascript from "../../../images/javascript.jpg";

import flutter from "../../../images/fltr.png";
import android from "../../../images/and.png";
import wordpress from "../../../images/wdp.png";
import react from "../../../images/rsz_react.png";
import ds from "../../../images/ds.jpg";
import algorithm from "../../../images/algo.jpg"
import problemsolving from "../../../images/problemsolving.png";
import skillset from "../../../images/skill_set.png";
import mysql from "../../../images/sql.png";
import hive from "../../../images/rsz_hive.png";
import firebase from "../../../images/firebase64x64.png";




import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className={Style.main_container}>
      <h1>Top Language</h1>
      <div className={Style.small_divider}></div>
      <div className={Style.skill_box_with_image}>
        <div className={Style.skill_left}>
          <img src={skillset} />
        </div>
        <div className={Style.skill_right}>
          <div className={Style.skill_set}>
            <SkillCard image={java} title="Java"></SkillCard>
            <SkillCard image={cplus} title="C++"></SkillCard>
            <SkillCard image={cplus} title="C"></SkillCard>
          </div>
          <div className={Style.skill_set}>
            <SkillCard image={dart} title="Dart"></SkillCard>
            <SkillCard image={javascript} title="Java Script"></SkillCard>
            <SkillCard image={python} title="Python"></SkillCard>
          </div>
          <div className={Style.skill_set}>
            <SkillCard image={php} title="PHP"></SkillCard>
            <SkillCard image={latex} title="Latex"></SkillCard>
          </div>
        </div>

      </div>
      <div className={Style.divider}></div>
      <h1>Top Framework</h1>
      <div className={Style.small_divider}></div>
      <div className={Style.skill_box_with_image}>
        <div className={Style.skill_left}>
          <img src={skillset} />
        </div>
        <div className={Style.skill_right}>
          <div className={Style.skill_set}>
            <SkillCard image={flutter} title="Flutter"></SkillCard>
            <SkillCard image={react} title="React Js"></SkillCard>
            <SkillCard image={android} title="Android"></SkillCard>
          </div>
          <div className={Style.skill_set}>
          <SkillCard image={wordpress} title="Wordpress"></SkillCard>
          </div>

        </div>

      </div>

      <div className={Style.divider}></div>
      <h1>Industry Knowledge</h1>
      <div className={Style.small_divider}></div>
      <div className={Style.skill_box_with_image}>
        <div className={Style.skill_left}>
          <img src={skillset} />
        </div>
        <div className={Style.skill_right}>
        <div className={Style.skill_set}>
            <SkillCard image={ds} title="Data Structure"></SkillCard>
            <SkillCard image={algorithm} title="Machine Learning"></SkillCard>
            <SkillCard image={algorithm} title="Deep Learning"></SkillCard>
            
          </div>
          <div className={Style.skill_set}>
            <SkillCard image={ds} title="Algorithms"></SkillCard>
            <SkillCard image={problemsolving} title="Problem Solving"></SkillCard>

          </div>
        </div>

      </div>

      <div className={Style.divider}></div>
      <h1>Database</h1>
      <div className={Style.small_divider}></div>
      <div className={Style.skill_box_with_image}>
        <div className={Style.skill_left}>
          <img src={skillset} />
        </div>
        <div className={Style.skill_right}>
        <div className={Style.skill_set}>
        <SkillCard image={mysql} title="MySQL"></SkillCard>
          <SkillCard image={firebase} title="Firebase"></SkillCard>
          <SkillCard image={hive} title="Flutter Hive"></SkillCard>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;

