import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Dna from "@/components/Dna";
import Featured from "@/components/Featured";
import Story from "@/components/Story";
import Baskets from "@/components/Baskets";
import Visit from "@/components/Visit";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PauseOffscreen from "@/components/PauseOffscreen";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Dna />
        <Featured />
        <Story />
        <Baskets />
        <Visit />
        <Newsletter />
      </main>
      <Footer />
      <PauseOffscreen />
    </>
  );
}
