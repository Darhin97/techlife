"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const url = window.location.href.split("#");
    console.log({ url });
    if (url && url.length > 1) {
      const section = url[1];
      if (section) {
        const divSection = window.document.getElementById(section);
        if (divSection) {
          divSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);
  return (
    <div className="flex flex-col min-h-screen scroll-smooth ">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactSection />
      <CTA />

      <Footer />
    </div>
  );
}
