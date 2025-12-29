

import { useEffect, useState } from "react";
import { AnimatedTestimonials } from "../components/ui/Animated-Testimonial";
import axios from "axios"
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Fetch data from the running backend server
        const response = await axios.get("https://heightanddepth.onrender.com/api/testimonials");
        setTestimonials(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching testimonials:", err);
        setError("Failed to load testimonials. Please ensure the backend is running on port 5000.");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Loading testimonials...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-xl text-red-600">
        Error: {error}
      </div>
    );
  }

  
  return (
    <div className="w-screen bg-[#EEF6FF] py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center">VOICES OF TRANSFORMED LIVES</h1>
      <p className="text-gray-600 max-w-[720px] text-center mx-auto text-[20px] mt-4 leading-[28px]">
      Unfiltered testimonies and heartfelt praise—these voices reflect the true fruit of our discipleship journey. Every individual a witness to God’s transforming grace at work—shaped by His Word.
          </p>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
