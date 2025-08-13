import React, { useState } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const validateForm = () => {
    const { name, phone, message } = formData;
    if (!name.trim() || !phone.trim() || !message.trim()) {
      return "All fields are required.";
    }
    if (!/^\+?\d{8,15}$/.test(phone)) {
      return "Please enter a valid phone number with country code.";
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
      `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    alert("✅ Thank you! Your message has been sent via WhatsApp.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-200 to-gray-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10">
          Contact Us
        </h2>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-300 p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-5 text-gray-700 text-sm sm:text-base">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-gray-800 mt-1 flex-shrink-0" />
              <p>
                <strong>Address:</strong> <br />
                #V1/458L-21, 1st Floor, Aishwarya Mall <br />
                Sulthan Bathery, Wayanad-92, KL., IND.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-800 flex-shrink-0" />
              <p className="break-words">
                journeyjunctionwyn
                <br />
                @gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-gray-800 flex-shrink-0" />
              <p>
                +91 9744161939 <br /> +91 9633763916
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="https://wa.me/919744161939"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-full transition"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://www.instagram.com/journey_junction___?igsh=ODZieXo1NTlhNjhr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-700 hover:bg-pink-700 text-white p-2 sm:p-3 rounded-full transition"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1F7BL9EXTb/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full transition"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-700"
                  placeholder="Your Name"
                />
              </div>

              {/* Phone with Country Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  country={"in"}
                  value={formData.phone}
                  onChange={(phone) =>
                    setFormData((prev) => ({ ...prev, phone: `+${phone}` }))
                  }
                  enableSearch={true}
                  inputStyle={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    borderRadius: "0.5rem",
                    height: "42px",
                  }}
                  buttonStyle={{
                    border: "1px solid #d1d5db",
                    borderRadius: "0.5rem 0 0 0.5rem",
                  }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-700"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2 justify-center mx-auto text-sm sm:text-base"
                >
                  <FaWhatsapp />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
