// src/App.jsx
import React, { useEffect, lazy, Suspense, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Core Components
import Header from "./components/Header.jsx";

// Lazy-loaded Pages (improves initial load speed)
const Home = lazy(() => import("./components/Home.jsx"));
const Wayanad = lazy(() => import("./components/Wayanad.jsx"));
const WeatherCard = lazy(() => import("./components/WeatherCard.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const Resorts = lazy(() => import("./components/Resorts.jsx"));
const Aboutus = lazy(() => import("./components/Aboutus.jsx"));
const Booknow = lazy(() => import("./components/Booknow.jsx"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy.jsx"));

// Blog Details
const BlogTribalCulture = lazy(() => import("./pages/BlogTribalCulture.jsx"));
const BlogWayanadClimate = lazy(() => import("./pages/BlogWayanadClimate.jsx"));
const BlogWayanadanPothumkaal = lazy(() =>
  import("./pages/BlogWayanadanPothumkaal.jsx")
);
const BlogAdventureWayanad = lazy(() =>
  import("./pages/BlogAdventureWayanad.jsx")
);
const BlogThiruneliTemple = lazy(() =>
  import("./pages/BlogThiruneliTemple.jsx")
);
const BlogCoffeePlantations = lazy(() =>
  import("./pages/BlogCoffeePlantations.jsx")
);

function AppLayout() {
  const location = useLocation();
  const hideHeader = useMemo(
    () => location.pathname === "/weather",
    [location]
  );

  return (
    <>
      {!hideHeader && <Header />}
      <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
        <Routes>
          {/* Redirect root to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Main Pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/wayanad" element={<Wayanad />} />
          <Route path="/weather" element={<WeatherCard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resorts" element={<Resorts />} />

          {/* Resorts with Scroll Targets */}
          {[
            { path: "/luxury-resorts", id: "luxury-resorts" },
            { path: "/premium-resorts", id: "premium-resorts" },
            { path: "/budget-friendly-resorts", id: "budget-resorts" },
            { path: "/private-pool-villas", id: "private-pool" },
          ].map(({ path, id }) => (
            <Route key={path} path={path} element={<Resorts scrollTo={id} />} />
          ))}

          {/* About & Booking */}
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/booknow" element={<Booknow />} />

          {/* Privacy Policy */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* Blog Detail Pages */}
          <Route path="/blogs/tribal-culture" element={<BlogTribalCulture />} />
          <Route path="/blogs/climate" element={<BlogWayanadClimate />} />
          <Route
            path="/blogs/pothumkaal"
            element={<BlogWayanadanPothumkaal />}
          />
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
      </Suspense>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
