import React from "react";
import "./style/Home.css";
import MidComp from "./MidComp/MiddleComponent";
import { SideBar } from "./SideBar/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const Home = () => {
  return (
    <div className="HomePage">
      <div className="Row">
        <div className="Col col-1">
          <SideBar />
        </div>
        <div className="Col col-2">
          <BrowserRouter>
            <Routes>
              <Route path="/Feeds" element={<MidComp />} />
              {/* <Route path="/Threads" element={<Threads />} /> */}
              <Route path="/" element={<Navigate to="/Feeds" />} />
              {/* <Route path="/Profile" element={<Profile />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
        <div className="col-3">Last Component</div>
      </div>
    </div>
  );
};
