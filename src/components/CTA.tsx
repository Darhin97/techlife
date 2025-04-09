"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="bg-[#1862AF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Get expert consultations and tailored IT solutions for your business
            needs.
          </p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-[#EF7F0D] text-white hover:bg-[#D36C0B] border-[#EF7F0D]"
          >
            <a href="#contact">Contact Us Now</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
