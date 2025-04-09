"use client";

import { motion } from "framer-motion";
import { IconBadge } from "./ui/icon-badge";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.2 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -5 },
    show: { opacity: 1, x: 0, transition: { duration: 0.3, delay: 0.4 } },
    hover: { x: 3 },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -5 },
    show: { opacity: 1, x: 0 },
    hover: { x: 5, transition: { duration: 0.2, yoyo: Infinity } },
  };

  return (
    <section id="services" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Professional Services
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide comprehensive IT solutions tailored to meet your business
            needs.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden shadow-md relative group h-full"
              variants={item}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="p-6 h-full flex flex-col">
                <motion.div className="mx-auto mb-4" variants={iconVariants}>
                  <IconBadge
                    icon={service.icon}
                    className="group-hover:bg-[#EF7F0D] group-hover:text-white"
                  />
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold text-center text-slate-800 mb-4"
                  variants={titleVariants}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-slate-600 text-center mb-6 flex-grow"
                  variants={descriptionVariants}
                >
                  {service.description}
                </motion.p>

                <motion.div
                  className="mt-auto"
                  initial="hidden"
                  animate="show"
                  whileHover="hover"
                >
                  <motion.a
                    href="#contact"
                    className="flex items-center justify-center space-x-1 text-[#EF7F0D] hover:text-[#D36C0B] font-medium"
                    variants={linkVariants}
                  >
                    <span>Learn More</span>
                    <motion.span variants={arrowVariants}>
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>

              <motion.div
                className={`absolute bottom-0 left-0 h-1 ${index % 2 === 0 ? "bg-[#EF7F0D]" : "bg-[#1862AF]"}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
