/* eslint-disable no-unreachable */
import { useState } from "react";
import "./styles.css";
import LogoContainer from "./Logo/LogoContainer";
import DropDown from "./DropDown/DropDown";
import UserContainer from "./User/UserContainer";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  return (
    <div className="navbar">
      <LogoContainer />
      <DropDown />
      <UserContainer/>
    </div>
  );
};

export default Header;
