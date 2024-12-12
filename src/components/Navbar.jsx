import React from "react";
import Button from "./Button";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          className=" hidden md:block lg:hidden mx-auto mt-5"
        />
      </Link>
      <div className="hidden md:block border-y-2 mx-5 border-dashed border-y-primaryopa py-3 md:mt-5 lg:mt-20 lg:w-4/5 lg:mx-auto">
        <div className="flex justify-around">
          <ul className="w-8/12 flex justify-end gap-5 lg:w-4/5 lg:justify-center lg:pl-20">
            <li>
              <a href="#about" className="text-primary hover:font-bold">
                About Us
              </a>
            </li>
            <li>
              <a href="#goals" className="text-primary hover:font-bold">
                Our Goals
              </a>
            </li>
            <li>
              <a href="#services" className="text-primary hover:font-bold">
                Our Services
              </a>
            </li>
            <li>
              <a href="#newsletter" className="text-primary hover:font-bold">
                Newsletter
              </a>
            </li>
          </ul>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
