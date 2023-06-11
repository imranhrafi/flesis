import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import BenefitsSection from "../../components/BenefitsSection";
import HeroSection from "../../components/HeroSection";
import HowSection from "../../components/HowSection";
import NewsletterSection from "../../components/NewsletterSection";
import PricingSection from "../../components/PricingSection";
import TestimonialSection from "../../components/TestimonialSection";
import WhatNextSection from "../../components/WhatNextSection";
export default function Home() {
  return (
    <>
      {/* <Navbar navData={navData} /> */}
      <main className='w-full'>
        <HeroSection />
        <BenefitsSection />
        <WhatNextSection />
        <HowSection />
        <PricingSection />
        <TestimonialSection />
        <NewsletterSection />
      </main>
    </>
  );
}
