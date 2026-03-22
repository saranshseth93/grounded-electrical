import { MapPin } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";
import { MelbourneMap } from "./melbourne-map";

export function Areas() {
  return (
    <section id="areas" className="bg-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
              <MapPin className="h-3.5 w-3.5" />
              Service Areas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-dark mb-5 tracking-tight">
              Servicing Melbourne&apos;s Northern Suburbs
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <MelbourneMap />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-muted text-[15px] mt-10">
            Not sure if we cover your area?{" "}
            <a
              href="tel:0400123456"
              className="text-primary font-medium hover:underline"
            >
              Give us a buzz
            </a>{" "}
            and we&apos;ll sort it out.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
