import ContainerStyle from "./LeftContainer.module.css";

const url ="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg";
const LeftContainer = (props) => {
  return (
    <div className={ContainerStyle.left}>
  
        <img src={url} alt="Avatar"></img>
        <h1></h1>
        <h2>Md Hadiuzzaman</h2>
        <p>Software Engineer @HeavyTask LLC</p>
        <div className={ContainerStyle.gap}></div>

            <button>About Me</button>
            <button>Educations</button>
            <button>Skills</button>
            <button>Projects</button>
            <button>Blog</button>
            <button>Contacts</button>
        
    </div>
  );
};
export default LeftContainer;
