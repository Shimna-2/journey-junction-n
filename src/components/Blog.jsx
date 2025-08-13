import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import tribalCultureImg from "../assets/images/blgtribalhm.webp";
import climateImg from "../assets/images/blgclimate.webp";
import pothumkaalImg from "../assets/images/blgpothumkaalimg1.webp";
import adventureImg from "../assets/images/blgadventureimg1.webp";
import thiruneliImg from "../assets/images/blgthirunelli-banner.webp";
import coffeeImg from "../assets/images/blgcoffee1.webp";

const blogs = [
  {
    title: "Wayanadan Tribal Culture: A Journey into the Indigenous Heart",
    image: tribalCultureImg,
    excerpt:
      "Discover the traditions, lifestyle, and heritage of Wayanad's vibrant tribal communities.",
    link: "/blogs/tribal-culture",
  },
  {
    title: "Wayanad Climate: Misty Hills and Serene Landscapes",
    image: climateImg,
    excerpt:
      "Enjoy Wayanad’s cool, misty weather and its breathtaking mountain scenery.",
    link: "/blogs/climate",
  },
  {
    title: "Wayanadan Pothumkaal: A Flavorful Kerala Culinary Experience",
    image: pothumkaalImg,
    excerpt:
      "Savor this spicy beef delicacy, cooked with Kerala’s finest local spices.",
    link: "/blogs/pothumkaal",
  },
  {
    title: "Adventure Activities in Wayanad: Explore Beyond Limits",
    image: adventureImg,
    excerpt:
      "From trekking to ziplining, Wayanad is a paradise for thrill seekers.",
    link: "/blogs/adventure-wayanad",
  },
  {
    title: "Thiruneli Temple",
    image: thiruneliImg,
    excerpt:
      "Visit the ancient Thiruneli Temple, surrounded by lush forest hills.",
    link: "/blogs/thiruneli",
  },
  {
    title: "Coffee Plantations",
    image: coffeeImg,
    excerpt:
      "Walk through Wayanad’s scenic coffee estates and enjoy the rich aroma.",
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
      <section className="bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-20 font-[Poppins]">
        {/* Heading */}
        <div className="max-w-7xl mx-auto mb-8 text-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
            Explore Wayanad: Culture, Climate, Cuisine & More
          </h1>
          <p className="text-gray-600 text-l sm:text-xl max-w-3xl mx-auto text-justify leading-relaxed">
            Wayanad, in Kerala’s Western Ghats, is a scenic haven of misty
            hills, waterfalls, and wildlife. Known for tea plantations, trekking
            trails, and serene resorts, it’s a top destination for nature and
            adventure lovers.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {blogs.map((post, index) => (
            <article
              key={index}
              className="bg-gray-100 shadow-md rounded-xl overflow-hidden lg:hover:shadow-xl transition duration-300"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 80}
            >
              <img
                src={post.image}
                alt={`Blog: ${post.title}`}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {post.excerpt}
                </p>
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
