import React from "react";
import "./Logo.scss";
import Technoquizlogo from "../../assets/Technoquizlogo.png";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link className="logo" to="/">
    <img src={Technoquizlogo} alt="Navigate to HomePage" />
  </Link>
);

export default Logo;
