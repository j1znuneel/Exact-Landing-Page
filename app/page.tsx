"use client";
import React, { useState } from "react";

import HeroSection from "@/components/custom/hero";
import FeaturesSection from "@/components/custom/features";
import PricingSection from "@/components/custom/pricing";
import Hero from "@/components/custom/hero";
import { NavBar } from "@/components/custom/navbar";
import FAQ from "@/components/custom/faq";
import CTA from "@/components/custom/cta";
import Footer from "@/components/custom/footer";
import { ImageComparisonComponent } from "@/components/custom/spring-img-comparison";
import Testimonial from "@/components/custom/testimonial";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <Hero />
      <FeaturesSection />
      <ImageComparisonComponent />
      <FAQ />
      <PricingSection />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
