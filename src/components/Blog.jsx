import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images so they work in production
import tribalCultureImg from "../assets/images/WhatsApp Image 2025-07-10 at 15.14.37 (1).jpeg";
import climateImg from "../assets/images/beautiful-mountain-landscape.jpg";
import pothumkaalImg from "../assets/images/pothumkaal2.jpeg";
import adventureImg from "../assets/images/1000119737_Pml0uYK.jpg";
import thiruneliImg from "../assets/images/thirunelli.jpg";
import coffeeImg from "../assets/images/adult-harvesting-coffee.jpg";

const blogs = [
  {
    title: "Wayanadan Tribal Culture: A Journey into the Indigenous Heart",
    image: tribalCultureImg,
    excerpt:
      "Uncover the fascinating traditions of Wayanad's tribal communities. Learn about their nature-connected lifestyles, rituals, and vibrant heritage.",
    link: "/blogs/tribal-culture",
  },
  {
    title: "Wayanad Climate: Misty Hills and Serene Landscapes",
    image: climateImg,
    excerpt:
      "Experience Wayanad’s cool mountain climate — perfect for getaways, treks, and peaceful nature retreats across the Western Ghats.",
    link: "/blogs/climate",
  },
  {
    title: "Wayanadan Pothumkaal: A Flavorful Kerala Culinary Experience",
    image: pothumkaalImg,
    excerpt:
      "Taste the iconic Wayanadan Pothumkaal — a bold beef delicacy with authentic Kerala spices that captures the essence of traditional cooking.",
    link: "/blogs/pothumkaal",
  },
  {
    title: "Adventure Activities in Wayanad: Explore Beyond Limits",
    image: adventureImg,
    excerpt:
      "From treetop ziplining to high-altitude trekking, Wayanad offers adrenaline-packed experiences amidst lush greenery.",
    link: "/blogs/adventure-wayanad",
  },
  {
    title: "Thiruneli Temple",
    image: thiruneliImg,
    excerpt:
      "Discover the spiritual and architectural charm of Thiruneli Temple, nestled in the forests of Wayanad.",
    link: "/blogs/thiruneli",
  },
  {
    title: "Coffee Plantations",
    image: coffeeImg,
    excerpt:
      "Explore the lush coffee estates of Wayanad, where tradition meets the aroma of freshly roasted beans.",
    link: "/blogs/coffee-plantations",
  },
];

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-20">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-12 text-center" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Explore Wayanad: Culture, Climate, Cuisine & More
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
            Your guide to the most captivating aspects of Wayanad — its
            indigenous culture, scenic beauty, adventurous spirit, and flavorful
            food.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((post, index) => (
            <article
              key={index}
              className="bg-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link
                  to={post.link}
                  className="inline-block bg-gray-700 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-900 transition"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="mt-20 w-full">
        <Footer />
      </div>
    </>
  );
};

export default Blog;
