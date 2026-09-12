import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import Button from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section's band is currently crossing the
  // middle of the viewport, so the active nav item tracks scroll position.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveHref(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FAF8F2]/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(17,17,17,0.16)]" : "bg-[#FAF8F2]"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 h-[76px] grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <a href="#home" onClick={handleNavClick("#home")} className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Anvaya Groups"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-9">
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`relative pb-2 text-[14.5px] font-medium transition-colors after:content-[''] after:absolute after:-bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:bg-cyan-glow after:transition-all after:duration-300 ${
                  isActive
                    ? "text-navy-900 after:w-5"
                    : "text-navy-800/70 hover:text-royal-600 after:w-0"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button
            onClick={() => openWhatsApp("getInTouch")}
            className="hidden sm:inline-flex px-5 py-2 text-[13.5px]"
          >
            Get in Touch
          </Button>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-navy-900"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-ice-50 border-t border-navy-900/5 ${
          menuOpen ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-3">
          {NAV_LINKS.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavClick(link.href)}
                aria-current={isActive ? "page" : undefined}
                className={`py-3 text-[15px] transition-colors border-b border-navy-900/5 last:border-none ${
                  isActive ? "font-semibold text-royal-600" : "font-medium text-navy-800"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <Button
            onClick={() => {
              setMenuOpen(false);
              openWhatsApp("getInTouch");
            }}
            className="mt-4 mb-2 w-full justify-center text-[14px]"
          >
            Get in Touch
          </Button>
        </nav>
      </div>
    </header>
  );
}
