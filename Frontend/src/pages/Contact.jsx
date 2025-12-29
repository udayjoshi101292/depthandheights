import React, { useEffect, useState } from "react"; // 👈 UPDATED: Added useState
import axios from "axios";             // 👈 NEW: Import axios

// 🚨 NOTE: Updated port to 5000 to match backend script.js
const API_URL_CONTACT = "https://heightanddepth.onrender.com/api/contact";

const Contact = () => {
  const goldColor = '#FFAA4C';
  const blueColor = '#22ABDF';
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
  // 👈 NEW: State for form fields and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Use name attribute to update correct field
    });
    if (feedback) setFeedback("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    if (!formData.name || !formData.email || !formData.message) {
      setFeedback("❌ Please fill out all required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(API_URL_CONTACT, formData);
      setFeedback("✅ " + (response.data.message || "Message sent successfully!"));
      // Clear form on success
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to send message.';
      setFeedback(`❌ Error: ${errorMessage}`);
      console.error("Contact Form Submission Error:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    // Use a very light gold for the background
    <section className="bg-orange-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight  text-center" style={{ color: blueColor }}>Get in Touch</h1>
        <p className="text-gray-600 max-w-[720px] mx-auto text-[20px] mt-6 text-center leading-[28px]">
          We'd love to connect with you! Whether you want to join a session,
          seek guidance, or simply reach out — send us a message below.
        </p>

      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="text-left">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name" // 👈 Name for POST data
              required
              placeholder="Enter your full name"
              value={formData.name} // 👈 Controlled
              onChange={handleChange} // 👈 Handler
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email" // 👈 Name for POST data
              required
              placeholder="example@email.com"
              value={formData.email} // 👈 Controlled
              onChange={handleChange} // 👈 Handler
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            />
          </div>

          {/* Phone Number */}
          <div className="text-left">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone" // 👈 Name for POST data
              placeholder="+91 9876543210"
              value={formData.phone} // 👈 Controlled
              onChange={handleChange} // 👈 Handler
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            />
          </div>

          {/* Message */}
          <div className="text-left">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message" // 👈 Name for POST data
              required
              rows="5"
              placeholder="Write your message..."
              value={formData.message} // 👈 Controlled
              onChange={handleChange} // 👈 Handler
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2"
              style={{ '--tw-ring-color': blueColor }}
            ></textarea>
          </div>

          {/* Submission Feedback */}
          {feedback && (
            <p className={`mt-2 text-sm ${feedback.startsWith('❌') ? 'text-red-600' : 'text-green-600'}`}>
              {feedback}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading} // 👈 Disabled while sending
            className="w-full text-white py-3 cursor-pointer rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
            // Button color is Primary Blue, hover color is a slightly darker Blue
            style={{ backgroundColor: blueColor, '--tw-bg-opacity': 1, ':hover': { backgroundColor: '#1A89B6' } }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;