import React from "react";
import Buttonstore from "../components/getButton";
import Applestore from "../assets/apple.png";
import Playstore from "../assets/playstore.png";
import Address from "../assets/location.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const text = {
    Apple: "Apple",
    Play: "Playstore",
  };
  return (
    <div className="mt-14">
      <div className="md:hidden">
        <Link to="/" className="flex justify-center mb-">
          <img src={Logo} alt="logo" />
        </Link>

        <ul className="flex justify-center gap-4 my-5">
          {[
            {
              sm: faFacebook,
              color: "#3b5998",
              link: "https://web.facebook.com/people/HospiYou/61556145362387/?mibextid=2JQ9oc",
            },
            {
              sm: faLinkedin,
              color: "#3b5998",
              link: "https://www.linkedin.com/company/hospiyou/",
            },
            { sm: faXTwitter, color: "black", link: "https://x.com/hospiyou" },
            {
              sm: faYoutube,
              color: "red",
              link: "https://www.youtube.com/@HospiYou?si=SaHcL3C0_fOcnlac",
            },
            {
              sm: faSquareInstagram,
              gradient: true,
              link: "https://www.instagram.com/hospi_you?igsh=dG9ocm56c2JpMTN2",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="w-10 h-10 flex items-center p-6 justify-center bg-green-100 rounded-full shadow-md hover:bg-green-200"
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
              >
                {item.gradient ? (
                  <div
                    style={{
                      background:
                        "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                      WebkitMask:
                        "url('data:image/svg+xml;base64," +
                        btoa(
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="${faSquareInstagram.icon[4]}" /></svg>`
                        ) +
                        "')",
                      WebkitMaskRepeat: "no-repeat",
                      WebkitMaskSize: "contain",
                      mask:
                        "url('data:image/svg+xml;base64," +
                        btoa(
                          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="${faSquareInstagram.icon[4]}" /></svg>`
                        ) +
                        "')",
                      maskRepeat: "no-repeat",
                      maskSize: "contain",
                      display: "inline-block",
                      width: "1.5em",
                      height: "1.5em",
                    }}
                  ></div>
                ) : (
                  <FontAwesomeIcon
                    icon={item.sm}
                    size="2x"
                    color={item.color || "black"}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <section className="grid grid-cols-2 gap-2 mx-3 my-7">
          <section className="section-one">
            <h3 className="text-primary font-bold text-lg">Legal</h3>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd9jeUdFfAyZyhrSQTiEaEA55Fiqokkk63eTEKGxI8qnzsFRw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Deletion of account
            </a>
            <br />
            <Link to="/privacy-policy">Privacy Policy</Link>
          </section>
          <section className="section-two">
            <h3 className="text-primary font-bold text-lg">Support</h3>
            <a
              href="https://hospiyou.com/DoctorsForm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hospiyou for Doctors
            </a>
          </section>

          <section className="section-three">
            <h3 className="text-primary font-bold text-lg">
              Terms & Conditions
            </h3>
            <a
              href="https://hospiyou.com/static/media/TERMS-AND-CONDITIONS-HOSPIYOU.5f11b2f8db7843824199.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Medical Practitioners
            </a>
            <br />
            <a
              href="https://hospiyou.com/static/media/TERMS-AND-CONDITIONS-HOSPIYOU.5f11b2f8db7843824199.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              For Individuals
            </a>
          </section>
          <section className="section-two">
            <h3 className="text-primary font-bold text-lg">Contact</h3>
            <a
              href="http://hospiyou-investors.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invest Now
            </a>
          </section>
        </section>

        <h3 className="text-2xl font-medium text-center mt-8">Download App</h3>
        <Buttonstore image={Applestore} text={text.Apple} />
        <Buttonstore image={Playstore} text={text.Play} />

        <div className="mx-5 my-10 flex items-center gap-3">
          <img src={Address} alt="location" />
          <p className="w-2/3">
            651 N Broad st Suite 201 City Middletown Zip code 19709 Country of
            New Castle, USA
          </p>
        </div>
        <div className="mx-5 my-10 flex items-center gap-3">
          <img src={Address} alt="location" />
          <p className="w-2/3">
            22 Road 7 Havana Estate, Sars road, Rupokwu Portharcourt, Nigeria
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="first_container md:grid md:grid-cols-2 lg:w-11/12">
          <div className="md:w-fit md:mx-auto">
            <Link to="/" className="flex justify-center md:justify-start">
              <img src={Logo} alt="logo" />
            </Link>
            <h3 className="text-2xl font-medium text-center mt-8 md:text-left">
              Download App
            </h3>
            <div>
              <div>
                <a
                  href="https://apps.apple.com/bg/app/hospiyou/id6504822148"
                  className="my-5 flex w-4/5 bg-primary justify-center gap-4 text-white py-2 px-3 mx-auto rounded-2xl hover:bg-hoverr md:items-center md:w-fit md:gap-2 md:ml-0"
                >
                  <img src={Applestore} alt="apple" />
                  <p>Get App on Apple store</p>
                </a>
              </div>
            </div>
            <Buttonstore image={Playstore} text={text.Play} />
          </div>

          <section className="grid grid-cols-2 gap-2 mx-3 my-7">
            <section className="section-one">
              <h3 className="text-primary font-bold text-lg">Legal</h3>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd9jeUdFfAyZyhrSQTiEaEA55Fiqokkk63eTEKGxI8qnzsFRw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Deletion of account
              </a>
              <br />
              <Link to="/privacy-policy">Privacy Policy</Link>
            </section>
            <section className="section-three">
              <h3 className="text-primary font-bold text-lg">
                Terms & Conditions
              </h3>
              <a
                href="https://hospiyou.com/static/media/TERMS-AND-CONDITIONS-HOSPIYOU.5f11b2f8db7843824199.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                For Medical Practitioners
              </a>
              <br />
              <a
                href="https://hospiyou.com/static/media/TERMS-AND-CONDITIONS-HOSPIYOU.5f11b2f8db7843824199.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                For Individuals
              </a>
            </section>

            <section className="section-two">
              <h3 className="text-primary font-bold text-lg">Support</h3>
              <a
                href="https://hospiyou.com/DoctorsForm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hospiyou for Doctors
              </a>
            </section>
            <section className="section-two">
              <h3 className="text-primary font-bold text-lg">Contact</h3>
              <a
                href="http://hospiyou-investors.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Invest Now
              </a>
            </section>
          </section>
        </div>

        <div className="second_container md:grid md:grid-cols-3 md:mx-6 lg:mx-20">
          <div className="mx-5 my-10 flex items-center gap-3 md:w-full md:items-start">
            <img src={Address} alt="location" />
            <p className="w-2/3">
              651 N Broad st Suite 201 City Middletown Zip code 19709 Country of
              New Castle, USA
            </p>
          </div>
          <div className="mx-5 my-10 flex items-center gap-3 md:w-full md:items-start">
            <img src={Address} alt="location" />
            <p className="w-2/3">
              22 Road 7 Havana Estate, Sars road, Rupokwu Portharcourt, Nigeria
            </p>
          </div>

          <ul className="flex justify-center md:items-center">
            {[
              {
                sm: faFacebook,
                color: "#3b5998",
                link: "https://web.facebook.com/people/HospiYou/61556145362387/?mibextid=2JQ9oc",
              },
              {
                sm: faLinkedin,
                color: "#3b5998",
                link: "https://www.linkedin.com/company/hospiyou/",
              },
              {
                sm: faXTwitter,
                color: "black",
                link: "https://x.com/hospiyou",
              },
              {
                sm: faSquareInstagram,
                gradient: true,
                link: "https://www.instagram.com/hospi_you?igsh=dG9ocm56c2JpMTN2",
              },
              {
                sm: faYoutube,
                color: "red",
                link: "https://www.youtube.com/@HospiYou?si=SaHcL3C0_fOcnlac",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="w-10 h-10 mx-1 flex items-center p-6 justify-center bg-green-100 rounded-full shadow-md hover:bg-green-200 lg:mx-2"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  {item.gradient ? (
                    <div
                      style={{
                        background:
                          "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                        WebkitMask:
                          "url('data:image/svg+xml;base64," +
                          btoa(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="${faSquareInstagram.icon[4]}" /></svg>`
                          ) +
                          "')",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        mask:
                          "url('data:image/svg+xml;base64," +
                          btoa(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white"><path d="${faSquareInstagram.icon[4]}" /></svg>`
                          ) +
                          "')",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        display: "inline-block",
                        width: "1.5em",
                        height: "1.5em",
                      }}
                    ></div>
                  ) : (
                    <FontAwesomeIcon
                      icon={item.sm}
                      size="2x"
                      color={item.color || "black"}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
