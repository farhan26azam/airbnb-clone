import "../styles.css";
import Line from "../../Helpers/HelperComponents";
import { DROPDOWN_HEADINGS } from "../../Helpers/constants";
const Options = () => {
  return (
    <div className="options-container">
      <div
        className="option"
        style={{ paddingRight: "16px", fontWeight: "590" }}
      >
        {DROPDOWN_HEADINGS[0]}
      </div>
      <Line />
      <div
        className="option"
        style={{ paddingRight: "16px", paddingLeft: "16px", fontWeight: "590" }}
      >
        {DROPDOWN_HEADINGS[1]}
      </div>
      <Line />
      <div className="option" style={{ paddingLeft: "16px" }}>
        {DROPDOWN_HEADINGS[2]}
      </div>
    </div>
  );
};

export default Options;
