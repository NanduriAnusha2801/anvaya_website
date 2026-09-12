import { Phone, Mail, MapPin } from "lucide-react";
import { LinkedInIcon, InstagramIcon, FacebookIcon, YouTubeIcon } from "./icons/SocialIcons";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SERVICE_LINKS = [
  { label: "Technology Solutions", href: "#services" },
  { label: "Education & Admissions", href: "#about" },
  { label: "Visa Assistance", href: "#services" },
];

const SOCIALS = [
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-navy-950 pt-12 pb-7 sm:pt-14">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-9 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.2fr_1.25fr] lg:gap-10">
          <div>
            <a href="#home" className="inline-flex select-none" aria-label="ANVAYA GROUPS home">
              <img src="/logo.png" alt="ANVAYA GROUPS" className="h-auto w-[148px]" />
            </a>
            <p className="mt-3 max-w-[240px] text-[13.5px] leading-relaxed text-white/45">
              Connecting Ideas.<br/> Creating Opportunities.
            </p>
            <div className="mt-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-royal-400/80">
                Associated With
              </p>
              <a
                href="https://www.dreamimmigrationsandeducation.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-[13px] leading-snug text-white/60 hover:text-royal-400 transition-colors"
              >
                Dream Immigration and Educational services
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[13px] font-bold tracking-wider text-white/85">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="text-[13.5px] text-white/50 hover:text-royal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[13px] font-bold tracking-wider text-white/85">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={handleNavClick(link.href)}
                    className="text-[13.5px] text-white/50 hover:text-royal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[13px] font-bold tracking-wider text-white/85">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-[13.5px] text-white/50">
                <Phone size={14} className="text-royal-400 shrink-0" />
                <a href="tel:+919177300297" className="hover:text-royal-400 transition-colors">
                  +91 91773 00297
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[13.5px] text-white/50">
                <Mail size={14} className="text-royal-400 shrink-0" />
                <a href="mailto:info@anvayagroups.com" className="hover:text-royal-400 transition-colors">
                  info@anvayagroups.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-[13.5px] text-white/50">
                <MapPin size={14} className="text-royal-400 shrink-0" />
                India | Global
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 pt-5 sm:flex-row">
          <p className="text-[12.5px] text-white/35">
            © 2025 ANVAYA GROUPS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center p-1 text-white/55 hover:text-royal-400 transition-colors duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
