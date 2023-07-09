
import "../styles.css"
import Line from '../../Helpers/HelperComponents'
const Options = () => {
  return (
    <div className="options-container">
        <div className="option" style={{paddingRight: "16px", fontWeight: "590"}}>
            AnyWhere
        </div>
        <Line/>
        <div className="option" style={{paddingRight: "16px", paddingLeft: "16px", fontWeight: "590"}}>
            Any Week
        </div>
        <Line/>
        <div className="option" style={{paddingLeft: "16px"}}>
            Add Guests
        </div>
    </div>
  )
}

export default Options