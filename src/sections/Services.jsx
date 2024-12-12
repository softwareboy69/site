import React from "react";

import Buttonstore from "../components/getButton";
import Applestore from "../assets/apple.png";
import Playstore from "../assets/playstore.png";
import Phone3 from "../assets/phone3.png";
import Desktop2 from "../assets/Desktop2.png";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import Icon5 from "../assets/icon5.png";
import Icon6 from "../assets/icon6.png";
import Icon7 from "../assets/icon7.png";
import Icon8 from "../assets/icon8.png";
import Icon9 from "../assets/icon9.png";
import Icon10 from "../assets/icon10.svg";
import HealthIcon from "../assets/healthicon.png";

const Services = () => {
  const text = {
    Apple: "Apple",
    Play: "Playstore",
  };
  return (
    <div id="services">
      <div className="flex items-baseline justify-center gap-1">
        <p className="text-primary text-center mt-16 mb-3">We aim to please</p>
        <img
          src={HealthIcon}
          alt="Health Icon"
          className="relative -bottom-1"
        />
      </div>

      <p className="text-primary text-center text-3xl pb-5">
        Our Unique Services
      </p>
      <p className="text-center w-4/5 mx-auto">
        Following the launch of our mobile app, here are some unique services we
        offer.
      </p>
      <div className="md:flex md:justify-center md:gap-5">
        <Buttonstore image={Applestore} text={text.Apple} />
        <Buttonstore image={Playstore} text={text.Play} />
      </div>

      <div className="lg:flex lg:items-center lg:justify-center lg:gap-10 lg:mx-36">
        <img src={Phone3} alt="" className="mx-auto mt-8 lg:hidden" />
        <img src={Desktop2} alt="" className="hidden mx-auto mt-8 lg:block" />

        <section className="md:grid md:grid-cols-2 md:gap-3 md:mx-10">
          <ul>
            {[
              { img: Icon1, text: "Hospiyou for medical Facilities" },
              { img: Icon2, text: "AI powered medical test" },
              { img: Icon3, text: "Wearable and more" },
              { img: Icon4, text: "Remote consultation" },
              { img: Icon10, text: "Inhome Nursing Care" },
            ].map((item, index) => (
              <li
                key={index}
                className="my-5 flex w-4/5 justify-start border-2 border-green-300 gap-4 py-2 px-3 mx-auto rounded-2xl md:w-full md:gap-2 md:items-center"
              >
                <img src={item.img} alt={item.text} />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>

          <ul>
            {[
              { img: Icon7, text: "Mobile Pharmacy" },
              { img: Icon8, text: "Period Tracker" },
              { img: Icon9, text: "Sleep and Stress Management" },
              { img: Icon6, text: "Ambulance SAAS" },
              { img: Icon5, text: "Medical Robot" },
            ].map((item, index) => (
              <li
                key={index}
                className="my-5 flex w-4/5 justify-start border-2 border-green-300 gap-4 py-2 px-3 mx-auto rounded-2xl md:w-full md:gap-2 md:items-center"
              >
                <img src={item.img} alt={item.text} />
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Services;
