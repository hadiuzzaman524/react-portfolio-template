import HomePageBodyStyle from "./HomePageBody.module.css";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const HomePageBody = (props) => {
  return (
    <div className={HomePageBodyStyle.body_design}>
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
    
    </div>
    
  );
};

export default HomePageBody;
