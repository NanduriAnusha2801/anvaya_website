import { Fragment } from "react";
import { Code2, GraduationCap, Globe2 } from "lucide-react";
import Button from "./Button";
import { openWhatsApp } from "../utils/whatsapp";

const CAPABILITIES = [
  { icon: Code2, line1: "Technology", line2: "Solutions" },
  { icon: GraduationCap, line1: "Education", line2: "Guidance" },
  { icon: Globe2, line1: "Global", line2: "Opportunities" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-bg relative overflow-hidden bg-navy-950 min-h-[560px] sm:min-h-[680px] lg:min-h-[760px] flex items-center pt-[26px]"
    >
      {/* subtle left-to-right readability gradient — the source image is already
          dark on the left, so this only needs to feather the text zone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,11,31,0.88) 0%, rgba(5,11,31,0.65) 28%, rgba(5,11,31,0.32) 48%, rgba(5,11,31,0.08) 64%, transparent 78%)",
        }}
      />

      <div className="relative w-full mx-auto max-w-[1240px] px-5 sm:px-8 py-16 sm:py-20">
        {/* below lg: the globe crop crowds out the natural dark space, so a light
            frosted panel keeps the text readable; from lg: up the source image's
            own dark left side carries it, panel-free */}
        <div className="max-w-xl lg:max-w-2xl bg-navy-950/45 backdrop-blur-md rounded-3xl p-5 -m-5 max-sm:bg-transparent max-sm:backdrop-blur-none max-sm:rounded-none lg:bg-transparent lg:backdrop-blur-none lg:rounded-none lg:p-0 lg:m-0">
          <p className="eyebrow-dark mb-5">
            ONE JOURNEY. THREE POSSIBILITIES.
          </p>
          <h1 className="font-display font-extrabold text-[42px] leading-[1.06] sm:text-[54px] lg:text-[58px] tracking-tight text-white">
            ANVAYA GROUPS
          </h1>
          <p className="section-subtitle-dark mt-3">
            Build. Learn. Go Global.
          </p>
          <p className="body-copy-dark mt-5 max-w-[480px] text-[17.5px]">
            Technology solutions, education guidance &amp; global opportunities —
            all under one roof.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button variant="accent" onClick={() => openWhatsApp("startProject")}>Start a Project</Button>
            <Button variant="outline-light" onClick={() => openWhatsApp("bookConsultation")}>
              Book a Consultation
            </Button>
          </div>

          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
            {CAPABILITIES.map(({ icon: Icon, line1, line2 }, i) => (
              <Fragment key={line1}>
                <div className="flex items-center gap-3 shrink-0">
                  <Icon size={28} className="text-royal-400 shrink-0" strokeWidth={2} />
                  <span className="text-[17px] font-semibold leading-[1.2] text-white/85">
                    <span className="block">{line1}</span>
                    <span className="block">{line2}</span>
                  </span>
                </div>
                {i < CAPABILITIES.length - 1 && (
                  <span className="hidden sm:block w-px h-10 bg-royal-500/30 shrink-0" aria-hidden="true" />
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
