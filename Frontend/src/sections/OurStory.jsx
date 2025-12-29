import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

 const blogPosts = [
    {
        title: "🌱 DEVOTIONAL: TRUST THAT LEADS TO PEACE",
        slug: "devotional-trust-that-leads-to-peace",
        excerpt:
            "Trust in the Lord with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths.",
        image: blog1,
        date: "2025-07-15",
        content: `
### TRUST THAT LEADS TO PEACE

To trust in the Lord is to place our full confidence in His character—His reliability, truth, and power—even when life feels uncertain. It’s more than acknowledging that God exists; it’s surrendering every part of our lives to His loving authority.
When we choose to rely on His wisdom instead of our own understanding, He faithfully directs our steps. We were never meant to navigate life alone. God invites us to lean into His strength, His love, and His guidance—giving Him control over our journey rather than trying to map it out ourselves.
As we walk in trust, peace becomes our compass. Not the absence of problems, but the presence of God’s assurance. In every decision, every detour, and every delay, His peace confirms that we’re walking in step with Him.
Would you like a visual version of this for your website or a printable devotional card? I can help with that too.
- By Ms. Regina Flanery
        `,
    },
    {
        title: "🌱 DEVOTIONAL: BEYOND THE COMFORT ZONE",
        slug: "beyond-the-comfort-zone",
        excerpt:
            "Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand.”",
        image: blog2,
        date: "2025-07-02",
        content: `
### Beyond the comfort zone

If you’re feeling stuck, uncertain, or afraid to move forward—this is a gentle nudge from heaven.
God didn’t create you to play it safe or stay small. His call on your life is bold, stretching you beyond what’s familiar. He invites you to trust, to grow, to walk by faith.
That comfort zone? It may feel secure, but it’s not where transformation happens. Your greatest breakthrough lies just beyond it—where faith meets obedience.
You’re not alone. Just like Peter stepping out of the boat, you’re invited to fix your eyes on Jesus and walk toward the impossible. He’s the One who strengthens, guides, and holds you up.
Declaration:
“Lord, I choose faith over fear. I step out, trusting that You are with me—strengthening, guiding, and upholding me every step of the way.”
        `,
    },
    {
        title: "🌱 DEVOTIONAL: WHEN THE SPIRIT HOVERS",
        slug: "when-the-spirit-hovers",
        excerpt:
            "The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the waters.",
        image: blog3,
        date: "2025-06-20",
        content: `
### When the spirit hovers

Before creation began, before light broke through the darkness, the Spirit of God was already there—hovering, brooding, moving with purpose.
The image is tender: like a bird fluttering over its young, protecting and nurturing. The Spirit wasn’t distant or passive. He was present—hovering over chaos, preparing to bring life, order, and beauty.
That same Spirit is moving over your life today.
Even if things feel formless, empty, or dark… even if your heart feels aimless or overwhelmed… the Holy Spirit is near. He is not waiting for you to have it all together. He is already moving toward you with intention and love, ready to create something new.
• He is already surrounding you—if you’ll welcome Him.
• He is the very presence and power of God.
• He is the Creator, still creating.
• He is supernatural, not limited by what you see.
• He brings light into every dark place.
Let this truth settle in your spirit: the same Spirit who hovered over the deep is hovering over you. And where He moves, new life begins.
- By Mrs. Manju Sujith
        `,
    },
];

const OurStories = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="mt-[0px]  px-6 md:px-12  bg-white text-gray-900">
     

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            onClick={() => navigate(`/blog/${post.slug}`)}
            className="group cursor-pointer bg-white border border-gray-200 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-gray-50"
          >
            <img
              src={post.image}
              alt={`Preview of blog: ${post.title}`}
              className="w-full h-64 object-cover rounded-t-3xl filter grayscale group-hover:grayscale-0"
              loading="lazy"
            />

            <div className="p-6 flex flex-col justify-between h-[250px]">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-[15px] text-gray-600">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex justify-between items-center mt-4">
                <time
                  className="text-xs text-gray-500"
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>

                <span className="text-gray-700 p-3 border border-gray-300 rounded-full transition-transform duration-300 group-hover:rotate-45 group-hover:bg-indigo-50 group-hover:border-indigo-500">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurStories;
