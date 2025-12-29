import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import res from "../assets/resources1.png"; // Assuming this is a general resource image
// IMPORT YOUR BOOK ASSETS HERE
import book1PDF from "../assets/book1.pdf";
import book1Cover from "../assets/book1cover.png";
import book2Cover from "../assets/book2cover.png";
import whoarewe from "../assets/whoarewe.jpg";

// Note: Replace the above paths with your actual asset file names and extensions.

const Resources = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");

  const goldColor = "#FFAA4C";
  const blueColor = "#22ABDF";
  const redColor = "#E34444";

  // Book Data Structure
  const books = [
    {
      name: "Power of His Might",
      cover: book1Cover,
      pdf: book1PDF,
      downloadName: "The_Power_of_Identity.pdf",
    },
    {
      name: "Living the Blessed Life",
      cover: book2Cover,
      link: "https://www.awmi.net/study-guides/?id=417",
    },
  ];


  const identityDeclarations = [
    // ... (Your existing array)
    "I am chosen by God! Eph 1:4",
    "I am precious in His sight! Is 43:4",
    "I am God's handiwork! Eph 2:10",
    "I am a disciple taught of the Lord! Is 54:13",
    "I am fearfully and wonderfully made! Ps 139:14",
    "I am full of faith, and I have victory! 1 John 5:4",
    "I am healed by the stripes of Jesus! 1 Peter 2:24",
    "I am God's special treasure! Ex 19:5",
    "I am an overcomer! Jo 16:33",
    "I am led by the Spirit! Rom 8:14",
    "I am complete in Christ! Col 2:9",
    "I am a citizen of Heaven! Phil 3:20",
    "I am the light of the world! Eph 5:8",
    "I am redeemed from every curse! Gal 3:13",
    "I am a child of GOD! John 1:12",
    "I am made in God's image! Gen 1:27",
    "I am the temple of the Holy Spirit! 1 Cor 6:19",
    "I am blessed with every spiritual blessing! Eph 1:3",
    "I am an ambassador for Christ! 2 Cor 5:20",
    "I am known, consecrated and appointed! Jere 1:5",
  ];

  // Function to open the PDF modal
  const handleViewPDF = (pdfUrl) => {
    setCurrentPdfUrl(pdfUrl);
    setShowModal(true);
  };

  // Function to close the PDF modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPdfUrl("");
  };

  // ✅ Function to generate and download PDF (Existing logic remains)
  const handleDownloadPDF = () => {
    // ... (Your existing jsPDF logic)
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(34, 171, 223);
    doc.text("WHO AM I ???", 40, 60);

    // Subtitle
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text("DECLARING YOUR GOD GIVEN IDENTITY", 40, 90);

    // Scripture Quote
    doc.setFont("times", "italic");
    doc.setFontSize(12);
    doc.text(
      `DEATH AND LIFE ARE IN THE POWER OF THE TONGUE; AND THOSE WHO LOVE IT WILL EAT ITS FRUIT.`,
      40,
      120,
      { maxWidth: 520 }
    );
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 170, 76);
    doc.text("— Proverbs 18:21", 40, 140);

    // Section heading
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(34, 171, 223);
    doc.text("Our Identity in Christ", 40, 180);

    // Declarations list
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);

    let y = 210;
    identityDeclarations.forEach((item, index) => {
      if (y > 750) {
        doc.addPage();
        y = 60;
      }
      const parts = item.split("!");
      const statement = parts[0];
      const verse = parts.length > 1 ? parts[1] : null;

      doc.text(`✓ ${statement.trim()}!`, 50, y);
      if (verse) {
        doc.setFont("times", "italic");
        doc.setFontSize(11);
        doc.setTextColor(100, 100, 100);
        doc.text(verse.trim(), 70, y + 15);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(50, 50, 50);
        y += 35;
      } else {
        y += 25;
      }
    });

    // Footer note
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(227, 68, 68);
    doc.text(
      "Heights and Depths Ministry walks the journey with you to be deeply grounded in God's great love.",
      40,
      y + 20,
      { maxWidth: 520 }
    );

    // Save PDF
    doc.save("Declaration_of_Identity.pdf");
  };
  // End of jsPDF logic

  // Simple Modal Component
  const PdfModal = ({ show, onClose, pdfUrl }) => {
    if (!show) return null;

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClose} // Close on backdrop click
      >
        <div
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "90%",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
        >
          <div
            style={{
              padding: "10px 20px",
              display: "flex",
              justifyContent: "flex-end",
              borderBottom: "1px solid #ccc",
            }}
          >
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#333",
              }}
            >
              &times;
            </button>
          </div>
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            style={{ flexGrow: 1, width: "100%", border: "none" }}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="bg-blue-50 py-20 px-6 md:px-12 lg:px-24 space-y-16">
        {/* Existing Content */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
            style={{ color: blueColor }}
          >
            WHO AM I ???
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold text-gray-700">
            DECLARING YOUR GOD GIVEN IDENTITY
          </h2>
          <div className="pt-6">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
              DEATH AND LIFE ARE IN THE POWER OF THE TONGUE;<br />
              AND THOSE WHO LOVE IT WILL EAT ITS FRUIT.
            </p>
            <p
              className="text-lg font-medium mt-2"
              style={{ color: goldColor }}
            >
              PROVERBS 18:21
            </p>
          </div>
        </div>

        {/* <div className="mx-auto gap-12 items-start bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="text-gray-800 space-y-4 ">
            <div
              className=" flex flex-col md:flex-row justify-between border-b-2 pb-2 mb-6 items-start md:items-center gap-6 md:gap-0"
              style={{ color: blueColor, borderBottomColor: goldColor }}
            >
              <h3 className="text-3xl font-bold">Our Identity in Christ</h3>
              <button
                onClick={handleDownloadPDF}
                className="bg-[#FFAA4C] hidden md:block cursor-pointer hover:bg-[#e69b3f] text-white px-5 py-2 rounded-lg font-semibold transition-all"
              >
                Download Declaration
              </button>
            </div>
            <ul className="space-y-3 list-none p-0">
              {identityDeclarations.map((declaration, index) => (
                <li
                  key={index}
                  className="flex items-start text-lg text-gray-700"
                >
                  <span
                    className="font-extrabold mr-3 mt-1"
                    style={{ color: goldColor }}
                  >
                    ✓
                  </span>
                  {declaration.split("!").length > 1 ? (
                    <>
                      <span className="font-semibold">
                        {declaration.split("!")[0]}!
                      </span>
                      <span className="text-sm italic ml-1 text-gray-500">
                        {declaration.split("!")[1]}
                      </span>
                    </>
                  ) : (
                    <span className="font-semibold">{declaration}</span>
                  )}
                </li>
              ))}
              <button
                onClick={handleDownloadPDF}
                className="bg-[#FFAA4C] md:hidden mx-auto mt-6 block cursor-pointer hover:bg-[#e69b3f] text-white px-5 py-2 rounded-lg font-semibold transition-all"
              >
                Download Declaration
              </button>
            </ul>
          </div>
        </div> */}

        <div className="mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
          <div
            className="flex justify-between border-b-2 pb-2 mb-6 items-center"
            style={{ color: blueColor, borderBottomColor: goldColor }}
          >
            <h3 className="text-3xl font-bold">Our Identity in Christ</h3>
            <button
              onClick={handleDownloadPDF}
              className="bg-[#FFAA4C] hidden md:block cursor-pointer hover:bg-[#e69b3f] text-white px-5 py-2 rounded-lg font-semibold transition-all"
            >
              Download Declaration
            </button>
          </div>

          {/* FLEX CONTAINER */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* IMAGE SIDE */}
            <div className="w-full md:w-1/2">
              <img
                src={whoarewe}
                alt="Our Identity in Christ"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>

            {/* TEXT SIDE */}
            <div className="w-full md:w-1/2 text-gray-800 space-y-4">
              <ul className="space-y-3 list-none p-0">
                {identityDeclarations.map((declaration, index) => (
                  <li
                    key={index}
                    className="flex items-start text-lg text-gray-700"
                  >
                    <span
                      className="font-extrabold mr-3 mt-1"
                      style={{ color: goldColor }}
                    >
                      ✓
                    </span>
                    {declaration.split("!").length > 1 ? (
                      <>
                        <span className="font-semibold">
                          {declaration.split("!")[0]}!
                        </span>
                        <span className="text-sm italic ml-1 text-gray-500">
                          {declaration.split("!")[1]}
                        </span>
                      </>
                    ) : (
                      <span className="font-semibold">{declaration}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="bg-[#FFAA4C] md:hidden cursor-pointer hover:bg-[#e69b3f] text-white px-5 py-2 rounded-lg font-semibold transition-all"
            >
              Download Declaration
            </button>
          </div>
        </div>

        {/* End Existing Content */}

        {/* --- NEW BOOKS SECTION --- */}
        <div className="mx-auto pt-10">
          <h3
            className="text-4xl md:text-5xl font-extrabold text-center mb-12"
            style={{ color: blueColor }}
          >
            Recommended Books
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            {books.map((book, index) => (
              <div
                key={index}
                className="w-full sm:w-64 p-5 bg-white rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center"
              >
                <div
                  className="w-40 h-56 cursor-pointer rounded-lg overflow-hidden shadow-lg mb-4"
                // onClick={() => handleViewPDF(book.pdf)}
                >
                  <img
                    src={book.cover}
                    alt={`${book.name} Cover`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-lg font-bold text-gray-900 text-center mb-3">
                  {book.name}
                </p>
                {book.pdf ? (
                  <a
                    href={book.pdf}
                    download={book.downloadName}
                    className="bg-[#FFAA4C] cursor-pointer hover:bg-[#e69b3f] text-white px-5 py-2 rounded-lg font-semibold transition-all"
                  >
                    Download Book
                  </a>
                ) : (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFAA4C] cursor-pointer hover:bg-[#e69b3f] text-white px-5 py-2 rounded-lg font-semibold transition-all"
                  >
                    Open Book
                  </a>
                )}

              </div>
            ))}
          </div>
        </div>
        {/* --- END NEW BOOKS SECTION --- */}

        <div className="max-w-4xl mx-auto text-center pt-8">
          <p
            className="text-xl md:text-2xl font-semibold leading-relaxed"
            style={{ color: redColor }}
          >
            Height and Depth Ministry walks the journey with you to be deeply
            grounded in God's great love so you can experience the heights of
            His blessing in every area of your life.
          </p>
        </div>
      </section>

      <PdfModal
        show={showModal}
        onClose={handleCloseModal}
        pdfUrl={currentPdfUrl}
      />
    </>
  );
};

export default Resources;
