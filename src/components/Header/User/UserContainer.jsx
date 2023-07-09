import "../styles.css";

import worldIcon from "../../../assets/icons/worldIcon.png";
import userIcon from "../../../assets/icons/userIcon.png";
import MenuIcon from '@mui/icons-material/Menu';
const UserContainer = () => {
  return (
    <div className="user-container">
      <span className="become-a-host">Become a Host</span>
      <div style={{ marginLeft: "24px", paddingTop: "5px" }}>
        <img src={worldIcon} />
      </div>
      <div className="user-menu">
        <MenuIcon sx={{marginLeft: ""}}/>
        <img src={userIcon} className="user-icon" />
      </div>
    </div>
  );
};

export default UserContainer;
