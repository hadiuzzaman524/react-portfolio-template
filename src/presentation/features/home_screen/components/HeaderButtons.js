import headerButtonStyle from "./HeaderButtons.module.css";

const HeaderButton = (props) => {
  return (
    <div className={headerButtonStyle.button}>
      <span><p>Portfolio</p></span>
      <span><p>Blog</p></span>
      <span><p>Hire me</p></span>
      <span><p>Contact</p></span>
    </div>
  );
};

export default HeaderButton;
