import Hero from "@/components/sections/home/Hero";
import Stats from "@/components/sections/home/Stats";
import Destinations from "@/components/sections/home/Destinations";
import Services from "@/components/sections/home/Services";
import Fleet from "@/components/sections/home/Fleet";
import Packages from "@/components/sections/home/Packages";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Testimonials from "@/components/sections/home/Testimonials";
import HomeFAQ from "@/components/sections/home/HomeFAQ";
import HomeContact from "@/components/sections/home/HomeContact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Destinations />
      <Services />
      <Fleet />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <HomeFAQ />
      <HomeContact />
    </>
  );
}
