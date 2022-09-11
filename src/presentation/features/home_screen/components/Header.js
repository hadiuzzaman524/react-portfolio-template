import headerStyle from "./Header.module.css";
import HeaderButton from "./HeaderButtons";



const Header = (props) => {
    return (
        <div className={headerStyle.header}>
          <HeaderButton/>
        </div>
    );
}

export default Header; 