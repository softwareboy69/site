import React from "react";
import Button from "./Button";
import Logo from "../assets/Logo.png";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between p-6 items-center md:hidden">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Button />
      </div>
    </div>
  );
};

export default Header;
