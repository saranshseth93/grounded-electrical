import { Zap, Shield, Star, Clock, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-dark hero-grid pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <Zap className="h-4 w-4" />
              Melbourne&apos;s Northern Suburbs
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.1] text-white mb-6">
              Your Local Sparkie.
              <br />
              No Call-Out Fee.
              <br />
              No Rubbish.
            </h1>

            <p className="text-lg text-gray-300 max-w-lg mb-8">
              Licensed electrical work for homes and businesses across Wollert,
              Epping, South Morang, and Craigieburn. Same-day service available.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:0400123456"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Call 0400 123 456
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-accent" />
                Licensed &amp; Insured
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-accent fill-accent" />
                5.0 Google Reviews
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-accent" />
                Same-Day Service
              </span>
            </div>
          </div>

          {/* Right column — icon composition */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
              <div className="relative flex items-center justify-center w-full h-full rounded-3xl bg-gradient-to-br from-primary to-accent/80 shadow-2xl">
                <Zap className="h-32 w-32 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Star className="h-8 w-8 text-accent fill-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <a href="#services" aria-label="Scroll to services" className="animate-bounce-gentle text-gray-500">
          <ChevronDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
