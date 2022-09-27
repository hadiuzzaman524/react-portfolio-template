import Style from "./Education.module.css";

import EducationCard from "./EducationCard";
import school from "../../../images/bussh.png";
import baust from "../../../images/baust80x80.png";
import cpscr from "../../../images/cpscr.png";


const Education = () => {
    return (
        <div className={Style.main_container}>
            <h1>Education</h1>
            <div className={Style.education_top}>
            <EducationCard title="Bachelor Of Science in Engineering"
                    institute="Bangladesh Army University of Science and Technology, Saidpur."
                    year="Year: 2022"
                    board="Board: Dinajpur"
                    group="Department: CSE"
                    gpa="CGPA: 3.77/4.00"
                    degree="B.Sc"
                    image={baust}
                ></EducationCard>
                  <EducationCard title="Higher Secondary Certificate"
                    institute="Cantonment Public School and College, Rangpur."
                    year="Year: 2017"
                    board="Board: Dinajpur"
                    group="Group: Science"
                    gpa="GPA: 5.00/5.00"
                    degree="HSC"
                    image={cpscr}
                ></EducationCard>
            </div>

            <div className={Style.education_top}>
                <EducationCard title="Secondary School Certificate"
                    institute="Bir Uttam Shaheed Samad School and College, Rangpur."
                    year="Year: 2015"
                    board="Board: Dinajpur"
                    group="Group: Science"
                    gpa="GPA: 5.00/5.00"
                    degree="SSC"
                    image={school}
                ></EducationCard>
                  <EducationCard title="Junior School Certificate"
                    institute="Bir Uttam Shaheed Samad School and College, Rangpur."
                    year="Year: 2012"
                    board="Board: Dinajpur"
                    group="Group: NA"
                    gpa="GPA: 5.00/5.00"
                    degree="JSC"
                    image={school}
                ></EducationCard>
            </div>
         

        </div>
    );
}

export default Education;