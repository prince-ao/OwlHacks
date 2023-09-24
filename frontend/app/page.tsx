"use client"
import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-[#401654]">
        <header className="text-center mb-4">
            <img src="/bookstack.png" alt="Your Logo" className="mb-2 mx-auto" width="300" height="300"/>
            <h1 className="text-4xl font-bold">Welcome to Bookstack.ai</h1>
        </header>
        <main className="text-lg text-gray-600 text-center mb-4">
            <p>This is a simple landing page created with TypeScript and React.</p>
        </main>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <a href="/api/auth/login" className="hover:underline">Get Started</a>
        </button>
        <footer className="mt-4 text-gray-500 text-center">
            &copy; 2023 Your Company
        </footer>
        </div>
    );
}