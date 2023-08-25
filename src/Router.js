import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lending from "./pages/Lending";
import Login from "./pages/Login";
import Minting from "./pages/Minting";
import { AnimatePresence } from "framer-motion";

function DefaultRouter () {
    return (
      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Lending />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Minting" element={<Minting />} />
          </Routes>
        </AnimatePresence>
    </Router>
    );
  };

export default DefaultRouter;