import React from "react";
import Logo from "../../../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="text-center pt-6">
      <img className="mx-auto mb-6" src={Logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p className="text-xl mt-2">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;
