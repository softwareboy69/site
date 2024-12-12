import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About1 from "../assets/about1.svg";
import About2 from "../assets/about2.svg";
import Watch from "../assets/watch.svg";
import Desktop3 from "../assets/desktop3.png";
import Desktop4 from "../assets/desktop4.png";
import "../App.css";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease" });
  }, []);
  return (
    <div
      data-aos="fade-right"
      id="about"
      className="bg-primary pt-2 pb-7 px 5 lgs:px-16"
    >
      <div className="md:grid md:grid-cols-2 md:items-center">
        <div>
          <p className="text-gray-400 text-center md:text-left md:ml-8">
            Who are we?
          </p>
          <p className="text-white text-center text-3xl py-4 md:text-left md:ml-8">
            About Us
          </p>
          <p className="text-gray-300 text-center md:text-left md:ml-8 lg:hidden">
            Hospiyou is an AI powered global telemedical corporation that
            assists people get medically tested and diagnosed from anywhere and
            at anytime.
          </p>
          <p className="hidden text-gray-300 text-center md:text-left md:ml-8 lg:block lg:text-lg lg:w-4/5">
            Hospiyou is an AI powered global telemedical corporation that
            assists people get medically tested and diagnosed from anywhere and
            at anytime. Hospiyou serves as a middle man between patients and
            Medical facilities (Hospitals, Pharmacies, Laboratories, etc, an
            emergency response ambulance system, and as a system that helps to
            facilitate medical services).
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 p-6 md:gap-0">
          <div className="rounded-lg overflow-hidden shadow-lg relative right-20 lg:right-56 lg:top-16">
            <img
              src={About1}
              alt=""
              srcset=""
              className="w-full h-auto object-cover lg:hidden"
            />
            <img
              src={Desktop3}
              alt=""
              srcset=""
              className="w-full h-auto object-cover hidden lg:block"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg relative left-16">
            <img
              src={About2}
              alt=""
              srcset=""
              className="w-full h-auto object-cover lg:hidden"
            />
            <img
              src={Desktop4}
              alt=""
              srcset=""
              className="w-full h-auto object-cover hidden lg:block"
            />
          </div>
        </div>

        <div>
          {/* Button to Open Modal */}
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              openModal(); // Open the modal
            }}
            className="flex items-center md:-mt-16 md:ml-3 lg:-mt-32"
          >
            <p className="bg-green-300 text-primary font-bold mx-5 py-1 px-3 rounded-2xl">
              Watch Video
            </p>
            <img src={Watch} alt="Watch" width="30" />
          </a>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
              onClick={closeModal} // Close modal when clicking outside
            >
              <div
                className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

                {/* Embedded YouTube Video */}
                <div className="aspect-w-16 aspect-h-16">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ID2nMc0kA-o"
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
