import { DollarSign, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const props = [
  {
    icon: DollarSign,
    title: "No Call-Out Fee",
    description:
      "Seriously. We quote before we charge. No surprises on your bill.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description:
      "Call before 10am, we'll be there today. Melbourne's north only.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Fully licensed (VIC REC XXXXX). Certificate of compliance on every job.",
  },
  {
    icon: Sparkles,
    title: "Clean & Respectful",
    description:
      "We wear boot covers, clean up after ourselves, and actually text when we're on the way.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-dark py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-14">
            Why Grounded?
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
          {props.map((prop, i) => (
            <ScrollReveal key={prop.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <prop.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {prop.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
