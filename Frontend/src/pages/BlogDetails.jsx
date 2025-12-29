import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import { FaArrowLeft } from "react-icons/fa6";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Blog not found</h2>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="pt-10 md:pt-28 pb-20 px-6 md:px-20 bg-white min-h-screen text-gray-900">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-indigo-600 mb-8 hover:underline"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Blog Header */}
      <article className="max-w-4xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-3xl mb-8 shadow-md"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{post.title}</h1>
        <time
          className="block text-gray-500 text-sm mb-6"
          dateTime={post.date}
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        {/* Blog Content */}
        <div
          className="prose prose-indigo max-w-none leading-relaxed text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>") }}
        />
      </article>
    </section>
  );
};

export default BlogDetails;
