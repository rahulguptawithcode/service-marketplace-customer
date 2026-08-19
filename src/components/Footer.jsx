import { Phone, Mail, MapPin } from "lucide-react";
import footerLogo from "../assets/footer-logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#061d36] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-[1400px] px-8 py-12 lg:px-14">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_0.9fr_1.25fr]">

          {/* ================= BRAND ================= */}
          <div>

            {/* Logo */}
            <a href="/" className="inline-block">
              <img
                src={footerLogo}
                alt="ProFind"
                className="h-auto w-[230px] object-contain"
              />
            </a>

            {/* Description */}
            <p className="mt-5 max-w-[320px] text-[15px] leading-7 text-white/70">
              The easiest way to find trusted
              <br />
              local professionals for your
              <br />
              home and business needs.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-5">

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 hover:text-blue-400"
              >
                <FaFacebookF size={20} />
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 hover:text-pink-400"
              >
                <FaInstagram size={21} />
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 hover:text-red-400"
              >
                <FaYoutube size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition hover:bg-white/10 hover:text-blue-400"
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>
          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-[15px] font-bold uppercase tracking-wide text-white">
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4 text-[15px] text-white/70">

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Find a Professional
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Reviews
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* ================= FOR PROFESSIONALS ================= */}
          <div>

            <h3 className="text-[15px] font-bold uppercase tracking-wide text-white">
              For Professionals
            </h3>

            <ul className="mt-7 space-y-4 text-[15px] text-white/70">

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  List Your Business
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Professional Login
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Pricing Plans
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Resources
                </a>
              </li>

            </ul>
          </div>


          {/* ================= SUPPORT ================= */}
          <div>

            <h3 className="text-[15px] font-bold uppercase tracking-wide text-white">
              Support
            </h3>

            <ul className="mt-7 space-y-4 text-[15px] text-white/70">

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Safety Tips
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>


          {/* ================= CONTACT US ================= */}
          <div>

            <h3 className="text-[15px] font-bold uppercase tracking-wide text-white">
              Contact Us
            </h3>

            <div className="mt-7 space-y-5">

              {/* Phone */}
              <a
                href="tel:+11234567890"
                className="flex items-start gap-4 text-[15px] text-white/70 transition hover:text-white"
              >
                <Phone
                  size={22}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-white"
                />

                <span>
                  (123) 456-7890
                </span>
              </a>


              {/* Email */}
              <a
                href="mailto:support@profind.com"
                className="flex items-start gap-4 text-[15px] text-white/70 transition hover:text-white"
              >
                <Mail
                  size={22}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-white"
                />

                <span>
                  support@profind.com
                </span>
              </a>


              {/* Address */}
              <div className="flex items-start gap-4 text-[15px] leading-7 text-white/70">

                <MapPin
                  size={23}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0 text-white"
                />

                <span>
                  123 Main Street,
                  <br />
                  Dallas, TX 75201
                </span>

              </div>

            </div>
          </div>

        </div>
      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-8 py-5 text-[14px] text-white/65 lg:flex-row lg:items-center lg:justify-between lg:px-14">

          {/* Copyright */}
          <p>
            © 2024 ProFind. All Rights Reserved.
          </p>


          {/* Legal */}
          <div className="flex items-center gap-4">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms of Service
            </a>

            <span className="text-white/30">
              |
            </span>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
