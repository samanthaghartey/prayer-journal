import React, { useState } from "react";
import { Link } from "react-router";
import { FaToggleOn } from "react-icons/fa6";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const handleExpand = () => {
    setExpanded((b) => !b);
  };

  return expanded ? (
    <div
      className={`${
        expanded ? "w-1/4" : "w-10"
      }  h-full px-4 bg-white flex flex-col justify-center gap-10 lg:items-center lg:w-1/6`}
    >
      <button onClick={handleExpand}>
        <FaToggleOn color="black" />
      </button>

      <div className="add-new">
        <button className="bg-accent2 py-6">New Request</button>
      </div>

      <div className="icons text-black flex flex-col gap-10">
        <Link to="/dashboard"> Dashboard</Link>
        <Link to="/bible"> Bible</Link>
        <Link to="/settings"> Settings</Link>
      </div>
    </div>
  ) : (
    <div className="collapsed  h-full bg-white">
      <button onClick={handleExpand}>
        <FaToggleOn color="black" />
      </button>
    </div>
  );
};

export default Sidebar;
