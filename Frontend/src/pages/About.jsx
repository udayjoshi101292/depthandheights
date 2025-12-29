import React, { useEffect } from "react";
import abt1 from "../assets/aboutPic.jpg"
import teamMember1 from "../assets/teamMember1.jpg"
import teamMember2 from "../assets/teamMember2.jpg"

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
  const goldColor = '#FFAA4C';
  const blueColor = '#22ABDF';

  return (
    // Use a very light gold for the background
    <section className=" py-10 px-6 md:px-12 lg:px-24 space-y-20">
      <h1
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-center"
        style={{ color: blueColor }} // Primary Blue Header
      >
        The People Behind the Passion
      </h1>
      <p className="text-gray-600 mt-[-60px]  max-w-[720px] mx-auto text-[20px] text-center leading-[28px]">
        United by faith and a shared vision, these are the individuals who bring commitment and expertise to our cause every day.
      </p>
      {/* MAIN INTRO SECTION */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={abt1}
          alt="Heights and Depths Ministry"
          className="rounded-3xl shadow-lg object-cover w-full h-96 md:h-[500px]"
        />
        <div className="text-gray-800">

          <h2
            className="text-3xl font-semibold mb-4"
            style={{ color: goldColor }} // Accent Gold Sub-Header
          >
            Meet Regina Flanery & Manju Sujith
          </h2>
          <p className="text-gray-700 mb-4 text-[18px] leading-[24px]">
            A supernatural encounter! In His divine wisdom, the Lord brought together
            two women — one from India and one from the USA — at the School of Ministry
            at Charis Bible College Class of 2025. United by a shared passion to glorify
            God and see Jesus birth the supernatural through their lives, they were led
            to establish Heights and Depths Ministries, a discipleship movement reaching
            people of all ages.
          </p>
          <p className="text-gray-700 text-[18px] leading-[24px] ">
            When they returned to their respective nations in May 2025, God faithfully
            opened doors for ministry among youth and women. Today, they continue to
            walk in His grace, serving in both India and the USA, deeply grateful to be
            entrusted with lives longing for hope, love, restoration, and a fresh beginning.
          </p>
        </div>
      </div>

      {/* DIVINE APPOINTMENTS & CONTACT */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <div>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: blueColor }} // Primary Blue Header
          >
            Divine Appointments
          </h2>
          <ul className="text-gray-700 mb-6 text-[18px] leading-[24px] space-y-2">
            <li>Thursday 10:00 AM - 12:00 AM (CDT) Home Groups</li>
            <li>Thursday 6:00 PM - 7:30 PM (CDT) Haven Home Ministry</li>
            <li>Friday 9:00 PM - 10:00 PM (IST) Online Study</li>
            <li>Saturday 6:00 PM - 7:00 PM (IST) Onsite Youth Ministry</li>
          </ul>
        </div>
        <div>
          <h2
            className="text-3xl  font-bold mb-6"
            style={{ color: blueColor }} // Primary Blue Header
          >
            Contact Us
          </h2>
          <p className="text-gray-700 mb-2 text-[18px] leading-[24px]">Email: <a href="mailto:heightanddepthministries@gmail.com" style={{ color: goldColor }} className="hover:underline">heightanddepthministries@gmail.com</a></p>
          <p className="text-gray-700 mb-2 text-[18px] leading-[24px]">Website: <a href="https://www.heightanddepthministries.co.in" style={{ color: goldColor }} className="hover:underline">www.heightanddepthministries.co.in</a></p>
          <p className="text-gray-700 mb-2 text-[18px] leading-[24px]">Phone (India): +91 98606 67533</p>
          <p className="text-gray-700 mb-2 text-[18px] leading-[24px]">Phone (USA): +1 (903) 278-1851</p>
        </div>
      </div>

      {/* OUR TEAM SECTION */}
      <div className="max-w-5xl mx-auto space-y-10">
        <h2
          className="text-4xl md:text-6xl leading-[20px] font-extrabold tracking-tight text-center"
          style={{ color: blueColor }} // Primary Blue Header
        >
          Our Team
        </h2>
        <p className="text-gray-600  max-w-[720px] mx-auto text-[20px] text-center leading-[28px]">
          Get to know the leadership and staff who are serving, teaching, and connecting with our community to create lasting reform.
        </p>
        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={teamMember1}
              alt="Mrs. Kruti Andharia"
              className="rounded-2xl shadow-lg object-cover object-top  w-[400px] h-[400px] mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800" style={{ color: blueColor }}>Mrs. Kruti Andharia</h3>
            <p className="text-gray-600">Resource Facilitator</p>
          </div>
          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={teamMember2}
              alt="Mr. Prashant Thaker"
              className="rounded-2xl shadow-lg object-cover object-top  w-[400px] h-[400px] mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800" style={{ color: blueColor }}>Mr. Prashant Thaker</h3>
            <p className="text-gray-600">Finance & Outreach Coordinator</p>
          </div>
        </div>
      </div>

      {/* FOOTER NOTE */}
      <p className="text-center text-gray-600 mt-12 text-sm">
        Equipping lives to embrace the infinite love of God through a journey of Biblical discipleship.<br />
        &copy; 2025 Heights and Depth Ministries
      </p>
    </section>
  );
};

export default About;