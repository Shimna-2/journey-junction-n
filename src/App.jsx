import React, { useEffect, lazy, Suspense, useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Core Components (lazy for performance)
const Header = lazy(() => import("./components/Header.jsx"));

// Lazy-loaded Pages
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

function AppLayout({ loading }) {
  const location = useLocation();

  // Hide header only on weather page
  const hideHeader = useMemo(
    () => location.pathname === "/weather",
    [location]
  );

  if (loading) {
    // Full-screen loader before showing anything
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black font-[Poppins]">
        <div className="w-20 h-20 border-8 border-white/30 border-t-white rounded-full animate-spin"></div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide text-center">
          Journey Junction
        </h1>
      </div>
    );
  }

  return (
    <>
      {!hideHeader && <Header />}
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-screen bg-black font-[Poppins]">
            <div className="w-20 h-20 border-8 border-white/30 border-t-white rounded-full animate-spin"></div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide text-center">
              Journey Junction
            </h1>
          </div>
        }
      >
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
    } catch (error) {
      console.error("AOS init failed:", error);
    }

    // Show loader only on first visit of session
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <Router>
      <AppLayout loading={loading} />
    </Router>
  );
}

export default App;
