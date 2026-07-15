import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Story from "@/components/Story";
import Baskets from "@/components/Baskets";
import Visit from "@/components/Visit";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Ticker />
      <Categories />
      <Featured />
      <Story />
      <Baskets />
      <Visit />
      <Newsletter />
      <Footer />
    </main>
  );
}
