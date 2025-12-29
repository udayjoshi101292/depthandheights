// src/components/Stats.jsx (No changes needed, already responsive)

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;

    // Animate border radius on scroll
    gsap.fromTo(
      el,
      { borderRadius: "0px" },
      {
        borderRadius: "200px",
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh] md:h-[80vh] bg-white">
      {/* Outer Animated Container */}
      <div
        ref={containerRef}
        className="bg-[#141722] text-white px-8 sm:px-16 py-20 sm:py-20 max-w-6xl w-full text-center shadow-lg transition-all duration-700 mx-4" // Added mx-4 for horizontal padding on mobile
      >
        {/* Heading */}
        <h2 className="leading-snug mb-12 text-3xl md:text-5xl font-bold tracking-tight">
          Growing Together in Faith & Discipleship
        </h2>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 text-blue-200">
          {/* Stat 1 */}
          <div>
            <p className="text-5xl font-bold text-blue-300">30+</p>
            <p className="text-sm mt-2 text-gray-400">
              Lives touched through our <br /> devotional & discipleship program
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <p className="text-5xl font-bold text-blue-300">5</p>
            <p className="text-sm mt-2 text-gray-400">
              Ongoing study groups focused on <br /> spiritual growth & obedience
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <p className="text-5xl font-bold text-blue-300">3</p>
            <p className="text-sm mt-2 text-gray-400">
              Locations where our <br /> ministry sessions are active
            </p>
          </div>
        </div>

        {/* Optional closing line */}
        <p className="text-gray-400 text-sm mt-12 italic">
          “For where two or three are gathered in My name, I am there in the midst of them.” — Matthew 18:20
        </p>
      </div>
    </div>
  );
};

export default Stats;