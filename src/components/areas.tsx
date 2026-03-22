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
    <section id="areas" className="bg-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
              Servicing Melbourne&apos;s Northern Suburbs
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {suburbs.map((suburb) => (
              <span
                key={suburb}
                className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
              >
                {suburb}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-center text-muted text-sm">
            Not sure if we cover your area? Give us a buzz and we&apos;ll sort
            it out.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
