// src/components/ContactFormOnly.jsx
import React, { useState, memo } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactFormOnly = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const validateForm = () => {
    const { name, phone, message } = formData;
    if (!name.trim() || !phone.trim() || !message.trim()) {
      return "All fields are required.";
    }
    if (!/^\d{10}$/.test(phone)) {
      return "Please enter a valid 10-digit phone number.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMsg = validateForm();
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    const { name, phone, message } = formData;
    const whatsappMessage = `Hello, my name is ${name}. My phone number is ${phone}. Message: ${message}`;

    window.open(
      `https://wa.me/919633763916?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    alert("✅ Thank you! Your message has been sent via WhatsApp.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section
      className="relative py-14 px-4 bg-gradient-to-b from-gray-200 to-gray-300 font-[Poppins]"
      aria-labelledby="contact-form-heading"
    >
      {/* Preload font */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl border border-gray-300 px-6 sm:px-10 py-10">
        <h2
          id="contact-form-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6"
        >
          Send Us a Message
        </h2>

        {error && (
          <p
            className="text-red-500 text-sm mb-4 text-center"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              autoComplete="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="\d{10}"
              placeholder="Your Phone Number"
              autoComplete="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us how we can help you..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2 justify-center mx-auto"
            >
              <FaWhatsapp />
              Send via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default memo(ContactFormOnly);
