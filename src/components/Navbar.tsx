import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white h-11 w-full flex justify-between text-black py-8 px-44 items-center">
      <a href="" className="logo">
        Prayer Requests
      </a>
      <div className="profile flex gap-4 items-center">
        <div className="sqaure w-10 h-10 flex items-center justify-center rounded-md bg-slate-600 text-white">
          SG
        </div>
        <p>Samatha Ghartey</p>
      </div>
    </div>
  );
};

export default Navbar;
