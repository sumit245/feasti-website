import React, { useState, useEffect } from 'react';
import { Page, Document, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Footer from './Footer';
import Header from './Header';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

export default function PrivacyPoilcy() {
  const [file, setFile] = useState('./pp.pdf');
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
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              size="A4"
              scale={4}
            />
          ))}
        </Document>
      </div>
      <Footer />
    </div>
  );
}
