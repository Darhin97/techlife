import { Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Tech<span className="text-[#EF7F0D]">Solutions</span>
            </h3>
            <p className="mb-4">
              We provide comprehensive IT solutions to help your business thrive
              in today&apos;s digital landscape with cutting-edge technology and
              expert support.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-[#EF7F0D] transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#EF7F0D] transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-[#EF7F0D] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  CCTV Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  Server Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  Network Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  System Integration
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EF7F0D] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#EF7F0D] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#EF7F0D] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/*<div>*/}
          {/*  <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>*/}
          {/*  <ul className="space-y-2">*/}
          {/*    <li>*/}
          {/*      <a href="#" className="hover:text-[#EF7F0D] transition-colors">*/}
          {/*        Privacy Policy*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="hover:text-[#EF7F0D] transition-colors">*/}
          {/*        Terms of Service*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="hover:text-[#EF7F0D] transition-colors">*/}
          {/*        Cookie Policy*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <a href="#" className="hover:text-[#EF7F0D] transition-colors">*/}
          {/*        Disclaimer*/}
          {/*      </a>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} TechSolutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
