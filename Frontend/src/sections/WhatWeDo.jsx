// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaFacebook, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';
// import wwdn1 from "../assets/wwdn1.jpg"
// import wwdn2 from "../assets/wwdn2.jpg"
// import wwdn3 from "../assets/wwdn3.jpg"
// import wwdn4 from "../assets/wwdn4.jpg"
// import wwdn5 from "../assets/wwdn5.jpg"


// gsap.registerPlugin(ScrollTrigger);

// const WhatWeDo = () => {
//   const containerRef = useRef(null);
//   const panelsRef = useRef([]);

//   const sections = [
//     {
//       "title": "Relational Discipleship",
//       "desc": "We walk alongside you—not above you. Through small  groups, mentoring, and honest conversations, online and onsite, we help you discover how Jesus meets you in everyday life.",
//       "img": wwdn1
//     },
//     {
//       "title": "Daily Living with Jesus",
//       "desc": "Discipleship isn’t confined to Sunday mornings. It’s about letting Jesus shape your thoughts, decisions, relationships, and rhythms—every single day	Daily Living with Jesus",
//       "img": wwdn2
//     },
//     {
//       "title": "Spiritual Formation",
//       "desc": "We help you move from head knowledge to heart transformation. Through Scripture, prayer, and discipleship evangelism tools, you’ll learn to hear God’s voice and respond with faith.",
//       "img": wwdn3
//     },
//     {
//       "title": "Empowered Living",
//       "desc": "The Holy Spirit is not a concept—He’s your daily companion. We equip you  to rely on His power, walk in His gifts, and reflect His fruit in real life.",
//       "img": wwdn4
//     },
//     {
//       "title": "Purposeful Life ",
//       "desc": "You were made for more. We help you discover your calling and equip you to live it out—whether in your workplace, family, or community.",
//       "img": wwdn5
//     }
//   ]

//   useEffect(() => {
//     const sections = panelsRef.current;

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 1,
//         // FIX: The animation starts when the top of containerRef is 50px from the top of the viewport.
//         // This ensures the H1 stays visible at the top while the section is pinned.
//         start: "top 50px",
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div
//       className="bg-white text-black overflow-hidden"
//       ref={containerRef}
//     >
//       {/* Added pt-10 pb-5 for better visual spacing of the pinned title */}
//       <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight pt-10 pb-5 text-center">What we do</h1>
//       <p className="text-gray-600 max-w-[720px] mx-auto text-[20px] text-center leading-[28px]">
//         Faith, obedience, and discipline — read how our community learns to walk closer with Christ every day.
//       </p>
//       <div
//         className={`flex w-[${sections.length * 100
//           }vw] h-[400px] flex-nowrap items-center justify-start`}
//       >
//         {sections.map((item, index) => (
//           <section
//             key={index}
//             ref={(el) => (panelsRef.current[index] = el)}
//             className="w-[20vw] h-full cursor-pointer flex justify-center items-center mx-10 flex-shrink-0"
//           >
//             <div className="relative w-[300px] h-[300px] rounded-full border border-gray-300 flex flex-col justify-center items-center text-center overflow-hidden group transition-all duration-500 hover:scale-105">
//               {/* Text Content */}
//               <div className="z-10 px-4 transition-opacity duration-500 group-hover:opacity-0">
//                 <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
//                 <p className="text-sm text-gray-700">{item.desc}</p>
//               </div>

//               {/* Hover Image */}
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//               />
//             </div>
//           </section>
//         ))}
//       </div>
//       <div className=" p-8 md:p-12 lg:p-6">
//         <header className="text-center">
//           <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight pt-10">
//             Read Our Stories
//           </h1>
//           <p className="text-gray-600 max-w-[720px] mx-auto text-[20px] mt-4 leading-[28px]">
//             Faith, obedience, and discipline — read how our community learns to walk closer with Christ every day.
//           </p>
//         </header>
//         <div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default WhatWeDo;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import wwdn1 from "../assets/wwdn1.jpg";
import wwdn2 from "../assets/wwdn2.jpg";
import wwdn3 from "../assets/wwdn3.jpg";
import wwdn4 from "../assets/wwdn4.jpg";
import wwdn5 from "../assets/wwdn5.jpg";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const panelsRef = useRef([]);
  const mobileCardsRef = useRef([]);

  const sections = [
    {
      title: "Relational Discipleship",
      desc: "We walk alongside you—not above you. Through small groups, mentoring, and honest conversations, online and onsite, we help you discover how Jesus meets you in everyday life.",
      img: wwdn1,
    },
    {
      title: "Daily Living with Jesus",
      desc: "Discipleship isn’t confined to Sunday mornings. It’s about letting Jesus shape your thoughts, decisions, relationships, and rhythms—every single day.",
      img: wwdn2,
    },
    {
      title: "Spiritual Formation",
      desc: "We help you move from head knowledge to heart transformation. Through Scripture, prayer, and discipleship evangelism tools, you’ll learn to hear God’s voice and respond with faith.",
      img: wwdn3,
    },
    {
      title: "Empowered Living",
      desc: "The Holy Spirit is not a concept—He’s your daily companion. We equip you to rely on His power, walk in His gifts, and reflect His fruit in real life.",
      img: wwdn4,
    },
    {
      title: "Purposeful Life",
      desc: "You were made for more. We help you discover your calling and equip you to live it out—whether in your workplace, family, or community.",
      img: wwdn5,
    },
  ];

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      // ✅ Desktop Horizontal Scroll Animation
      const panels = panelsRef.current;

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          snap: 1 / (panels.length - 1),
          end: () => `+=${containerRef.current.scrollWidth - window.innerWidth}`,
        },
      });
    } else {
      // ✅ Mobile & Tablet Fade-in Scroll Animation
      mobileCardsRef.current.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf("*");
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-black overflow-hidden">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight pt-10 pb-5 text-center">
        What we do
      </h1>
      <p className="text-gray-600 max-w-[720px] mx-auto text-[18px] sm:text-[20px] text-center leading-[28px] px-4">
        Faith, obedience, and disciple — read how our community learns to walk closer with Christ every day.
      </p>

      {/* ✅ DESKTOP: Horizontal GSAP Section */}
      <div className="hidden lg:flex w-[500vw] h-[450px] flex-nowrap items-center justify-start">
        {sections.map((item, index) => (
          <section
            key={index}
            ref={(el) => (panelsRef.current[index] = el)}
            className="w-[20vw] h-full cursor-pointer flex justify-center items-center mx-10 flex-shrink-0"
          >
            <div className="relative w-[300px] h-[300px] rounded-full border border-gray-300 flex flex-col justify-center items-center text-center overflow-hidden group transition-all duration-500 hover:scale-105">
              <div className="z-10 px-4 transition-opacity duration-500 group-hover:opacity-0">
                <h2 className="text-3xl font-bold mb-3">{item.title}</h2>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>

              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </section>
        ))}
      </div>

      {/* ✅ MOBILE & TABLET: Vertical Scroll Cards */}
      <div className="flex flex-col gap-10 lg:hidden px-6 py-10">
        {sections.map((item, index) => (
          <div
            key={index}
            ref={(el) => (mobileCardsRef.current[index] = el)}
            className="flex flex-col items-center text-center mx-auto w-[80vw] max-w-[350px]"
          >
            {/* 💡 FIX: Replaced w-full aspect-square with fixed w-64 h-64 and mx-auto for centering */}
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border border-gray-300">
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover"
                alt={item.title}
              />
            </div>
            <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;