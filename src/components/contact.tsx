"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, Clock, Zap } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Web3Forms — replace YOUR_ACCESS_KEY with your key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback: just show success for demo purposes
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-dark to-[#0f1b2e] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Need a Sparkie?
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              Get a free quote in under 2 minutes. No obligation, no call-out
              fee, no rubbish.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact details */}
          <ScrollReveal>
            <div className="space-y-6">
              <a
                href="tel:0400123456"
                className="flex items-center gap-3 text-2xl font-bold text-accent hover:text-accent-hover transition-colors"
              >
                <Phone className="h-6 w-6" />
                0400 123 456
              </a>
              <a
                href="mailto:matt@groundedelectrical.com.au"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                matt@groundedelectrical.com.au
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="h-5 w-5" />
                <span>Mon–Fri 7am–5pm | Sat 8am–12pm</span>
              </div>
              <p className="text-accent font-semibold text-sm pl-8">
                Emergency? Call anytime.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal delay={0.1}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-10 border border-white/10 text-center">
                <Zap className="h-12 w-12 text-accent mb-4" />
                <p className="text-xl font-bold text-white mb-2">
                  Got it! We&apos;ll be in touch shortly.
                </p>
                <p className="text-gray-400 text-sm">
                  We respond within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Web3Forms access key — replace with your own */}
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY"}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="suburb" className="sr-only">
                      Suburb
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      placeholder="Suburb"
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Job Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about the job..."
                    required
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-hover transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Quote Request"}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  We respond within 2 hours during business hours.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
