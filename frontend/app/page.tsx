import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import TextToSpeech from "./components/TextToSpeech";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Body />
      <TextToSpeech />
      <Footer />
    </main>
  );
}