import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cases from "@/components/Cases";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-[#0f0f0f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cases />
      <About />
      <Footer />
    </main>
  );
}
