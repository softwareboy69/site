import React from "react";
import Footer from "../sections/Footer";
import Logo from "../assets/Logo.png";
import HealthIcon from "../assets/healthicon.png";

const What = () => {
  const gains = [
    {
      title: "Insurance Companies",
      description:
        "Seamless integration for claims, health tracking, and premium services",
      descriptionTwo:
        "Verified consultations and health records streamline claims processing",
      descriptionThree:
        "AI tools help reduce long term health risks, lowering costs",
    },
    {
      title: "In-home Care Services",
      description:
        "Opportunities choose when and where to work based on availability",
      descriptionTwo: "Choose when and where to work based on availability",
      descriptionThree:
        "Connection to a larger patient pool through the platforms",
    },
    {
      title: "Government of Nations",
      description:
        "Reduced strain on public healthcare facilities through telemedicine",
      descriptionTwo:
        "Bridging healthcare gaps in remote and undeserved communities",
      descriptionThree:
        "Aggregate healthcare trends for policy planning and disease management",
    },
    {
      title: "Patients and Users",
      description:
        "Access to global medical professionals via video, voice, and chat anytime, anywhere",
      descriptionTwo:
        "Quick and reliable preliminary diagnosis from the comfort of their homes",
      descriptionThree:
        "Personalized care for recovery or ongoing treatment needs",
    },
    {
      title: "Medical Professionals",
      description:
        "Freedom to set consultations prices between $1-$150 empowering income flexibility",
      descriptionTwo:
        "Connect with patients worldwide, expanding practice opportunities",
      descriptionThree:
        "Exposure to a diverse range of medical cases and global recognition",
    },
    {
      title: "Pharmacy Stores",
      description:
        "Increased sales through app based prescription and medication delivery services",
      descriptionTwo:
        "Serve more customers, including those in remote or undeserved locations",
      descriptionThree: "Optimize stock control and order handling",
    },
    {
      title: "Ambulance Companies",
      description: "Efficient management of bookings, locations, and routing",
      descriptionTwo:
        "Greater visibility to users needing urgent care transportation",
      descriptionThree: "Integrated location based tools for rapid deployment",
    },
    {
      title: "Elderly/Old-Aged Citizens",
      description: "Easy to use features ensure convenient care without travel",
      descriptionTwo:
        "Personalized nursing, medication delivery, and health monitoring",
      descriptionThree:
        "Emergency features and remote consultation for urgent needs",
    },
    {
      title: "Physically Disabled",
      description:
        "Healthcare services delivered remotely, tailored for their mobility challenges",
      descriptionTwo:
        "AI tools and wearable devices for continuous health monitoring",
      descriptionThree:
        "Personalized nursing and therapy services at their convenience",
    },
  ];
  return (
    <div>
      <div className="flex justify-between p-6 items-center">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <div>
          <a
            href="/"
            className="bg-primary text-white font-bold py-2 px-3 rounded-2xl hover:bg-hoverr"
          >
            Download App!
          </a>
        </div>
      </div>
      <div className="flex items-baseline justify-center gap-1">
        <p className="text-primary text-center mt-16 mb-3">
          We know you are probably wondering
        </p>
        <img src={HealthIcon} alt="Health Ico" className="relative -bottom-1" />
      </div>

      <p className="text-primary text-center text-3xl pb-5">
        What You Stand to Gain
      </p>
      <p className="text-center w-4/5 mx-auto">
        Following the launch of our mobile app, here are some unique services we
        offer.
      </p>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:w-4/5 lg:mx-auto">
        {gains.map((gain, index) => (
          <div
            key={index}
            className="bg-gray-100 mx-7 pt-1 text-center mt-7 rounded-3xl pb-4 mb-8 last:mb-0 h-fit md:h-96 shadow-md hover:shadow-lg"
          >
            <h3 className="my-5 text-xl font-medium px-2">{gain.title}</h3>
            <p className="px-2 lg:text-lg">{gain.descriptionTwo}</p>
            <p className="px-2 lg:text-lg my-10">{gain.descriptionThree}</p>
            <p className="px-2 lg:text-lg">{gain.descriptionThree}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default What;
