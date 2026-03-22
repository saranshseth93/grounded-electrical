import { DollarSign, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const props = [
  {
    icon: DollarSign,
    title: "No Call-Out Fee",
    description:
      "Seriously. We quote before we charge. No surprises on your bill.",
    stat: "$0",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "Call before 10am, we'll be there today. Melbourne's north only.",
    stat: "<4hrs",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed (VIC REC XXXXX). Certificate of compliance on every job.",
    stat: "100%",
  },
  {
    icon: Sparkles,
    title: "Clean & Respectful",
    description:
      "We wear boot covers, clean up after ourselves, and actually text when we're on the way.",
    stat: "5.0★",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative bg-dark noise-overlay py-24 sm:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/20 px-4 py-1.5 text-sm font-semibold text-accent mb-4">
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight">
              Why Grounded?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {props.map((prop, i) => (
            <ScrollReveal key={prop.title} delay={i * 0.08}>
              <div className="group relative rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 sm:p-8 hover:bg-white/[0.07] transition-all duration-300 h-full">
                <div className="flex items-start gap-5">
                  {/* Stat badge */}
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/10">
                    <span className="text-xl font-extrabold text-accent">{prop.stat}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      {prop.title}
                    </h3>
                    <p className="text-gray-300 text-[15px] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
