import { MapPin } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const suburbs = [
  "Wollert",
  "Epping",
  "South Morang",
  "Craigieburn",
  "Mernda",
  "Doreen",
  "Mill Park",
  "Lalor",
  "Thomastown",
  "Bundoora",
  "Reservoir",
  "Preston",
];

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
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {suburbs.map((suburb, i) => (
                <span
                  key={suburb}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[15px] font-medium text-dark border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-all duration-200 cursor-default"
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {suburb}
                </span>
              ))}
            </div>

            <p className="text-center text-muted text-[15px]">
              Not sure if we cover your area?{" "}
              <a href="tel:0400123456" className="text-primary font-medium hover:underline">
                Give us a buzz
              </a>{" "}
              and we&apos;ll sort it out.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
