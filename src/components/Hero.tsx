"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#1862AF] to-[#0F4C8A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              <span className="text-[#EF7F0D]">Professional</span> IT Solutions
              for Your Business
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive IT services including CCTV, server solutions,
              networking, and software development. Tailored to meet your unique
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                asChild
                className="bg-[#EF7F0D] hover:bg-orange-600 text-white"
              >
                <a href="#services">Explore Services</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="bg-white border-[#EF7F0D] border-2 text-slate-800 hover:bg-[#EF7F0D] hover:text-white transition-colors"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="IT professional consulting with client"
              className="rounded-lg shadow-xl"
              width="600"
              height="400"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
}
