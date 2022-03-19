import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Footer from "./Footer";
import Header from "./Header";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};
export default function TermsofService() {
  const [file, setFile] = useState("./tnc.pdf");
  const [numPages, setNumPages] = useState(null);
  useEffect(() => {
    let componentMount = true;
    if (componentMount) {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }
    return () => {
      componentMount = false;
    };
  }, []);
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <div>
      <Header />
      <div className="Example__container__document">
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        className="container-lg"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={2} />
        ))}
        </Document>
        </div>
      <Footer />
    </div>
  );
}
