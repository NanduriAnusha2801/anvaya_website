import { GraduationCap, FileCheck2, Globe2, Rocket } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";
import { useReveal } from "../hooks/useReveal";

const STATS = [
  { icon: GraduationCap, value: 500, suffix: "+", label: "Students Guided" },
  { icon: FileCheck2, value: 1000, suffix: "+", label: "Applications Assisted" },
  { icon: Globe2, value: 10, suffix: "+", label: "Countries Covered" },
  { icon: Rocket, value: 200, suffix: "+", label: "Projects Delivered" },
];

function StatCard({ icon: Icon, value, suffix, label, isFirst }: (typeof STATS)[number] & { isFirst: boolean }) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal flex min-w-0 flex-col items-center text-center px-4 sm:px-6 lg:px-8 ${
        !isFirst ? "lg:border-l lg:border-cyan-glow/25" : ""
      }`}
    >
      <span className="mb-3 flex h-12 w-12 items-center justify-center text-cyan-glow">
        <Icon size={24} />
      </span>
      <p className="font-display text-[32px] font-extrabold leading-none text-white sm:text-[38px]">
        {animated.toLocaleString()}
        <span>{suffix}</span>
      </p>
      <p className="mt-2 text-[13px] font-medium text-white/70">{label}</p>
    </div>
  );
}

export default function ImpactSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-navy-950 bg-cover bg-center py-16 sm:py-20"
      style={{ backgroundImage: "url('/impact_bg.png')" }}
    >
      <div className="absolute inset-0 bg-navy-950/65" />

      <div ref={ref} className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="section-title-dark text-[32px] sm:text-[38px]">
            Our Impact
          </h2>
          <p className="section-subtitle-dark mt-2">Numbers that tell our story.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-y-10 gap-x-2 lg:mt-12 lg:grid-cols-4 lg:gap-y-0">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} {...stat} isFirst={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
