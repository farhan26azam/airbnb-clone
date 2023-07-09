import "./styles.css";
import { SCROLL_LINKS } from "../../Helpers/constants";
import { useRef, useState } from "react";

const ScrollFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [showList, setShowList] = useState(0);
  const filterDivRef = useRef(null);

  const handleForwardArrow = () => {
    const scrollWidth = filterDivRef.current.scrollWidth;
    const clientWidth = filterDivRef.current.clientWidth;
    const maxScroll = scrollWidth - clientWidth;

    setShowList((prevScroll) => {
      const newScroll = prevScroll + clientWidth;
      return newScroll > maxScroll ? maxScroll : newScroll;
    });
  };

  const handleBackArrow = () => {
    setShowList((prevScroll) => {
      const newScroll = prevScroll - filterDivRef.current.clientWidth;
      return newScroll < 0 ? 0 : newScroll;
    });
  };

  return (
    <div className="scroll-filter-container">
      {showList > 0 ? (
        <div className="left-arrow-container">
          <div className="arrow-button1" onClick={handleBackArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              transform="rotate(90)"
            >
              <path
                d="M2.66406 6L7.9974 11.3333L13.3307 6"
                stroke="#222222"
                strokeWidth="1.77778"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="left-arrow-container">{"  "}</div>
      )}
      <div
        className="filter-div"
        ref={filterDivRef}
        style={{ transform: `translateX(-${showList}px)` }}
      >
        {SCROLL_LINKS?.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i === selectedFilter && "selected-box"}`}
            onClick={() => {
              setSelectedFilter(i);
            }}
          >
            <img alt="list-item" src={item?.imgSrc} className="links-img" />
            <p
              className={`links-label ${
                i === selectedFilter && "selected-label"
              }`}
            >
              {item?.label?.slice(0,10)}
            </p>
          </div>
        ))}
      </div>

      {showList !== 5453 ? (
        <div className="right-arrow-container">
          <div className="arrow-button2" onClick={handleForwardArrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              transform="rotate(270)"
            >
              <path
                d="M2.66406 6L7.9974 11.3333L13.3307 6"
                stroke="#222222"
                strokeWidth="1.77778"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="right-arrow-container"></div>
      )}
    </div>
  );
};

export default ScrollFilter;
