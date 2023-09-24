import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="items-center flex justify-center">
      <header>
        <h1 className="items-center flex justify-center">Welcome to Our Landing Page</h1>
      </header>
      <main className="items-center flex justify-center">
        <a href="/api/auth/login">Login</a>
        //This is a simple landing page created with TypeScript and React.
      </main>
      <button className="items-center flex justify-center">
        Get Started
      </button>
      <footer className="items-center flex justify-center">
        &copy; 2023 Your Company
      </footer>
    </div>
  );
};

export default LandingPage;