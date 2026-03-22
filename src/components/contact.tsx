"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, Clock, Zap, Send, CheckCircle } from "lucide-react";
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-dark noise-overlay py-24 sm:py-32 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/20 px-4 py-1.5 text-sm font-semibold text-accent mb-4">
              <Zap className="h-3.5 w-3.5 fill-accent" />
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white mb-5 tracking-tight">
              Need a Sparkie?
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              Get a free quote in under 2 minutes. No obligation, no call-out
              fee, no rubbish.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[0.85fr,1fr] gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact details */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <a
                href="tel:0400123456"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Call us</div>
                  <div className="text-xl font-bold text-accent group-hover:text-accent-hover transition-colors">
                    0400 123 456
                  </div>
                </div>
              </a>

              <a
                href="mailto:matt@groundedelectrical.com.au"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.07] transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15">
                  <Mail className="h-5 w-5 text-primary-light" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Email</div>
                  <div className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                    matt@groundedelectrical.com.au
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/15">
                  <Clock className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">Hours</div>
                  <div className="text-base font-medium text-gray-300">
                    Mon–Fri 7am–5pm | Sat 8am–12pm
                  </div>
                </div>
              </div>

              <p className="text-accent font-semibold text-sm pl-4 flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 fill-accent" />
                Emergency? Call anytime.
              </p>
            </div>
          </ScrollReveal>

          {/* Contact form */}
          <ScrollReveal direction="right">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.08] p-12 text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-emerald-400" />
                </div>
                <p className="text-2xl font-bold text-white mb-3">
                  Got it! We&apos;ll be in touch shortly.
                </p>
                <p className="text-gray-400 text-[15px]">
                  We respond within 2 hours during business hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-6 sm:p-8 space-y-4"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY"}
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-[15px] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-[15px] transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-[15px] transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="suburb" className="block text-sm font-medium text-gray-300 mb-1.5">
                      Suburb
                    </label>
                    <input
                      type="text"
                      id="suburb"
                      name="suburb"
                      className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-[15px] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                    Job Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us about the job..."
                    required
                    className="w-full rounded-xl bg-white/[0.06] border border-white/[0.1] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-[15px] resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-hover transition-all shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_24px_rgba(37,99,235,0.4)] disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Quote Request
                    </>
                  )}
                </button>

                <p className="text-gray-500 text-xs text-center pt-1">
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
