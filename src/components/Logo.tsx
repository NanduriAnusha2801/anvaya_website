interface LogoProps {
  light?: boolean;
}

export default function Logo({ light = false }: LogoProps) {
  return (
    <a href="#home" className="flex items-center gap-2.5 select-none">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" className="shrink-0">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>
        <rect width="34" height="34" rx="9" fill={light ? "rgba(255,255,255,0.08)" : "#071233"} />
        <path
          d="M17 8 L25.5 26.5 L21 26.5 L19 22 L15 22 L13 26.5 L8.5 26.5 Z M17 13.2 L15.3 18.3 L18.7 18.3 Z"
          fill="url(#logoGrad)"
        />
      </svg>
      <span className="flex flex-col leading-[1.05]">
        <span className={`font-display font-extrabold text-[17px] tracking-tight ${light ? "text-white" : "text-navy-900"}`}>
          ANVAYA
        </span>
        <span className={`font-display font-bold text-[10px] tracking-[0.3em] ${light ? "text-cyan-glow/90" : "text-royal-600"}`}>
          GROUPS
        </span>
      </span>
    </a>
  );
}
