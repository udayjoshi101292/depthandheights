import React from 'react';
import { FaRegCircle, FaRegClock, FaRegLightbulb } from 'react-icons/fa'; // Only need these for the icons, not FaArrowRight for this section's buttons

// Placeholder icons, adjust as needed to match your exact icon library
// FaRegCircle (or similar icon for general funding)
// FaRegLightbulb (or similar icon for solar/energy)
// FaRegClock (or similar icon for time/volunteering)

const HelpUsSection = () => {
    // Define the color palette from the Resources page
    const goldColor = '#FFAA4C'; // Orange-gold
    const blueColor = '#22ABDF'; // Bright blue
    const redColor = '#E34444';   // Red

    // Data for the three cards
    const helpOptions = [
        {
            icon: FaRegCircle,
            title: "Join a Discipleship Group",
            desc: "Be a part of a growing community of believers learning obedience, discipline, and faith in Christ together. Walk alongside others seeking to strengthen their relationship with God and live out His Word daily.",
            buttonText: "Contact us ",
            isDark: false,
            iconColor: goldColor,
            buttonBorderColor: blueColor,
            buttonHoverBg: blueColor,
            buttonHoverText: 'text-white'
        },
        {
            icon: FaRegLightbulb,
            title: "Support Our Ministry",
            desc: "Your contribution helps us reach more lives with God’s Word through study groups, devotional materials, and outreach programs. Together, we can continue to spread light and hope through Christ-centered teaching.",
            buttonText: "Contact us ",
            isDark: false,
            iconColor: goldColor,
            buttonBg: goldColor,
            buttonTextDark: 'text-gray-900',
            buttonHoverBg: blueColor,
            buttonHoverText: 'text-white'
        },
        {
            icon: FaRegClock,
            title: "Be A Discipler",
            desc: "Offer your time and talents to serve others—whether it’s helping with events, leading prayer, mentoring youth, or assisting in devotional sessions. Every act of service brings glory to God and builds His kingdom.",
            buttonText: "Contact us ",
            isDark: false,
            iconColor: goldColor,
            buttonBorderColor: blueColor,
            buttonHoverBg: blueColor,
            buttonHoverText: 'text-white'
        },
    ];


    return (
        <section className="py-20 bg-white text-gray-900"> {/* Main section background can remain white or light gray */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12 flex flex-col justify-center items-center gap-6">
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-center" style={{ color: blueColor }}>
                    JOIN THE JOURNEY. BE A MINISTER OF HIS GRACE
                    </h2>

                    <p className="text-gray-600 text-center max-w-[720px] mx-auto text-[20px] mt-4 leading-[28px]">
                    Discover how you can help advance the mission of discipleship by joining one of our online or onsite programs—equipping hearts, transforming lives, and growing together in Christ."
                    </p>
                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {helpOptions.map((option, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-xl transition-all duration-300 h-full flex flex-col ${option.isDark
                                ? 'bg-[#141722] text-white shadow-xl' // Dark card styling
                                : 'bg-gray-50 text-gray-900 shadow-md hover:shadow-lg' // Light card styling
                                }`}
                        >
                            {/* Icon */}
                            <option.icon
                                size={28}
                                style={{ color: option.iconColor }} // Apply dynamic icon color
                                className="mb-6"
                            />

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4">{option.title}</h3>

                            {/* Description */}
                            <p className={`mb-8 flex-grow ${option.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                {option.desc}
                            </p>

                            {/* Button */}
                            <a
                                href="/contact"
                                className={`text-sm cursor-pointer font-semibold mt-auto px-4 py-2 rounded-full border transition duration-300 self-start
      ${option.isDark
                                        ? `${option.buttonTextDark} border-transparent`
                                        : `text-gray-900 border-gray-900`
                                    }
  `}
                                style={
                                    option.isDark
                                        ? { backgroundColor: option.buttonBg, borderColor: option.buttonBg, color: '#141722' }
                                        : { borderColor: option.buttonBorderColor, color: '#141722' }
                                }
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = blueColor;
                                    e.currentTarget.style.borderColor = blueColor;
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    if (option.isDark) {
                                        e.currentTarget.style.backgroundColor = goldColor;
                                        e.currentTarget.style.borderColor = goldColor;
                                        e.currentTarget.style.color = '#141722';
                                    } else {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = blueColor;
                                        e.currentTarget.style.color = '#141722';
                                    }
                                }}
                            >
                                {option.buttonText}
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HelpUsSection;