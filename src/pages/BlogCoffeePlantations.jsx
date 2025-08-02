// src/pages/BlogCoffeePlantations.jsx
import React, { useEffect } from "react";

export default function BlogCoffeePlantations() {
  useEffect(() => {
    // Set page title
    document.title = "Coffee Plantations in Wayanad - Aroma of the Hills";

    // Update meta description
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore the lush coffee plantations of Wayanad, Kerala — learn about the cultivation process, history, best seasons to visit, and the unique flavors of Wayanadan coffee."
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector("meta[name='keywords']");
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Wayanad coffee plantations, Kerala coffee farms, coffee tourism India, Arabica coffee Wayanad, Robusta coffee Wayanad, coffee estate tours, Kerala plantation tourism"
      );
    }
  }, []);

  return (
    <div className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-20">
      {/* Main Blog Content */}
      <article className="max-w-6xl mx-auto">
        {/* Blog Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Coffee Plantations in Wayanad - Aroma of the Hills
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wander through the sprawling coffee estates of Wayanad, where lush
            green hills meet the rich aroma of freshly brewed beans. Experience
            the charm, history, and taste of Kerala’s finest coffee.
          </p>
        </header>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <img
            src="src/assets/images/adult-harvesting-coffee.jpg"
            alt="Coffee harvesting in Wayanad"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="src/assets/images/coffee-beans-processing.jpg"
            alt="Processing coffee beans in Wayanad"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="src/assets/images/coffee-estate-view.jpg"
            alt="View of coffee estate in Wayanad"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>

        {/* Blog Content */}
        <section className="prose lg:prose-lg max-w-none text-gray-800 leading-relaxed">
          <p>
            Wayanad, situated in the serene Western Ghats of Kerala, is famous
            for its sprawling coffee plantations. These estates produce some of
            the finest Arabica and Robusta coffee varieties in India, making
            Wayanad a paradise for coffee lovers and nature enthusiasts alike.
          </p>

          <h2>History of Coffee in Wayanad</h2>
          <p>
            Coffee cultivation in Wayanad dates back to the 18th century, when
            British planters introduced coffee as a commercial crop. Over time,
            local farmers adopted and perfected the art of coffee farming,
            making the region a renowned hub for premium coffee production.
          </p>

          <h2>Types of Coffee Grown</h2>
          <p>
            The two major varieties cultivated here are <strong>Arabica</strong>
            , known for its mild flavor and aroma, and <strong>Robusta</strong>,
            valued for its strong taste and high caffeine content. Many estates
            also grow pepper, cardamom, and vanilla alongside coffee.
          </p>

          <h2>The Cultivation Process</h2>
          <p>
            Coffee cultivation in Wayanad is a meticulous process — from
            planting seedlings to harvesting ripe cherries, every step is
            handled with care. Post-harvest, the beans undergo pulping,
            fermenting, drying, and roasting before they are ready for brewing.
          </p>

          <h2>Best Time to Visit</h2>
          <p>
            The ideal season to visit coffee plantations is between November and
            March, when the weather is pleasant and harvesting activities are in
            full swing. Visitors can witness the entire coffee-making process
            during this period.
          </p>

          <h2>Coffee Estate Tours</h2>
          <p>
            Many estates in Wayanad offer guided tours where visitors can learn
            about coffee farming, participate in coffee picking, and enjoy fresh
            brews amidst breathtaking landscapes. Some estates also provide
            accommodation for an immersive experience.
          </p>

          <h2>Cultural Significance</h2>
          <p>
            Coffee is more than just a crop here; it’s an integral part of
            Wayanad’s identity and economy. The plantations provide livelihoods
            to thousands of local families and contribute to Kerala’s
            agricultural heritage.
          </p>

          <h2>Conclusion</h2>
          <p>
            A visit to Wayanad’s coffee plantations is not just about tasting
            coffee; it’s about connecting with the land, the people, and the
            rich history that makes every cup special. Whether you’re a coffee
            connoisseur or simply a traveler seeking serene landscapes, Wayanad
            offers an unforgettable experience.
          </p>
        </section>
      </article>
    </div>
  );
}
