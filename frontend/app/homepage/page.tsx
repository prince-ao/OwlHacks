import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      {/*<a href="/api/auth/login">Login</a>*/}
      <Header />
      <Body />
      <Footer />
    </main>
  );

    return (
    <div className="items-center flex justify-center">
      <header>
        <h1 className="items-center flex justify-center">Welcome to Our Landing Page</h1>
      </header>
      <main className="items-center flex justify-center">
        This is a simple landing page created with TypeScript and React.
      </main>
      <button className="items-center flex justify-center">
        Get Started
      </button>
      <footer className="items-center flex justify-center">
        &copy; 2023 Your Company
      </footer>
    </div>
  );
}


