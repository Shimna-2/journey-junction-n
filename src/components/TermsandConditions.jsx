import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function TermsAndContact() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-[Poppins] flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex-grow px-4 sm:px-6 lg:px-16 py-6 sm:py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
            Terms and Conditions
          </h1>

          <p className="mb-6 text-sm sm:text-base text-gray-600 text-justify leading-relaxed">
            Welcome to Journey Junction! By using our resort booking services,
            website, and related offerings, you agree to comply with and be
            bound by the following Terms and Conditions. Please read them
            carefully.
          </p>

          {[
            {
              title: "1. Booking and Payment",
              content:
                "All bookings are subject to availability. To confirm a reservation, full or partial payment may be required depending on the resort’s policy. Payments must be made through our secure payment gateways. Failure to complete payment may result in cancellation of your booking.",
            },
            {
              title: "2. Cancellation and Refunds",
              content:
                "Cancellation policies vary by resort. Please review the cancellation terms provided during booking. Refunds, if applicable, will be processed according to the resort’s guidelines. Journey Junction is not responsible for cancellations or refunds beyond what is stated.",
            },
            {
              title: "3. Check-in and Check-out",
              content:
                "Check-in and check-out times are determined by each resort and will be communicated at the time of booking. Late check-out or early check-in requests are subject to availability and additional charges.",
            },
            {
              title: "4. User Responsibilities",
              content:
                "You agree to provide accurate information when making a booking and to abide by the resort’s rules and regulations during your stay. Any damage to property caused by you or your guests may incur additional charges.",
            },
            {
              title: "5. Limitation of Liability",
              content:
                "Journey Junction acts as a booking intermediary and is not liable for any issues arising directly from your stay, including but not limited to, service quality, amenities, or disputes with the resort. We strongly recommend reviewing resort policies before confirming your booking.",
            },
            {
              title: "6. Privacy and Data Protection",
              content:
                "Your personal data will be handled in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your data as described therein.",
            },
            {
              title: "7. Changes to Terms",
              content:
                "We reserve the right to modify these Terms and Conditions at any time. Updates will be posted on this page with a revised “Last Updated” date. Continued use of our services after changes constitutes acceptance of the new terms.",
            },
            {
              title: "8. Governing Law",
              content:
                "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kerala, India.",
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

      <div className="mt-20 w-full">
        <Footer />
      </div>
    </div>
  );
}
