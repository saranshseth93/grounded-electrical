import { Zap, Shield, Star, Clock, ChevronDown } from "lucide-react";
/* eslint-disable @next/next/no-img-element */

export function Hero() {
  return (
    <section className="relative bg-dark hero-grid noise-overlay overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/20 px-4 py-2 text-sm font-semibold text-accent mb-8">
              <Zap className="h-3.5 w-3.5 fill-accent" />
              Melbourne&apos;s Northern Suburbs
            </div>

            <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.08] text-white mb-6 tracking-tight">
              Your Local Sparkie.
              <br />
              <span className="text-gradient">No Call-Out Fee.</span>
              <br />
              No Rubbish.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
              Licensed electrical work for homes and businesses across Wollert,
              Epping, South Morang, and Craigieburn. Same-day service available.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#contact"
                className="btn-glow inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(37,99,235,0.3)]"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:0400123456"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/20 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Call 0400 123 456
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Star, label: "5.0 Google Reviews", fill: true },
                { icon: Clock, label: "Same-Day Service" },
              ].map(({ icon: Icon, label, fill }) => (
                <span key={label} className="flex items-center gap-2 text-sm text-gray-300">
                  <Icon className={`h-4 w-4 text-accent ${fill ? "fill-accent" : ""}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right column — illustration */}
          <div className="hidden lg:block">
            <img
              src="/grounded-electrical/header.svg"
              alt="Electrician illustration"
              width={500}
              height={500}
              className="w-full max-w-[500px] h-auto mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a href="#services" aria-label="Scroll to services" className="animate-bounce-gentle text-gray-600 hover:text-gray-400 transition-colors">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>

    </section>
  );
}
