import React from "react";
import Phone2 from "../assets/phone2.svg";
import Desktop1 from "../assets/Desktopphone.png";
import HealthIcon from "../assets/healthicon.png";

const Why = () => {
  return (
    <div
      id="goals"
      className="md:grid md:grid-cols-2 md:place-items-center md:mx-8 lg:mt-10"
    >
      <div className="md:order-2">
        <div className="flex items-baseline justify-center gap-1">
          <p className="text-primary text-center mt-16 mb-3">
            Your health is our priority
          </p>
          <img
            src={HealthIcon}
            alt="Health Icon"
            className="relative -bottom-1"
          />
        </div>

        <p className="text-primary text-center text-3xl pb-5">Why do we Care</p>
        <p className="text-center w-4/5 mx-auto md:text-left lg:w-4/6">
          We believe in accessible and quality healthcare for everyone. Our
          mission is to revolutionize the health industry, bridging the gap
          between patients and practitioners globally
        </p>

        <div className="bg-primary text-white mx-5 my-10 pt-2 pb-4 px-2 shadow-2xl shadow-gray-500 rounded-xl md:mt-5 lg:w-fit lg:mx-auto lg:px-5">
          <h3 className="text-2xl font-medium mt-2">Our Goal</h3>
          <p className="opacity-70 w-full text-xs">
            We aim to set a new standard for accessible and efficient healthcare
          </p>
        </div>
      </div>

      <img
        src={Phone2}
        alt=""
        srcset=""
        className="mx-auto md:order-1 lg:hidden"
      />
      <img
        src={Desktop1}
        width="350"
        alt=""
        srcset=""
        className="hidden mx-auto md:order-1 lg:block"
      />
    </div>
  );
};

export default Why;
