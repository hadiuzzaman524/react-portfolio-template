import ContainerStyle from "./LeftContainer.module.css";

const url =
  "https://yt3.ggpht.com/yti/AJo0G0mEQSBSpuCHeLyaw0BWRpxgYyGI80ZLdzj6XJLWMw=s108-c-k-c0x00ffffff-no-rj";
const LeftContainer = (props) => {
  return (
    <div className={ContainerStyle.left}>
      <div className={ContainerStyle.center}>
        <img src={url} alt="Avatar"></img>
        <p></p>
        <h2>Md Hadiuzzaman</h2>
        <p>Software Engineer @HeavyTask LLC</p>
        <p></p>

            <button>About Me</button>
            <button>Educations</button>
            <button>Skills</button>
            <button>Projects</button>
            <button>Blog</button>
            <button>Contacts</button>
        
      </div>
    </div>
  );
};
export default LeftContainer;
