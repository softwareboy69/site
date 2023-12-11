import React from "react";
import purple from "../images/purple.png";

const ourgoal = () => {
  return (
    <div className="whygeneral">
      <div className="whycarediv">
        <text className="whycare">Why do we care?</text>
        <text className="believe">
          We believe in accessible and quality healthcare for everyone. Our
          mission is to revolutionize the health industry, bridging the gap
          between patients and practitioners globally
        </text>
        <div className="goaldiv">
          <text className="goalheader">Our goal</text>
          <text className="set">
            We aim to set a new standard for accessible and efficient healthcare
          </text>
        </div>
      </div>
      <img src={purple} className="purple-style" alt="purplealt" />
    </div>
  );
};
export default ourgoal;