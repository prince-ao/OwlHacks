"use client"

import { useRouter } from 'next/navigation'

export default function Home() {
    const router = useRouter()
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to Our Landing Page</h1>
      </header>
      <main>
        <a href="/api/auth/login">login</a>
        <p>This is a simple landing page created with TypeScript and React.</p>
        <button>Get Started</button>
      </main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}