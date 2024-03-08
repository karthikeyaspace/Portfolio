import React, { useState, useEffect } from "react";
import "./Resume.css";
import pdf from "../../assets/resume.pdf";
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
        <h1>Resume</h1>
        <div className="resumepdf">
          <Document file={pdf} className="pdf">
            <Page pageNumber={1} scale={scale} />
          </Document>
        </div>

        <div className="download">
          <a href={pdf} download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
