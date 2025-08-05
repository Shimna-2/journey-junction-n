// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-10">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        {/* Introduction */}
        <p className="mb-6">
          At <strong>Journey Junction</strong>, we value your privacy and are
          committed to protecting your personal information. This Privacy Policy
          outlines how we collect, use, and safeguard your information when you
          use our website or services.
        </p>

        {/* Information Collection */}
        <h2 className="text-xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>
            Personal details such as name, phone number, and email address.
          </li>
          <li>
            Booking details including resort preferences and travel dates.
          </li>
          <li>
            Information provided through forms, WhatsApp messages, or phone
            calls.
          </li>
          <li>
            Non-personal data like browser type, device information, and IP
            address.
          </li>
        </ul>

        {/* How We Use Your Information */}
        <h2 className="text-xl font-semibold mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 mb-6 space-y-1">
          <li>To process bookings and provide requested services.</li>
          <li>
            To communicate with you about offers, updates, and promotions.
          </li>
          <li>To improve our website and customer experience.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        {/* Sharing of Information */}
        <h2 className="text-xl font-semibold mb-3">
          3. Sharing Your Information
        </h2>
        <p className="mb-6">
          We do not sell or rent your personal information. We may share it with
          trusted partners such as resort operators, payment processors, or
          service providers strictly for fulfilling your bookings or improving
          our services.
        </p>

        {/* Data Security */}
        <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
        <p className="mb-6">
          We implement strict security measures to protect your information.
          However, please note that no method of transmission over the Internet
          is completely secure.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
        <p className="mb-6">
          We use cookies to enhance your browsing experience, analyze website
          traffic, and personalize content. You may disable cookies in your
          browser settings.
        </p>

        {/* Your Rights */}
        <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
        <p className="mb-6">
          You have the right to request access, correction, or deletion of your
          personal data. To exercise these rights, please contact us using the
          details below.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
        <p className="mb-6">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="pl-6 space-y-1">
          <li>Email: journeyjunctionwyn@gmail.com</li>
          <li>Phone: +91 9744161939 / +91 9633763916</li>
          <li>
            Address: #V1/458L-21, 1st Floor, Aishwarya Mall, Sulthan Bathery,
            Wayanad-92, KL., IND.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
