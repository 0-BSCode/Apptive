import React from "react";
import icons from "@assets/images/icons";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-3 shadow-[0_0.3rem_1rem_0.1rem_rgba(0,0,0,0.1)]">
      <div className="bg-gradient--purple cdrop-shadow flex flex-col items-center justify-center rounded-full p-3">
        <img src={icons.pencilIcon} alt={"Logo"} className="w-5" />
      </div>
      <h1 className="text-lg font-semibold">Apptive</h1>
      <img src={icons.profileIcon} alt={"Profile"} className="w-6" />
    </nav>
  );
};

export default Navbar;
