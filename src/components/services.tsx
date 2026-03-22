import { Zap, Lightbulb, Cable, Home, Wrench, ShieldCheck } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const services = [
  {
    icon: Zap,
    title: "Powerpoint Installation",
    description:
      "New points, replacements, and USB outlets. The basics, done right.",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Lightbulb,
    title: "Lighting & LED Upgrades",
    description:
      "Downlights, outdoor lighting, sensors, and LED conversions.",
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Cable,
    title: "Switchboard Upgrades",
    description:
      "Old ceramic fuses to modern safety switches. Non-negotiable for safety.",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Home,
    title: "New Home Wiring",
    description:
      "Full electrical fit-outs for new builds and renovations.",
    color: "from-violet-500/10 to-violet-600/5",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: Wrench,
    title: "Fault Finding & Repairs",
    description:
      "Tripping circuits, flickering lights, dead outlets. We find it, we fix it.",
    color: "from-rose-500/10 to-rose-600/5",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    description:
      "Pre-purchase inspections, compliance certificates, and periodic testing.",
    color: "from-cyan-500/10 to-cyan-600/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-dark mb-5 tracking-tight">
              What We Do
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              From a dodgy power point to a full rewire — we handle it all.
              Every job comes with a compliance certificate.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.06}>
              <div className={`card-hover group relative bg-white rounded-2xl p-7 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden h-full`}>
                {/* Subtle gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.iconBg} mb-5`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-relaxed">
                    {service.description}
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
