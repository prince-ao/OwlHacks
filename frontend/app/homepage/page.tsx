"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Rowdies } from "next/font/google";

const rowdies = Rowdies({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gradient-background">
      <header className="text-center mb-8">
        <Image
          src="/bookstack.png"
          alt="Your Logo"
          className="mb-2 mx-auto"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-bold">
          Welcome to <span className={rowdies.className}>Bookstack.ai</span>
        </h1>
      </header>
      <div className="text-lg text-gray-600 text-center mb-16 flex justify-center">
        <p className="text-white w-[52%]">
          Welcome to a world where the power of literature is accessible to
          everyone. Our mission goes beyond the mere digitization of books -
          we're bridging the gap between stories and their readers.
        </p>
      </div>
      <div className="flex gap-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href="/api/auth/login">Log in</a>
        </button>
        <button className="bg-gray-100 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
          <a href="/api/auth/login" className="text-black">
            Sign up
          </a>
        </button>
      </div>
    </div>
  );
}
