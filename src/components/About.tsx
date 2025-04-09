"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const stats = [
    { value: "500+", label: "Businesses Helped" },
    { value: "50+", label: "Service Providers" },
    { value: "15+", label: "Years Experience" },
    { value: "99%", label: "Customer Satisfaction" },
  ];

  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="IT consultants in a meeting"
              className="rounded-lg shadow-lg"
              width="600"
              height="400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              About TechCompare
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              TechCompare was founded with a clear mission: to help businesses
              make informed decisions about their IT infrastructure by providing
              transparent, side-by-side comparisons of services and pricing.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Our team of IT experts has decades of combined experience across
              various sectors, giving us unique insights into the specific needs
              of different businesses.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
              We maintain independence from service providers, ensuring our
              comparisons are unbiased and focused solely on providing the best
              information for your decision-making process.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
