import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Phone from "../assets/Phone.png";
import Desktop from "../assets/desktop.png";
import "../App.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div data-aos="fade">
      <section>
        <p className="mx-4 text-center mt-10 font-bold text-4xl bg-custom-gradient bg-clip-text text-transparent lg:w-3/5 lg:mx-auto lg:text-5xl lgs:text-6xl">
          Making quality healthcare available for everyone.
        </p>
        <p className="text-center mt-5 mx-auto p-1 lg:w-2/5 lgs:w-1/3">
          Welcome to Hospiyou, where quality healthcare meets you where you are.
        </p>
        <img
          className="mt-5 mx-auto lg:hidden"
          src={Phone}
          alt=""
          width="300"
        />
        <img
          className="hidden mt-5 mx-auto lg:block"
          src={Desktop}
          alt=""
          width="300"
        />
      </section>
    </div>
  );
};

export default Hero;
