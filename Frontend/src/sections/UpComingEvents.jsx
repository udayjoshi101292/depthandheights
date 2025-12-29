import React from "react";

const UpComingEvents = () => {
  const events = [
    {
      title: "Youth Discipleship Workshop",
      date: "Alternate Saturdays every month",
      description:
        "",
      buttonText: "Learn More",
    },
    {
      title: "Grow in Faith, One Chapter at a Time",
      date: "online Book study 2026",
      description:
        "",
      buttonText: "Join Us",
    },
    {
      title: "Building Disciples Beyond Borders",
      date: "Mondays and Wednesdays w.e.f 2026 – virtual discipleship studies.",
      description:
        "",
      buttonText: "Get Connected",
    },
  ];

  return (
    <section className="pb-20 bg-white text-gray-800" id="events">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center" >
          Upcoming Events
        </h2>
        <p className="text-gray-600 max-w-[720px] text-center mx-auto text-[20px] mt-4 leading-[28px] mb-10">
          Join us as we grow together in faith and purpose through worship,
          study, and community.
        </p>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#141722] text-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3 text-blue-300">
                {event.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 italic">{event.date}</p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {event.description}
              </p>
              <a
                href="/contact"
                className="border cursor-pointer border-blue-400 px-5 py-2 rounded-full text-sm text-blue-200 hover:bg-blue-400 hover:text-white transition"
              >
                {event.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpComingEvents;
