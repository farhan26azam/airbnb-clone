
import "../styles.css"
import Options from "./Options"

import searchIcon from '../../../assets/icons/searchIcon.png';

const DropDown = () => {
  return (
    <div className="dropdown">
      <Options/>
      <img src={searchIcon} className="search-logo" />
    </div>
  )
}

export default DropDown