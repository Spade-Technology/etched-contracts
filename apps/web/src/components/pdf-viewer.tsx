import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const PDFViewer = ({ file, navBarPosition = "bottom" }: { file: File | string; navBarPosition?: "top" | "bottom" }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div>
      {navBarPosition === "top" && (
        <div className="flex justify-between">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div className="flex">
            <ChevronLeft
              className="h-6 w-6 cursor-pointer hover:bg-gray-100"
              onClick={() => setPageNumber((current) => (current === 1 ? numPages : --current) || 1)}
            />
            <ChevronRight
              className="h-6 w-6 cursor-pointer hover:bg-gray-100"
              onClick={() => setPageNumber((current) => (current === numPages ? 1 : ++current))}
            />
          </div>
        </div>
      )}
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className="flex justify-center">
        <Page pageNumber={pageNumber} />
      </Document>

      {navBarPosition === "bottom" && (
        <div className="flex justify-between">
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div className="flex">
            <ChevronLeft
              className="h-6 w-6 cursor-pointer hover:bg-gray-100"
              onClick={() => setPageNumber((current) => (current === 1 ? numPages : --current) || 1)}
            />
            <ChevronRight
              className="h-6 w-6 cursor-pointer hover:bg-gray-100"
              onClick={() => setPageNumber((current) => (current === numPages ? 1 : ++current))}
            />
          </div>
        </div>
      )}
    </div>
  );
};
