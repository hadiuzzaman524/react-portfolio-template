import ContainerStyle from "./RightContainer.module.css";

const RightContainer = (props) => {
  return <div className={ContainerStyle.right}>
    <div className={ContainerStyle.right_top}>
    <h2>About Me</h2>
    </div>
  <div className={ContainerStyle.right_content}>Bangladesh Is my Motherland</div>
  </div>;
};

export default RightContainer;
