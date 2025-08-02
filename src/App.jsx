import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

// Main Components
import Header from "./components/Header.jsx";
import Blog from "./components/Blog.jsx";
import Home from "./components/Home.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import Resorts from "./components/Resorts.jsx";
import Aboutus from "./components/Aboutus.jsx";
import Booknow from "./components/Booknow.jsx";
import Wayanad from "./components/Wayanad.jsx";

// Blog Detail Pages (moved to src/pages/)
import BlogTribalCulture from "./pages/BlogTribalCulture.jsx";
import BlogWayanadClimate from "./pages/BlogWayanadClimate.jsx";
import BlogWayanadanPothumkaal from "./pages/BlogWayanadanPothumkaal.jsx";
import BlogAdventureWayanad from "./pages/BlogAdventureWayanad.jsx";
import BlogThiruneliTemple from "./pages/BlogThiruneliTemple.jsx";
import BlogCoffeePlantations from "./pages/BlogCoffeePlantations.jsx";

function AppLayout() {
  const location = useLocation();
  const hideHeader = location.pathname === "/weather";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        {/* Redirect / to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Main Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/wayanad" element={<Wayanad />} />
        <Route path="/weather" element={<WeatherCard />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resorts" element={<Resorts />} />

        {/* Resorts with scroll props */}
        <Route
          path="/luxury-resorts"
          element={<Resorts scrollTo="luxury-resorts" />}
        />
        <Route
          path="/premium-resorts"
          element={<Resorts scrollTo="premium-resorts" />}
        />
        <Route
          path="/budget-friendly-resorts"
          element={<Resorts scrollTo="budget-resorts" />}
        />
        <Route
          path="/private-pool-villas"
          element={<Resorts scrollTo="private-pool" />}
        />

        {/* About & Booking */}
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/booknow" element={<Booknow />} />

        {/* Blog Detail Pages */}
        <Route path="/blogs/tribal-culture" element={<BlogTribalCulture />} />
        <Route path="/blogs/climate" element={<BlogWayanadClimate />} />
        <Route path="/blogs/pothumkaal" element={<BlogWayanadanPothumkaal />} />
        <Route
          path="/blogs/adventure-wayanad"
          element={<BlogAdventureWayanad />}
        />
        <Route path="/blogs/thiruneli" element={<BlogThiruneliTemple />} />
        <Route
          path="/blogs/coffee-plantations"
          element={<BlogCoffeePlantations />}
        />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AppLayout />
      </Router>
    </HelmetProvider>
  );
}

export default App;
