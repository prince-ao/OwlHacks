import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="bg-white h-[100vh]">
      <Header>
        <h2 className="text-black">Something else</h2>
      </Header>
      <h1 className="text-black">Hello, World</h1>
    </main>
  );
}
