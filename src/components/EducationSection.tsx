import { useEffect, useRef } from "react";
import { AU, GB, CA, US, DE, IE } from "country-flag-icons/react/3x2";
import Button from "./Button";
import { openWhatsApp } from "../utils/whatsapp";
import { useReveal } from "../hooks/useReveal";

const DESTINATIONS = [
  { Flag: AU, name: "Australia" },
  { Flag: CA, name: "Canada" },
  { Flag: DE, name: "Germany" },
  { Flag: GB, name: "UK" },
  { Flag: US, name: "USA" },
  { Flag: IE, name: "Ireland" },
];

export default function EducationSection() {
  const ref = useReveal<HTMLDivElement>();
  const mobileDestinationsRef = useRef<HTMLDivElement | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current !== null) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const pauseMarquee = () => {
    mobileDestinationsRef.current?.classList.add("is-paused");
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
  };

  const resumeMarquee = () => {
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      mobileDestinationsRef.current?.classList.remove("is-paused");
    }, 700);
  };

  return (
    <section id="about" className="education-mobile-bg relative overflow-hidden bg-white lg:min-h-[600px]">
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-royal-500/10 rounded-full blur-[100px]" />

      <div className="education-mobile-overlay pointer-events-none absolute inset-0 hidden max-sm:block" />

      <div className="absolute inset-y-0 left-0 hidden w-[44%] lg:block">
        <img
          src="/edu_img.png"
          alt="Student with a backpack looking toward international landmarks including the Statue of Liberty, Big Ben, the Eiffel Tower and the Sydney Opera House"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-y-0 right-0 w-[30%] bg-gradient-to-r from-transparent to-white" />
      </div>

      <div className="relative h-[320px] w-full max-sm:hidden lg:hidden">
        <img
          src="/edu_img.png"
          alt="Student with a backpack looking toward international landmarks including the Statue of Liberty, Big Ben, the Eiffel Tower and the Sydney Opera House"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-y-0 right-0 w-[30%] bg-gradient-to-r from-transparent to-white" />
      </div>

      <div
        ref={ref}
        className="education-mobile-content relative mx-auto grid max-w-[1240px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto_140px] lg:gap-6 lg:py-24 lg:pl-[44%] lg:pr-0"
      >
        <div className="reveal" style={{ transitionDelay: "100ms" }}>
          <h2 className="section-title mb-4">
            EDUCATION &amp; ADMISSIONS
          </h2>
          <p className="section-subtitle-light">
            Right Course. Right College. Right Future.
          </p>
          <p className="body-copy-light mt-4 max-w-[540px]">
            We help you choose the best course and college, provide complete
            application support and personal counselling to make your academic
            journey smooth and successful.
          </p>
          <div className="mt-7">
            <Button
              onClick={() => openWhatsApp("getGuidance")}
            >
              Get Guidance
            </Button>
          </div>
        </div>

        {/* divider — vertical on desktop, horizontal on mobile/tablet where columns stack */}
        <div className="hidden lg:block w-px self-stretch bg-navy-900/10" aria-hidden="true" />
        <div className="lg:hidden w-full h-px bg-navy-900/10" aria-hidden="true" />

        <div className="reveal lg:justify-self-end" style={{ transitionDelay: "180ms" }}>
          <p className="text-[11px] font-bold tracking-[0.2em] text-navy-900/40 mb-4">
            POPULAR DESTINATIONS
          </p>
          <ul className="hidden flex-col gap-3.5 sm:flex">
            {DESTINATIONS.map(({ Flag, name }) => (
              <li key={name} className="flex items-center gap-2.5 text-[14px] font-medium text-navy-900/75">
                <Flag className="w-5 h-auto rounded-[2px] shrink-0" title={name} />
                <span className="whitespace-nowrap">{name}</span>
              </li>
            ))}
          </ul>

          <div
            ref={mobileDestinationsRef}
            className="education-mobile-destinations mt-1 -mx-1 flex gap-7 overflow-x-auto px-1 sm:hidden"
            onPointerDown={pauseMarquee}
            onPointerUp={resumeMarquee}
            onPointerCancel={resumeMarquee}
            onPointerLeave={resumeMarquee}
          >
            <div className="education-mobile-destinations-track flex w-max shrink-0">
              {[DESTINATIONS, DESTINATIONS].map((destinationSet, setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-7">
                  {destinationSet.map(({ Flag, name }) => (
                    <div
                      key={`${name}-${setIndex}`}
                      className="flex shrink-0 items-center gap-2.5 text-[14px] font-medium text-white/85"
                    >
                      <Flag className="w-5 h-auto rounded-[2px] shrink-0" title={name} />
                      <span className="whitespace-nowrap">{name}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
