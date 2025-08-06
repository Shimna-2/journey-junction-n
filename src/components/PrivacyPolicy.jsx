// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white text-gray-800 py-10 px-4 sm:px-6 lg:px-8 font-[Poppins]">
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-lg shadow-sm p-6 sm:p-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm text-gray-500 mb-5">
          <Link
            to="/"
            className="flex items-center hover:text-blue-600 transition-colors duration-200"
          >
            <FaHome className="mr-1" />
            Home
          </Link>
          <FaChevronRight className="mx-2 text-gray-400" size={12} />
          <span className="text-gray-700 font-medium">Privacy Policy</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Privacy Policy
        </h1>

        {/* Introduction */}
        <p className="mb-5 text-sm leading-relaxed text-gray-700">
          At <strong>Journey Junction</strong>, we respect your privacy and are
          committed to safeguarding your personal information. This Privacy
          Policy explains how we collect, use, and protect your information when
          you interact with our website or services.
        </p>

        {/* Information Collection */}
        <h2 className="text-lg font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 mb-5 text-sm leading-relaxed space-y-1 text-gray-700">
          <li>Personal details like name, phone number, and email address.</li>
          <li>
            Booking details including resort preferences and travel dates.
          </li>
          <li>Information provided via forms, WhatsApp, or phone calls.</li>
          <li>
            Non-personal data such as browser type, device info, and IP address.
          </li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-lg font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 mb-5 text-sm leading-relaxed space-y-1 text-gray-700">
          <li>To process bookings and provide requested services.</li>
          <li>To communicate offers, updates, and promotions.</li>
          <li>To enhance our website and customer experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        {/* Sharing of Information */}
        <h2 className="text-lg font-semibold mb-2">
          3. Sharing Your Information
        </h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-700">
          We never sell or rent your personal data. We may share it with trusted
          partners such as resort operators, payment processors, or service
          providers solely for fulfilling your bookings or improving our
          services.
        </p>

        {/* Data Security */}
        <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-700">
          We apply strong security measures to protect your data. However, no
          method of online transmission is entirely secure, so please share
          information at your own discretion.
        </p>

        {/* Cookies */}
        <h2 className="text-lg font-semibold mb-2">5. Cookies</h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-700">
          We use cookies to improve your browsing experience, analyze traffic,
          and personalize content. You may disable cookies in your browser
          settings.
        </p>

        {/* Your Rights */}
        <h2 className="text-lg font-semibold mb-2">6. Your Rights</h2>
        <p className="mb-5 text-sm leading-relaxed text-gray-700">
          You can request access, correction, or deletion of your personal data.
          Contact us using the details below to exercise your rights.
        </p>

        {/* Contact */}
        <h2 className="text-lg font-semibold mb-2">7. Contact Us</h2>
        <p className="mb-3 text-sm leading-relaxed text-gray-700">
          For questions about this Privacy Policy, reach us at:
        </p>
        <ul className="pl-5 text-sm space-y-1 text-gray-700">
          <li>Email: journeyjunctionwyn@gmail.com</li>
          <li>Phone: +91 9744161939 / +91 9633763916</li>
          <li>
            Address: #V1/458L-21, 1st Floor, Aishwarya Mall, Sulthan Bathery,
            Wayanad-92, KL, India.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
