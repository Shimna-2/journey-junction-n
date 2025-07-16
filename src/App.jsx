import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Resorts from "./components/Resorts";
// import Resorts from "./components/Resorts";
import HoneymoonResorts from "./components/Honeymoonresorts";
import LuxuryResorts from "./components/Luxuryresorts";
import PremiumResorts from "./components/Premiumresorts";
import BudgetResorts from "./components/Budgetfriendlyresorts";

import Aboutus from "./components/Aboutus";
import Booknow from "./components/Booknow";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Blog />} />
        {/* <Route path="/resorts" element={<Resorts />} /> */}
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/honeymoon-resorts" element={<HoneymoonResorts />} />
        <Route path="/luxury-resorts" element={<LuxuryResorts />} />
        <Route path="/premium-resorts" element={<PremiumResorts />} />
        <Route path="/budget-friendly-resorts" element={<BudgetResorts />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/booknow" element={<Booknow />} />
      </Routes>
    </Router>
  );
}

export default App;
