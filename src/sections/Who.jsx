import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import firstImage from "../assets/imagee1.png";
import secondImage from "../assets/imagee2.png";
import thirdImage from "../assets/imagee3.png";
import forthImage from "../assets/imagee4.png";
import fifthImage from "../assets/imagee5.png";
import sixthImage from "../assets/imagee6.png";
import HealthIcon from "../assets/healthicon.png";
import "../App.css";

const Who = () => {
  const sections = [
    {
      image: firstImage,
      alt: "Family Care",
      title: "For you and your Family",
      description:
        "Our AI-powered telemedicine application allows you to take medical tests and have remote consultations with local and international doctors, all from the comfort of your home.",
    },
    {
      image: secondImage,
      alt: "Medical Practitioners",
      title: "For Medical Practitioners",
      description:
        "Empower your practice with cutting-edge technology. Join Hospiyou to connect with patients globally, offer support remotely, and enhance your medical services through innovative features.",
    },
    {
      image: thirdImage,
      alt: "Medical Facilities",
      title: "For Medical Facilities",
      description:
        "Transform healthcare delivery, streamline operations, connect with patients seamlessly, and provide unparalleled services with a comprehensive platform.",
    },
    {
      image: forthImage,
      alt: "For Ambulance Companies",
      title: "For Ambulance Companies",
      description:
        "Streamlined services request, connects you with patients in need and ensures swift and efficient response time. Helping you save more lives while optimizing operations.",
    },
    {
      image: fifthImage,
      alt: "For Pharmacy Stores",
      title: "For Pharmacy Stores",
      description:
        "Expand pharmacy stores and their reach, improve medication access and provide seamless service to customers. ",
    },
    {
      image: sixthImage,
      alt: "For Institutions",
      title: "For Institutions",
      description:
        "Platforms for research, training and knowledge sharing and partnerships to deliver healthcare and education to  wider audience.",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div data-aos="fade-left" className="lg:mx-12 lgs:mx-20">
      <div className="flex items-baseline justify-center gap-1">
        <p className="text-primary text-center mt-16 mb-3">
          We exist for everyone in the world
        </p>
        <img
          src={HealthIcon}
          alt="Health Icon"
          className="relative -bottom-1"
        />
      </div>
      <p className="text-primary text-center text-3xl pb-5">
        Who is Hospiyou for?
      </p>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-green-100 mx-7 rounded-3xl pb-4 mb-8 last:mb-0 h-fit md:h-505 shadow-md hover:shadow-lg"
          >
            <img src={section.image} alt={section.alt} className="w-full" />
            <h3 className="my-5 text-xl font-medium px-2">{section.title}</h3>
            <p className="px-2 lg:text-lg">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Who;
