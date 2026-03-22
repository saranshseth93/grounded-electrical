import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

const reviews = [
  {
    quote:
      "Called at 8am about a tripping circuit, Matt was here by 11. Fixed in under an hour. No call-out fee. Will use again.",
    name: "Sarah M.",
    suburb: "Wollert",
  },
  {
    quote:
      "Had all our downlights replaced with LEDs. Neat work, cleaned up after themselves, and the quote was exactly what we paid. Rare for a tradie.",
    name: "James K.",
    suburb: "Epping",
  },
  {
    quote:
      "Needed a switchboard upgrade before selling our house. Done in half a day, certificate provided same day. Made the whole process painless.",
    name: "Priya R.",
    suburb: "South Morang",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-accent fill-accent" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-light py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-4">
              Customer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-dark mb-6 tracking-tight">
              What Our Customers Say
            </h2>

            {/* Google rating badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-dark font-bold text-lg">5.0</span>
              <span className="text-muted text-sm">— 47 Reviews on Google</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <div className="card-hover group relative bg-white rounded-2xl p-7 border border-gray-100/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full flex flex-col">
                {/* Quote icon */}
                <div className="mb-4 flex items-center justify-between">
                  <Stars />
                  <Quote className="h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                </div>

                <blockquote className="text-dark text-[15px] leading-relaxed flex-1 mb-5">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-dark">{review.name}</div>
                    <div className="text-xs text-muted">{review.suburb}</div>
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
