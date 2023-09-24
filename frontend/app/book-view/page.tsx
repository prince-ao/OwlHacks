import { useEffect } from "react";

export default function BookView() {
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "http://localhost:3005/get-pdf?category=computer-science&book=Compilers - Principles, Techniques, and Tools.pdf"
      );
    })();
  }, []);
  return (
    <div>
      <h1>Hello, World</h1>
    </div>
  );
}
