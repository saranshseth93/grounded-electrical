import { Zap, Lightbulb, Cable, Home, Wrench, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const services = [
  {
    icon: Zap,
    title: "Powerpoint Installation",
    description:
      "New points, replacements, and USB outlets. The basics, done right.",
  },
  {
    icon: Lightbulb,
    title: "Lighting & LED Upgrades",
    description:
      "Downlights, outdoor lighting, sensors, and LED conversions.",
  },
  {
    icon: Cable,
    title: "Switchboard Upgrades",
    description:
      "Old ceramic fuses to modern safety switches. Non-negotiable for safety.",
  },
  {
    icon: Home,
    title: "New Home Wiring",
    description:
      "Full electrical fit-outs for new builds and renovations.",
  },
  {
    icon: Wrench,
    title: "Fault Finding & Repairs",
    description:
      "Tripping circuits, flickering lights, dead outlets. We find it, we fix it.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    description:
      "Pre-purchase inspections, compliance certificates, and periodic testing.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              From a dodgy power point to a full rewire — we handle it.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <service.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
