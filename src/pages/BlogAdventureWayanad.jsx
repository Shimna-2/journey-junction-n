// src/pages/BlogAdventureWayanad.jsx
import React from "react";

export default function BlogAdventureWayanad() {
  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Adventure Activities in Wayanad - Explore Beyond Limits</title>
        <meta
          name="description"
          content="Discover thrilling adventure activities in Wayanad. Experience ziplining, trekking, camping, and off-road adventures amidst lush greenery."
        />
        <meta
          name="keywords"
          content="Wayanad adventure activities, trekking in Wayanad, ziplining Kerala, Wayanad camping, off-road jeep safari, Banasura trek, Chembra Peak trek, Kerala adventure tourism"
        />
      </head>

      <div className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-20">
        {/* Main Blog Content */}
        <article className="max-w-6xl mx-auto">
          {/* Blog Header */}
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Adventure Activities in Wayanad: Explore Beyond Limits
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From treetop ziplining to high-altitude trekking, Wayanad offers
              adrenaline-packed experiences amidst the enchanting beauty of the
              Western Ghats.
            </p>
          </header>

          {/* Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <img
              src="/assets/images/1000119737_Pml0uYK.jpg"
              alt="Ziplining in Wayanad"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="/assets/images/chembra-trek.jpg"
              alt="Chembra Peak trekking trail"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
            <img
              src="/assets/images/banasura-camping.jpg"
              alt="Camping near Banasura Dam"
              className="rounded-lg shadow-md object-cover w-full h-64"
            />
          </div>

          {/* Blog Content */}
          <section className="prose lg:prose-lg max-w-none text-gray-800 leading-relaxed">
            <p>
              Wayanad is not just a serene escape; it’s also a hotspot for
              thrill seekers. Nestled in the Western Ghats, the district offers
              a variety of adventure activities that combine natural beauty with
              a rush of adrenaline.
            </p>

            <h2>Trekking Adventures</h2>
            <p>
              Trekking is one of the most popular activities in Wayanad. Chembra
              Peak offers a challenging yet rewarding climb with breathtaking
              views and the heart-shaped lake at its summit. Banasura Hill Trek
              takes you through lush forests, streams, and meadows.
            </p>

            <h2>Ziplining and Rock Climbing</h2>
            <p>
              Wayanad is home to some of the longest ziplining tracks in South
              India. Rock climbing and rappelling are also popular, especially
              in the rugged hills near Meenmutty and Soochipara waterfalls.
            </p>

            <h2>Camping Under the Stars</h2>
            <p>
              The calm nights of Wayanad are perfect for camping. Sites near
              Banasura Sagar Dam and Tholpetty offer serene locations with clear
              skies and campfires.
            </p>

            <h2>Off-Road Jeep Safaris</h2>
            <p>
              For a rugged experience, jeep safaris through forest trails and
              mountain roads offer unmatched thrills. Routes through Kuruva
              Island and Edakkal Caves combine adventure with sightseeing.
            </p>

            <h2>Water Adventures</h2>
            <p>
              Kayaking in the backwaters of Pozhuthana and rafting in Kabini
              River during the monsoon offer a mix of excitement and scenic
              beauty.
            </p>

            <h2>Best Time for Adventure</h2>
            <p>
              October to May is ideal for most adventure activities, while the
              monsoon months are perfect for water-based adventures like
              rafting.
            </p>

            <h2>Safety Tips</h2>
            <ul>
              <li>Always go with certified guides.</li>
              <li>Wear appropriate safety gear.</li>
              <li>Respect nature and avoid littering.</li>
              <li>Check weather conditions before planning activities.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Whether it’s the thrill of a zipline, the endurance of a trek, or
              the peace of camping under the stars, Wayanad promises an
              adventure for every traveler. It’s the perfect blend of adrenaline
              and serenity in one of Kerala’s most stunning landscapes.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
