import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    adults: "",
    kids: "",
    checkIn: "",
    checkOut: "",
    groupType: "Family",
    rooms: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      phone,
      adults,
      kids,
      checkIn,
      checkOut,
      groupType,
      rooms,
      budget,
      message,
    } = formData;

    const whatsappMessage = `Hello, I'm ${name}. I'd like to book with Journey Junction.
Phone: ${phone}
Adults: ${adults}
Kids: ${kids}
Check-in: ${checkIn}
Check-out: ${checkOut}
Family or Stags: ${groupType}
No. of Rooms: ${rooms}
Budget: ₹${budget}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919633763916?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    setFormData({
      name: "",
      phone: "",
      adults: "",
      kids: "",
      checkIn: "",
      checkOut: "",
      groupType: "Family",
      rooms: "",
      budget: "",
      message: "",
    });

    setSubmitted(true);
  };

  return (
    <div
      id="booking"
      className="scroll-mt-32 bg-gradient-to-b from-gray-100 to-gray-300 pt-32 pb-6 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-4 sm:p-6">
        {!submitted ? (
          <div className="animate-fadeIn bg-white shadow-lg rounded-xl p-6 sm:p-10">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Hi Arjun this side 👋
              </h2>
              <p className="mt-2 text-base sm:text-lg text-gray-700">
                Tell us — how can we help you?
              </p>
              <p className="text-sm sm:text-md text-gray-600">
                Let’s start your journey with{" "}
                <span className="font-semibold text-black">
                  Journey Junction
                </span>
                .
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
                required
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="adults"
                  type="number"
                  min="0"
                  value={formData.adults}
                  onChange={handleChange}
                  placeholder="No. of Adults"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  required
                />
                <input
                  name="kids"
                  type="number"
                  min="0"
                  value={formData.kids}
                  onChange={handleChange}
                  placeholder="No. of Kids"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  required
                />
                <input
                  name="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1 font-medium">
                  Family or Stags
                </label>
                <select
                  name="groupType"
                  value={formData.groupType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  required
                >
                  <option value="Family">Family</option>
                  <option value="Stags">Stags</option>
                </select>
              </div>

              <input
                name="rooms"
                type="number"
                value={formData.rooms}
                onChange={handleChange}
                placeholder="No. of Rooms"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />

              <input
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Your Budget (₹)"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Proceed
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-fadeIn bg-white text-center p-8 sm:p-12 rounded-xl shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Thank You! 🙌
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Your request has been submitted successfully. We'll connect with
              you shortly!
            </p>
            <button
              onClick={() => navigate("/home")}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Go to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
