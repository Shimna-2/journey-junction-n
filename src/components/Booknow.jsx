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
    FamilyorStags: "Family",
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
      FamilyorStags,
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
Family or Stags: ${FamilyorStags}
No. of Rooms: ${rooms}
Budget: ₹${budget}
Message: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919633763916?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Reset form and show thank you note
    setFormData({
      name: "",
      phone: "",
      adults: "",
      kids: "",
      checkIn: "",
      checkOut: "",
      FamilyorStags: "Family",
      rooms: "",
      budget: "",
      message: "",
    });

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 px-4 py-10 flex items-center justify-center font-sans">
      <div className="w-full max-w-3xl">
        {!submitted ? (
          <div className="animate-fadeIn bg-white shadow-lg rounded-lg p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Hi Arjun this side 👋
              </h2>
              <p className="mt-2 text-lg text-gray-700">
                Tell us — how can we help you?
              </p>
              <p className="text-md text-gray-600">
                Let’s start your journey with{" "}
                <span className="font-semibold text-black">
                  Journey Junction
                </span>
                . Fill in the required information to proceed.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <div className="flex gap-4">
                <input
                  name="adults"
                  value={formData.adults}
                  type="number"
                  min="0"
                  placeholder="No. of Adults"
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  required
                />
                <input
                  name="kids"
                  value={formData.kids}
                  type="number"
                  min="0"
                  placeholder="No. of Kids"
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                />
              </div>
              <div className="flex gap-4">
                <input
                  name="checkIn"
                  value={formData.checkIn}
                  type="date"
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                  required
                />
                <input
                  name="checkOut"
                  value={formData.checkOut}
                  type="date"
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
                value={formData.rooms}
                type="number"
                placeholder="No. of Rooms"
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg"
                required
              />
              <input
                name="budget"
                value={formData.budget}
                placeholder="Your Budget (₹)"
                onChange={handleChange}
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
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Proceed
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-fadeIn bg-white text-center p-12 rounded-xl shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You! 🙌
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Your request has been submitted successfully. We'll connect with
              you shortly!
            </p>
            <button
              onClick={() => navigate("/home")}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Go to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
