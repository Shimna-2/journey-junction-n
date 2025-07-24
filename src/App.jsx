import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Blog from "./components/Blog";
import Home from "./components/Home";

import WeatherCard from "./components/WeatherCard";
import WeatherPreview from "./components/WeatherPreview";
import Resorts from "./components/Resorts";
import HoneymoonResorts from "./components/Honeymoonresorts";
import LuxuryResorts from "./components/Luxuryresorts";
import PremiumResorts from "./components/Premiumresorts";
import BudgetResorts from "./components/Budgetfriendlyresorts";
import PrivatepoolvillasResorts from "./components/Privatepoolvillas";
import Aboutus from "./components/Aboutus";
import Booknow from "./components/Booknow";
import Wayanad from "./components/Wayanad";

function AppLayout() {
  const location = useLocation();

  // Hide Header only on /weather route
  const hideHeader = location.pathname === "/weather";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<WeatherPreview />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wayanad" element={<Wayanad />} />
        <Route path="/weather" element={<WeatherCard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/honeymoon-resorts" element={<HoneymoonResorts />} />
        <Route path="/luxury-resorts" element={<LuxuryResorts />} />
        <Route path="/premium-resorts" element={<PremiumResorts />} />
        <Route path="/budget-friendly-resorts" element={<BudgetResorts />} />
        <Route
          path="/private-pool-villas"
          element={<PrivatepoolvillasResorts />}
        />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/booknow" element={<Booknow />} />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
