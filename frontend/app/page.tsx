import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Body />
      <a href="/api/auth/login">Login</a>
      <Footer />
    </main>
  );
}
