import BenefitsSection from "@/components/BenefitsSection";
import HeroSection from "@/components/HeroSection";
import HowSection from "@/components/HowSection";
import PricingSection from "@/components/PricingSection";
import WhatNextSection from "@/components/WhatNextSection";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Navbar from "@/components/navbar/Navbar";
import { navData } from "@/data/navData";
import NewsletterSection from "../components/NewsletterSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/footer/Footer";
export default function Home() {
  return (
    <>
      <Navbar navData={navData} />
      <main className='w-full'>
        <HeroSection />
        <BenefitsSection />
        <WhatNextSection />
        <HowSection />
        <PricingSection />
        <TestimonialSection />
        <NewsletterSection />
        <Footer />
      </main>
    </>
  );
}
