import { useState } from "react";

import { Router, Routes, Route } from "react-router";
import Requests from "./pages/Requests";
import Dashboard from "./pages/Dashboard";
import Bible from "./pages/Bible";
import Verses from "./pages/Verses";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-slate-600 ">
      <Navbar />

      <div className=" flex flex-row  h-full">
        <Sidebar />
        <div className="flex-1 h-full overflow-auto">
          <Routes>
            <Route path="/requests" element={<Requests />} />
            <Route index element={<Dashboard />} path="/dashboard" />
            <Route path="/bible" element={<Bible />} />
            <Route path="/verses" element={<Verses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
