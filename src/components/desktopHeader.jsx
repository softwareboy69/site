import React from "react";
import Logo from "../assets/Logo.png";
import Mail from "../assets/mail.svg";
import Phone from "../assets/tel.svg"; // Add a phone icon if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const DesktopHeader = () => {
  return (
    <div className="hidden lg:flex items-center justify-between mt-5 w-4/5 mx-auto">
      {/* Contact and Logo Section */}
      <section className="flex items-center gap-16">
        {/* Contact Details */}
        <div className="flex gap-5">
          <div className="bg-green-100 flex items-center gap-3 px-4 py-2 rounded-lg shadow-md">
            <img src={Mail} alt="Email Icon" className="w-5 h-5" />
            <p className="text-sm text-gray-700">hospiyou@gmail.com</p>
          </div>
          <div className="bg-green-100 flex items-center gap-3 px-4 py-2 rounded-lg shadow-md">
            <img src={Phone} alt="Phone Icon" className="w-5 h-5" />
            <p className="text-sm text-gray-700">+2347037432078</p>
          </div>
        </div>
        {/* Logo */}
        <img src={Logo} alt="HospiYou Logo" className="w-32 h-auto" />
      </section>

      {/* Social Media Section */}
      <section>
        <ul className="flex gap-4">
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
              className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full shadow-md hover:bg-green-200"
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
                    size="lg"
                    color={item.color || "black"}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DesktopHeader;
