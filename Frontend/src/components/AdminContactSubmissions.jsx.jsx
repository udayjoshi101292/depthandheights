import React, { useState, useEffect } from "react";
import axios from "axios"; 

// 🚨 NOTE: Using port 5000 to match the updated backend script.js
const API_URL_SUBMISSIONS = "https://heightanddepth.onrender.com/api/contact/submissions";
const API_URL_EXPORT = "https://heightanddepth.onrender.com/api/contact/export";

const AdminContactSubmissions = ({ blueColor }) => {
  const [submissions, setSubmissions] = useState([]);
  const [listLoading, setListLoading] = useState(true); 
  const [feedback, setFeedback] = useState("");
  const [exportLoading, setExportLoading] = useState(false);

  // Function to fetch contact submissions (called on mount and after actions)
  const fetchSubmissions = async () => {
    setListLoading(true); 
    try {
      const response = await axios.get(API_URL_SUBMISSIONS);
      setSubmissions(response.data);
      setFeedback("");
    } catch (err) {
      console.error("Error fetching contact submissions:", err);
      setFeedback("❌ Failed to fetch existing contact submissions.");
    } finally {
      setListLoading(false); 
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []); 
  
  // Handler for downloading the Excel file
  const handleExport = async () => {
    setExportLoading(true);
    try {
        const response = await axios.get(API_URL_EXPORT, {
            responseType: 'blob', // IMPORTANT: instructs axios to handle the response as a binary blob
        });

        // Create a temporary link to trigger the download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'contact_submissions.xlsx'); 
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url); // Clean up the URL object

        setFeedback("✅ Excel export started successfully!");
    } catch (error) {
        console.error("Export Error:", error);
        setFeedback(`❌ Error exporting data: ${error.message}`);
    } finally {
        setExportLoading(false);
    }
  };


  return (
    <div className="mt-12 p-6 border border-gray-200 rounded-lg shadow-lg bg-white">
        <h2 
          className="text-2xl font-semibold mb-4"
          style={{ color: blueColor }} 
        >
          Contact Submissions ({submissions.length})
        </h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b pb-4">
            <p className="text-sm text-gray-600 italic mb-2 md:mb-0">
                Messages from the Contact form are stored here.
            </p>
            <button
                onClick={handleExport}
                disabled={exportLoading || submissions.length === 0}
                className="bg-green-500 text-white text-sm px-4 py-2 rounded-md hover:bg-green-600 transition disabled:opacity-50"
            >
                {exportLoading ? "Generating..." : "Download Excel Export"} 💾
            </button>
        </div>

        {feedback && (
            <p className={`mb-4 text-sm ${feedback.startsWith('❌') ? 'text-red-600' : 'text-green-600'}`}>
                {feedback}
            </p>
        )}

        <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {listLoading ? (
                <p className="text-gray-500 italic">Loading contact submissions...</p>
            ) : submissions.length === 0 ? (
                <p className="text-gray-600">No contact submissions found.</p>
            ) : (
                submissions.map((s) => (
                    <div key={s._id} className="p-3 border border-gray-200 rounded-lg bg-gray-50 flex flex-col hover:shadow-md transition">
                        <div className="flex justify-between items-center text-sm mb-1">
                            <p className="font-semibold text-gray-900">{s.name} <span className="text-gray-500 text-xs">({s.email})</span></p>
                            <p className="text-xs text-gray-500">
                                {new Date(s.submittedAt).toLocaleDateString()} at {new Date(s.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                        <p className="text-sm text-gray-700 italic break-words border-l-2 border-gray-300 pl-3">"{s.message}"</p>
                        {s.phone && <p className="text-xs text-gray-500 mt-1">📞 Phone: {s.phone}</p>}
                    </div>
                ))
            )}
        </div>
    </div>
  );
};

export default AdminContactSubmissions;