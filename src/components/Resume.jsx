import React, { useState, useEffect } from "react";
import pdf from "../assets/resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScale(0.6);
      } else if (width < 1000) {
        setScale(1);
      } else {
        setScale(1.5);
      }
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="resume">
      <div className="container">
        <h1 className="py-8 px-0 text-4xl text-center">Resume</h1>
        <div className="resumepdf text-center">
          <Document file={pdf} className="pdf">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </div>

        <div className="text-center py-8 px-0">
          <a href={pdf} download>
            <button className="px-6 py-3 bg-white text-black italic font-bold border-2 border-black my-4  transition-all duration-300 hover:opacity-80 hover:bg-black hover:text-white ">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
