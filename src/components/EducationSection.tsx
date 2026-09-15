import { AU, GB, CA, US, DE, IE } from "country-flag-icons/react/3x2";
import Button from "./Button";
import { openWhatsApp } from "../utils/whatsapp";
import { useReveal } from "../hooks/useReveal";

const DESTINATIONS = [
  { Flag: AU, name: "Australia" },
  { Flag: GB, name: "UK" },
  { Flag: CA, name: "Canada" },
  { Flag: US, name: "USA" },
  { Flag: DE, name: "Germany" },
  { Flag: IE, name: "Ireland" },
];

export default function EducationSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-royal-500/5 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className="education-layout relative w-full grid lg:grid-cols-[48%_52%] items-stretch"
      >
        <div className="education-visual relative min-h-[320px] sm:min-h-[420px] lg:min-h-0">
          <img
            src="/edu_img.png"
            alt="Student with a backpack looking toward international landmarks including the Statue of Liberty, Big Ben, the Eiffel Tower and the Sydney Opera House"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        <div className="education-content grid items-center gap-10 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_auto_200px] lg:gap-8">
          <div className="reveal">
            <h2 className="section-title mb-4">
              EDUCATION &amp; ADMISSIONS
            </h2>
            <p className="section-subtitle-light">
              Right Course. Right College. Right Future.
            </p>
            <p className="body-copy-light mt-4 max-w-[440px]">
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

          <div className="reveal" style={{ transitionDelay: "180ms" }}>
            <p className="text-[11px] font-bold tracking-[0.2em] text-navy-900/40 mb-4">
              POPULAR DESTINATIONS
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3.5">
              {DESTINATIONS.map(({ Flag, name }) => (
                <li key={name} className="flex items-center gap-2.5 text-[14px] font-medium text-navy-900/75">
                  <Flag className="w-5 h-auto rounded-[2px] shrink-0" title={name} />
                  <span className="whitespace-nowrap">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
