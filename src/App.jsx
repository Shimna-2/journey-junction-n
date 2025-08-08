import React, {
  useEffect,
  lazy,
  Suspense,
  useMemo,
  useState,
  memo,
} from "react";
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

// Loader Component
const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-black font-[Poppins]">
    <div className="w-20 h-20 border-8 border-white/30 border-t-white rounded-full animate-spin"></div>
    <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide text-center">
      Journey Junction
    </h1>
  </div>
);

// Global persistent Home state
let homeInstance = null;

const AppLayout = memo(({ loading }) => {
  const location = useLocation();
  const hideHeader = useMemo(
    () => location.pathname === "/weather",
    [location]
  );

  if (loading) return <Loader />;

  return (
    <>
      {!hideHeader && <Header />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              homeInstance || (homeInstance = <Home key="persistent-home" />)
            }
          />
          <Route path="/wayanad" element={<Wayanad />} />
          <Route path="/weather" element={<WeatherCard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resorts" element={<Resorts />} />

          {[
            { path: "/luxury-resorts", id: "luxury-resorts" },
            { path: "/premium-resorts", id: "premium-resorts" },
            { path: "/budget-friendly-resorts", id: "budget-resorts" },
            { path: "/private-pool-villas", id: "private-pool" },
          ].map(({ path, id }) => (
            <Route key={path} path={path} element={<Resorts scrollTo={id} />} />
          ))}

          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/booknow" element={<Booknow />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

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
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Preload optimized hero images for mobile & desktop
    const mobileHero = new Image();
    mobileHero.src = "/assets/images/home-banner-mobile-compressed.webp"; // compressed mobile
    const desktopHero = new Image();
    desktopHero.src = "/assets/images/home-banner.webp"; // full-size desktop

    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });

    // Always show loader for 1.2s for smoothness
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppLayout loading={loading} />
    </Router>
  );
}

export default App;
