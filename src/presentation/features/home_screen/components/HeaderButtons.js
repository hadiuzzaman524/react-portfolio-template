import headerButtonStyle from "./HeaderButtons.module.css";

const HeaderButton = (props) => {
  return (
    <div className={headerButtonStyle.button}>
      <span><p>About Me</p></span>
      <span><p>Educations</p></span>
      <span><p>Skills</p></span>
      <span><p>Projects</p></span>
      <span><p>Blog</p></span>
      <span><p>Contact</p></span>
    </div>
  );
};

export default HeaderButton;
