// script.js (Node.js/Express Backend with require/CommonJS)

// Load environment variables from .env file
require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const exceljs = require('exceljs'); // 👈 NEW: Import exceljs

const app = express();
const PORT = process.env.PORT || 5000; // 🚨 NOTE: Changed port to 5000 for standard practice
const MONGODB_URI = process.env.MONGODB_URI;

// --- Cloudinary Configuration ---
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// --- Multer Configuration ---
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// --- Middleware Setup ---
app.use(cors());
app.use(express.json()); // To parse JSON bodies (for contact form)
app.use(express.urlencoded({ extended: true }));


// --- MongoDB Connection ---
mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Mongoose Schemas and Models ---

// Testimonial Schema and Model (Existing)
const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  message: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// ------------------------------------
// 🚨 NEW: Contact Submission Schema and Model
// ------------------------------------
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String }, // Optional
    message: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

const ContactSubmission = mongoose.model('ContactSubmission', contactSchema);

// --- API Routes ---

// 1. GET: Fetch all testimonials (Public display) - Existing route
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching testimonials', error: err.message });
  }
});

// 2. POST: Add a new testimonial (Admin control page) - Existing route
app.post('/api/testimonials', upload.single('imageFile'), async (req, res) => {
  try {
    const { name, role, message } = req.body;
    const file = req.file;

    if (!name || !role || !message || !file) {
      return res.status(400).json({ message: 'Missing name, role, message, or image file.' });
    }

    const b64 = Buffer.from(file.buffer).toString("base64");
    let dataURI = "data:" + file.mimetype + ";base64," + b64;
    
    const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
        folder: "testimonial-images",
        resource_type: "auto"
    });

    const newTestimonial = new Testimonial({
      name,
      role,
      message,
      image: cloudinaryResponse.secure_url
    });

    const savedTestimonial = await newTestimonial.save();
    res.status(201).json(savedTestimonial);

  } catch (err) {
    console.error("Cloudinary or MongoDB Error:", err);
    res.status(500).json({ message: 'Error saving testimonial', error: err.message });
  }
});

// 3. DELETE: Delete a testimonial by ID (Admin control page) - Existing route
app.delete('/api/testimonials/:id', async (req, res) => {
  try {
    const result = await Testimonial.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    res.json({ message: 'Testimonial deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting testimonial', error: err.message });
  }
});


// ------------------------------------
// 🚨 NEW: Contact Form Submission API Routes
// ------------------------------------

// 4. POST: Save a new contact submission
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields: name, email, or message.' });
        }

        const newSubmission = new ContactSubmission({
            name,
            email,
            phone,
            message,
        });

        await newSubmission.save();
        res.status(201).json({ message: 'Contact message received successfully!' });
    } catch (err) {
        console.error("Contact Form Error:", err);
        res.status(500).json({ message: 'Failed to save contact message', error: err.message });
    }
});

// 5. GET: Fetch all contact submissions (Admin view)
app.get('/api/contact/submissions', async (req, res) => {
    try {
        const submissions = await ContactSubmission.find().sort({ submittedAt: -1 });
        res.json(submissions);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching contact submissions', error: err.message });
    }
});

// 6. GET: Download contact submissions as Excel (Admin action)
app.get('/api/contact/export', async (req, res) => {
    try {
        // Fetch data
        const submissions = await ContactSubmission.find().sort({ submittedAt: 1 }).lean(); 
        
        const workbook = new exceljs.Workbook();
        const worksheet = workbook.addWorksheet('Contact Submissions');

        // Define columns
        worksheet.columns = [
            { header: 'ID', key: '_id', width: 30 },
            { header: 'Name', key: 'name', width: 25 },
            { header: 'Email', key: 'email', width: 30 },
            { header: 'Phone', key: 'phone', width: 20 },
            { header: 'Message', key: 'message', width: 50 },
            { header: 'Submitted At', key: 'submittedAt', width: 20 }
        ];

        // Add rows
        worksheet.addRows(submissions);

        // Set response headers for download
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=' + 'contact_submissions.xlsx');
        
        // Write to response stream
        await workbook.xlsx.write(res);
        res.end();

    } catch (err) {
        console.error("Excel Export Error:", err);
        res.status(500).json({ message: 'Failed to generate Excel export', error: err.message });
    }
});


// --- Server Start ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});