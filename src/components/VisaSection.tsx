import { FileCheck2, ClipboardList, FileText, CalendarCheck } from "lucide-react";
import Button from "./Button";
import { openWhatsApp } from "../utils/whatsapp";
import { useReveal } from "../hooks/useReveal";

const CHECKLIST = [
  { icon: FileCheck2, label: "Visa Process Guidance" },
  { icon: ClipboardList, label: "Documentation Checklist" },
  { icon: FileText, label: "Application Assistance" },
  { icon: CalendarCheck, label: "Appointment Information" },
];

export default function VisaSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="visa-bg relative overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center py-16 sm:py-20">
      {/* the source photo is already light on the left — this only feathers the text
          zone a touch further, without dimming the passport/landmark artwork */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.05) 48%, transparent 62%)",
        }}
      />

      <div
        ref={ref}
        className="relative mx-auto max-w-[1240px] px-5 sm:px-8 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-10"
      >
        <div className="reveal max-w-[420px]">
          <h2 className="font-display font-extrabold text-[30px] sm:text-[36px] leading-tight text-navy-900">
            Visa Assistance
          </h2>
          <p className="section-subtitle-light mt-2">
            Your Global Dreams, Our Support.
          </p>
          <p className="body-copy-light mt-4">
            From documentation to appointments, we guide you at every step of the
            visa process for a hassle-free international journey.
          </p>
          <div className="mt-7">
            <Button onClick={() => openWhatsApp("startVisaProcess")}>Start Visa Process</Button>
          </div>
        </div>

        <div className="reveal lg:w-[300px] lg:shrink-0" style={{ transitionDelay: "180ms" }}>
          <ul className="space-y-4">
            {CHECKLIST.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3.5">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#061B49] to-[#0B3D91] shrink-0">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-[#0B3D91] to-[#38BDF8]">
                    <Icon size={17} className="text-white" />
                  </span>
                </span>
                <span className="text-[17px] font-medium text-navy-900 bg-white/65 backdrop-blur-sm rounded-md px-2 py-1 -ml-2">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
