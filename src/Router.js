import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import Bet from "./pages/Game/Bet";
import Rps from "./pages/Game/Rps";


function DefaultRouter () {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Lending />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Minting" element={<Minting />} />
          <Route path="/Bet" element={<Bet />} />
          <Route path="/Rock-paper-scissors" element={<Rps />} />
        </Routes>
    </Router>
    );
  };

export default DefaultRouter;