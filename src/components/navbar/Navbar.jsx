import React from "react";
import "./navbar.css";
import logoWithoutBg from "../../assets/logoNoBg.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-main-div">
        <div className="navbar-inner-div-1">
          <img
            src={logoWithoutBg}
            alt="DonateEase"
            className="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="navbar-inner-div-2">
          <ul className="nav-items">
            <li onClick={() => navigate("/about")}>About Us</li>
            <li>Donate</li>
            <li onClick={() => navigate("/contact-us")}>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
