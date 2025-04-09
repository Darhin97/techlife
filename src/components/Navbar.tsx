"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white transition-shadow duration-200",
        scrolled && "shadow-sm",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center relative">
            <Link href="/" className="text-[#1862AF] font-bold text-xl ">
              <div className={"relative w-10 h-10 "}>
                {/*Tech<span className="text-[#EF7F0D]">Solutions</span>*/}
                <Image
                  src={"logo.jpeg"}
                  alt={"logo"}
                  objectFit={"cover"}
                  fill
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-[#EF7F0D] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="absolute left-0 right-0 top-full md:hidden bg-white shadow-lg z-50"
        initial={{ opacity: 0, y: -20, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -20,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-[#EF7F0D]/10 hover:text-[#EF7F0D] rounded-md transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -10 }}
              transition={{
                duration: 0.2,
                delay: navItems.indexOf(item) * 0.05,
                ease: "easeOut",
              }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
