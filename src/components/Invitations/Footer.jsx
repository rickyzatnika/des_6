import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-2 text-center bg-[#9c8450] text-sm">
      <Link to="https://dboard.webqodes.com" className="text-zinc-200">
        Powered By : WebQodes
      </Link>
    </div>
  );
};

export default Footer;
