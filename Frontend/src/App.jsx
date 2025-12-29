import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import './index.css'
import BlogDetails from "./pages/BlogDetails";
import AdminTestimonials from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        {/* 🚨 PROTECTED ADMIN ROUTE 🚨 */}
        <Route element={<ProtectedRoute />}> 
            <Route path="admin" element={<AdminTestimonials />} />
        </Route>

        <Route path="gallery" element={<Gallery />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallary" element={<Gallery />} /> {/* Note: You have 'gallery' and 'gallary' */}
        <Route path="/blog/:slug" element={<BlogDetails />} />

      </Route>
    </Routes>
  );
};

export default App;