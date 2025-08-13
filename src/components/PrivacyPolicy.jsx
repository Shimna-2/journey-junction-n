import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-[Poppins] flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-6 lg:px-16 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
            Privacy Policy
          </h1>

          <p className="mb-6 text-sm sm:text-base text-gray-600 text-justify leading-relaxed">
            At Journey Junction, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, and safeguard your data when you use our
            website and services.
          </p>

          {[
            {
              title: "1. Information We Collect",
              content:
                "We may collect personal information such as your name, email address, phone number, and payment details when you make a booking or contact us. We also collect non-personal data such as browser type, device information, and usage statistics.",
            },
            {
              title: "2. How We Use Your Information",
              content:
                "Your data is used to process bookings, improve our services, communicate with you, and ensure a seamless experience on our platform. We may also send promotional offers if you have opted in.",
            },
            {
              title: "3. Sharing of Information",
              content:
                "We do not sell your personal information. However, we may share your details with partner resorts, payment processors, or service providers strictly for fulfilling your booking or improving our services.",
            },
            {
              title: "4. Data Security",
              content:
                "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or storage system is completely secure, and we cannot guarantee absolute security.",
            },
            {
              title: "5. Cookies and Tracking",
              content:
                "We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can disable cookies in your browser settings, but this may limit certain features.",
            },
            {
              title: "6. Third-Party Links",
              content:
                "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their policies.",
            },
            {
              title: "7. Your Rights",
              content:
                "You may request access, correction, or deletion of your personal data at any time. Please contact us to exercise these rights.",
            },
            {
              title: "8. Changes to This Policy",
              content:
                "We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised 'Last Updated' date.",
            },
            {
              title: "9. Contact Us",
              content:
                "If you have any questions or concerns about this Privacy Policy, you can contact us at +91 96050 16881 or email us at support@journeyjunction.com.",
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-2">
                {section.title}
              </h2>
              <p className="mb-4 text-sm sm:text-base text-gray-600 text-justify leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}

          <p className="text-xs sm:text-sm text-gray-500 mt-6">
            Last Updated: August 13, 2025
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
}
