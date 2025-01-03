import Image from "next/image";
import Hero from "./_components/Hero";
import ThreeImage from "./_components/ThreeImage";
import ProgramSection from "./_components/ProgramSection";
import CardList from "./_components/CardList";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div className="w-full items-center justify-items-center min-h-screen">
      <Hero />
      <div className="p-8 pb-20 gap-16 sm:p-20">
      <ThreeImage />
      <CardList />
      <ProgramSection />
      <Contact />
      </div>
    </div>
  );
}
