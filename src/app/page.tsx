import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Navbar } from "@/sections/Navbar";
import { Pricing } from "@/sections/Pricing";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";


export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <LogoTicker/>
    <ProductShowcase/>
    <Pricing/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
    </div>
  );
}
