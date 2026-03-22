"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-6 lg:px-8 h-[72px]">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary group-hover:bg-primary-hover transition-colors">
            <Zap className="h-5 w-5 text-white fill-white" />
          </div>
          <span className="text-dark font-extrabold text-[22px] tracking-tight">
            GROUNDED
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[15px] font-medium text-muted hover:text-dark transition-colors rounded-lg hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0400123456"
            className="flex items-center gap-2 text-[15px] font-semibold text-dark hover:text-primary transition-colors"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
              <Phone className="h-3.5 w-3.5 text-primary" />
            </div>
            0400 123 456
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-2.5 text-[15px] font-semibold text-white hover:bg-primary-hover transition-all shadow-[0_2px_8px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_16px_rgba(37,99,235,0.35)]"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-dark hover:bg-gray-100 transition-colors"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile overlay + menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] z-40">
          <div
            className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl">
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center text-[17px] font-medium text-dark py-3.5 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="my-3 h-px bg-border" />

              <a
                href="tel:0400123456"
                className="flex items-center gap-3 text-[17px] font-semibold text-dark py-3.5 px-4 rounded-xl hover:bg-gray-50"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                0400 123 456
              </a>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-[17px] font-semibold text-white shadow-[0_2px_8px_rgba(37,99,235,0.25)]"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
