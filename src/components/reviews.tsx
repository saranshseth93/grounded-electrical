import { Star } from "lucide-react";
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
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 text-accent fill-accent"
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
              What Our Customers Say
            </h2>
            <div className="inline-flex items-center gap-2 text-sm text-muted">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <span className="font-semibold text-dark">5.0</span>
              <span>— 47 Reviews on Google</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full flex flex-col">
                <Stars />
                <blockquote className="text-dark text-sm italic leading-relaxed flex-1 mb-4">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="text-muted text-sm font-medium">
                  — {review.name}, {review.suburb}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
