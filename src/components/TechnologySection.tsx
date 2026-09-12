import Button from "./Button";
import { openWhatsApp } from "../utils/whatsapp";
import { useReveal } from "../hooks/useReveal";

export default function TechnologySection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="tech-bg relative overflow-hidden bg-navy-950 min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] flex items-center py-20 sm:py-24">
      {/* subtle left-to-right readability gradient — the source image is already
          dark on the left, so this only needs to feather the text zone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(5,11,31,0.85) 0%, rgba(5,11,31,0.6) 30%, rgba(5,11,31,0.25) 50%, rgba(5,11,31,0.05) 65%, transparent 78%)",
        }}
      />

      <div ref={ref} className="relative mx-auto max-w-[1240px] px-5 sm:px-8 w-full">
        <div className="reveal max-w-xl lg:max-w-[640px] bg-navy-950/40 backdrop-blur-md rounded-3xl p-5 -m-5 max-sm:bg-transparent max-sm:backdrop-blur-none max-sm:rounded-none lg:bg-transparent lg:backdrop-blur-none lg:rounded-none lg:p-0 lg:m-0">
          <h2 className="section-title-dark mb-4">
            TECHNOLOGY SOLUTIONS
          </h2>
          <p className="section-subtitle-dark max-w-[640px]">
            WE DON'T JUST BUILD WEBSITES.<br/> WE BUILD DIGITAL BUSINESS.
          </p>
          <p className="body-copy-dark mt-5 max-w-[440px]">
            From simple websites to complex business solutions, we help you grow in
            the digital world.
          </p>
          <div className="mt-9">
            <Button variant="accent" onClick={() => openWhatsApp("exploreTechServices")}>
              Explore Our Tech Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
