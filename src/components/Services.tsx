import type { ComponentType } from "react";
import { Check, Code2, GraduationCap, Globe2, ArrowRight } from "lucide-react";
import TechCardVisual from "./illustrations/TechCardVisual";
import EducationCardVisual from "./illustrations/EducationCardVisual";
import VisaCardVisual from "./illustrations/VisaCardVisual";
import { openWhatsApp, type WhatsAppMessageKey } from "../utils/whatsapp";
import { useReveal } from "../hooks/useReveal";

interface ServiceCard {
  number: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  iconBg: string;
  numberColor: string;
  cardBg: string;
  title: string;
  description: string;
  items: string[];
  visual: ComponentType;
  whatsapp: WhatsAppMessageKey;
}

const CARDS: ServiceCard[] = [
  {
    number: "01",
    icon: Code2,
    iconBg: "bg-gradient-to-br from-[#111111] to-[#242424]",
    numberColor: "text-cyan-glow",
    cardBg: "bg-gradient-to-b from-royal-500/[0.10] via-ice-100/[0.35] to-ice-50",
    title: "Digital &\nTechnology Solutions",
    description: "Turn your ideas into powerful digital products.",
    items: [
      "Website Development",
      "Mobile App Development",
      "E-Commerce Solutions",
      "Custom Software",
      "Business Automation",
      "Booking & Ordering Systems",
      "Admin Dashboards",
      "Website & App Maintenance",
    ],
    visual: TechCardVisual,
    whatsapp: "exploreTechServices",
  },
  {
    number: "02",
    icon: GraduationCap,
    iconBg: "bg-gradient-to-br from-[#111111] to-[#242424]",
    numberColor: "text-royal-600",
    cardBg: "bg-gradient-to-b from-royal-500/[0.10] via-ice-100/[0.35] to-ice-50",
    title: "Education &\nAdmissions",
    description: "Your future. Our guidance.",
    items: [
      "College Admission Assistance",
      "Course & College Guidance",
      "Application Assistance",
      "Student Counseling",
    ],
    visual: EducationCardVisual,
    whatsapp: "getGuidance",
  },
  {
    number: "03",
    icon: Globe2,
    iconBg: "bg-gradient-to-br from-[#111111] to-[#242424]",
    numberColor: "text-royal-600",
    cardBg: "bg-gradient-to-b from-royal-500/[0.10] via-ice-100/[0.35] to-ice-50",
    title: "Visa Assistance",
    description: "Explore the world. Without limits.",
    items: [
      "Visa Process Guidance",
      "Documentation Checklist",
      "Application Assistance",
      "Appointment Information",
    ],
    visual: VisaCardVisual,
    whatsapp: "startVisaProcess",
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative bg-ice-50 py-24 sm:py-28">
      <div ref={ref} className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto reveal">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 sm:w-10 bg-royal-600/30" aria-hidden="true" />
            <p className="eyebrow-light">
              WHAT WE DO
            </p>
            <span className="h-px w-8 sm:w-10 bg-royal-600/30" aria-hidden="true" />
          </div>
          <h2 className="section-title">
            Our Services
          </h2>
          <p className="body-copy-light mt-3 text-[15px]">
            Complete solutions for your digital, educational and global aspirations.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-7">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            const Visual = card.visual;
            return (
              <div
                key={card.title}
                className={`reveal group relative flex flex-col rounded-[26px] ${card.cardBg} border border-navy-900/[0.10] shadow-[0_10px_40px_-16px_rgba(17,17,17,0.15)] p-7 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-16px_rgba(212,167,44,0.18)] transition-all duration-500`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <span className={`font-display font-extrabold text-[13px] tracking-widest ${card.numberColor}`}>
                    {card.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center shadow-md`}>
                      <Icon size={19} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-extrabold text-[19px] leading-tight text-navy-900 whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="body-copy-light mt-1.5 text-[13.5px] whitespace-pre-line">
                      {card.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openWhatsApp(card.whatsapp)}
                    aria-label={`Enquire about ${card.title.replace("\n", " ")}`}
                    className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-navy-900/15 text-navy-900 group-hover:bg-navy-900 group-hover:text-white group-hover:border-navy-900 transition-colors duration-300"
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-[#111827]">
                      <Check size={15} className="mt-[2px] shrink-0 text-royal-600" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 -mx-2">
                  <Visual />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
