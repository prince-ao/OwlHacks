"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
// import { pdfjs, Document, Page } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// import type { PDFDocumentProxy } from 'pdfjs-dist';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

export default function BookView() {
  const [data, setData] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const router = useRouter();

  function joinEveryNthLine(inp: string[], n: number) {
    const result: string[] = [];
    let counter = 0;
    let store = "";
    for (let i of inp) {
      if (counter === n) {
        result.push(store);
        store = "";
        counter = 0;
      }
      store += i;
      store += "<br>";
      counter++;
    }
    return result;
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "/Compilers - Principles, Techniques, and Tools.txt"
      );
      const pdfData = await response.text();
      setData(joinEveryNthLine(pdfData.split("\n"), 20));
    })();
  }, []);
  return (
    <div className="!bg-white min-h-[100vh]">
      <div className="flex items-center border-b-black border-b-2">
        <ArrowLeft
          className="text-black text-3xl w-[50px] h-[50px] hover:cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="text-black ms-[40%] font-bold text-xl">
          Compilers: Principles, Techniques, & Tools
        </h1>
      </div>
      <div
        className="text-black text-center align-middle pt-[20%] text-xl min-h-[90vh]"
        dangerouslySetInnerHTML={{ __html: data[page] }}
      />
      <div className="flex justify-between items-center">
        <ArrowBigLeft
          className="text-black w-[80px] h-[80px] cursor-pointer"
          onClick={() => setPage(page > 1 ? page - 1 : 1)}
        />
        <p className="text-black text-xl">
          {page}/{data.length}
        </p>
        <ArrowBigRight
          className="text-black w-[80px] h-[80px] cursor-pointer"
          onClick={() => setPage(page + 1)}
        />
      </div>
    </div>
  );
}
