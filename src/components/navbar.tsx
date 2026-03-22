"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-us" },
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 bg-white ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-dark font-extrabold text-xl tracking-tight">
          <Zap className="h-6 w-6 text-primary fill-primary" />
          GROUNDED
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0400123456"
            className="flex items-center gap-1.5 text-sm font-medium text-dark"
          >
            <Phone className="h-4 w-4" />
            0400 123 456
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Get a Free Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-dark"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
        <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-dark py-2 border-b border-border"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0400123456"
            className="flex items-center gap-2 text-lg font-medium text-dark py-2"
          >
            <Phone className="h-5 w-5" />
            0400 123 456
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
}
