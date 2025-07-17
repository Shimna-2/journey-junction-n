import React from "react";

const blogs = [
  {
    title: "Wayanadan Tribal Culture: A Journey into the Indigenous Heart",
    image: "src/assets/images/WhatsApp Image 2025-07-10 at 15.14.37 (1).jpeg",
    excerpt:
      "Uncover the fascinating traditions of Wayanad's tribal communities. Learn about their nature-connected lifestyles, rituals, and vibrant heritage.",
  },
  {
    title: "Wayanad Climate: Misty Hills and Serene Landscapes",
    image: "src/assets/images/beautiful-mountain-landscape.jpg",
    excerpt:
      "Experience Wayanad’s cool mountain climate — perfect for getaways, treks, and peaceful nature retreats across the Western Ghats.",
  },
  {
    title: "Wayanadan Pothumkaal: A Flavorful Kerala Culinary Experience",
    image: "src/pothumkaaal.jpeg",
    excerpt:
      "Taste the iconic Wayanadan Pothumkaal — a bold beef delicacy with authentic Kerala spices that captures the essence of traditional cooking.",
  },
  {
    title: "Wildlife in Wayanad: Nature at Its Most Untamed",
    image: "src/assets/images/group-fallow-deer-grazing.jpg",
    excerpt:
      "Embark on a safari through Wayanad's protected forests. Spot elephants, leopards, deer, and birds in their natural habitat.",
  },
  {
    title: "Adventure Activities in Wayanad: Explore Beyond Limits",
    image: "src/assets/images/1000119737_Pml0uYK.jpg",
    excerpt:
      "From treetop ziplining to high-altitude trekking, Wayanad offers adrenaline-packed experiences amidst lush greenery.",
  },
];

const Blog = () => {
  return (
    <section
      className="bg-white py-20 px-4 sm:px-6 lg:px-20"
      aria-label="Wayanadan blog articles"
    >
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Explore Wayanad: Culture, Climate, Cuisine & More
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Your guide to the most captivating aspects of Wayanad — its indigenous
          culture, scenic beauty, adventurous spirit, and flavorful food.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post, index) => (
          <article
            key={index}
            className="bg-gray-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
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
              <a
                href="#"
                className="inline-block bg-gray-700 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-900 transition"
                aria-label={`Read more about ${post.title}`}
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
