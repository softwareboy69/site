import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HealthIcon from "../assets/healthicon.png";

const What = () => {
  const gains = [
    {
      title: "Insurance Companies",
      description:
        "Seamless integration for claims, health tracking, and premium services",
    },
    {
      title: "In-home Care Services",
      description:
        "Opportunities choose when and where to work based on availability",
    },
    {
      title: "Government of Nations",
      description:
        "Reduced strain on public healthcare facilities through telemedicine",
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex items-baseline justify-center gap-1">
        <p className="text-primary text-center mt-16 mb-3">
          We know you are probably wondering
        </p>
        <img
          src={HealthIcon}
          alt="Health Icon"
          className="relative -bottom-1"
        />
      </div>
      <p className="text-primary text-center text-3xl pb-5">
        What You Stand to Gain
      </p>
      <p className="text-center w-4/5 mx-auto">
        what you would get from being a part of Hospiyou
      </p>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-4/5 lg:mx-auto">
        {gains.map((gain, index) => (
          <div
            key={index}
            className="bg-gray-100 mx-7 pt-1 text-center mt-7 rounded-3xl pb-4 mb-8 last:mb-0 h-fit shadow-md hover:shadow-lg"
          >
            <h3 className="my-5 text-xl font-medium px-2">{gain.title}</h3>
            <p className="px-2 lg:text-lg">{gain.description}</p>
          </div>
        ))}
      </div>
      <div className="mr-7 md:mr-10 lg:w-111 flex justify-end">
        <Link
          to="/what-we-offer"
          className="text-center py-1 px-3 my-5 text-white bg-blue-500 rounded-full w-fit font-medium flex items-center gap-2 hover:bg-blue-700 transition-all"
        >
          Read More
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default What;
