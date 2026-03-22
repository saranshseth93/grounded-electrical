"use client";

import { useEffect, useRef, useState } from "react";
import { Zap, Star, DollarSign, Clock } from "lucide-react";

const stats = [
  { icon: Zap, value: 500, suffix: "+", label: "Jobs Completed" },
  { icon: Star, value: 5.0, suffix: "★", label: "Google Rating", decimals: 1 },
  { icon: DollarSign, value: 0, suffix: "", prefix: "$", label: "Call-Out Fee" },
  { icon: Clock, value: 4, suffix: "hr", prefix: "<", label: "Avg Response" },
];

function useCountUp(target: number, inView: boolean, decimals = 0) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const duration = 1800;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = target * progress;
      setCount(Number(current.toFixed(decimals)));

      if (step >= steps) {
        setCount(Number(target.toFixed(decimals)));
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target, decimals]);

  return count;
}

function StatItem({
  icon: Icon,
  value,
  suffix,
  prefix = "",
  label,
  decimals = 0,
  inView,
}: (typeof stats)[0] & { inView: boolean; decimals?: number }) {
  const count = useCountUp(value, inView, decimals);

  return (
    <div className="flex flex-col items-center gap-1.5 px-4 py-2">
      <Icon className="h-5 w-5 text-accent mb-1" />
      <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-400 font-medium">{label}</div>
    </div>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-dark border-y border-white/[0.06] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
