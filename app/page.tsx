"use client";
import React, { useState } from "react";

import HeroSection from "@/components/custom/hero";
import PricingSection from "@/components/custom/pricing";
import Hero from "@/components/custom/hero";
import { NavBar } from "@/components/custom/navbar";
import FAQ from "@/components/custom/faq";
import CTA from "@/components/custom/cta";
import Footer from "@/components/custom/footer";
import Testimonial from "@/components/custom/testimonial";
import Feature from "@/components/custom/features";
import { ImageComparisonComponent } from "@/components/custom/comparison";

const LandingPage = () => {
  return (
    <div className="min-h-screen ">
      <NavBar />
      <Hero />
      <Feature />
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
