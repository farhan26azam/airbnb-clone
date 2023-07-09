
import ScrollFilter from "./ScrollFilter/ScrollFilter"
import ExtendedFilters from "./ExtendedFilters/ExtendedFilters"
import "./styles.css"
const MainFiltersContainer = () => {
  return (
    <div className="main-container">
        <ScrollFilter />
        <ExtendedFilters/>
    </div>
  )
}

export default MainFiltersContainer