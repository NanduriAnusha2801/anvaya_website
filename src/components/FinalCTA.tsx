import Button from "./Button";
import { openWhatsApp } from "../utils/whatsapp";
import { useReveal } from "../hooks/useReveal";

export default function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cover bg-center py-20 sm:py-24"
      style={{ backgroundImage: "url('/contact.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/40 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="reveal flex max-w-[620px] flex-col justify-center py-6 sm:py-10">
            <p className="text-[12px] font-bold tracking-[0.28em] text-royal-400/90 mb-4">
              LET'S WORK TOGETHER
            </p>
            <h2 className="section-title-dark text-[30px] sm:text-[36px]">
              YOUR IDEA IS THE START.
              <br />
              LET'S TAKE IT FURTHER.
            </h2>
            <p className="body-copy-dark mt-5 max-w-[420px] text-white/80">
              Build your business. Shape your education. Explore the world.
            </p>
            <div className="mt-9">
              <Button variant="accent" onClick={() => openWhatsApp("contactAnvaya")}>Contact ANVAYA GROUPS</Button>
            </div>
        </div>
      </div>
    </section>
  );
}
