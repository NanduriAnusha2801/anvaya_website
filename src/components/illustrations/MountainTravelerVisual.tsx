export default function MountainTravelerVisual() {
  return (
    <div className="relative w-full h-full min-h-[360px] overflow-hidden rounded-[28px]">
      {/* sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #fcd34d 0%, #fb923c 28%, #f97359 46%, #7c5cc9 72%, #2a1f5e 100%)",
        }}
      />
      {/* sun */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-gradient-to-b from-amber-200 to-orange-300 blur-[2px] opacity-90" />
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-amber-100/40 blur-2xl" />

      {/* clouds */}
      <div className="absolute top-[12%] left-[10%] w-20 h-4 rounded-full bg-white/20 blur-sm" />
      <div className="absolute top-[22%] right-[14%] w-24 h-3 rounded-full bg-white/15 blur-sm" />

      {/* mountains - back layer */}
      <svg viewBox="0 0 400 220" className="absolute bottom-0 w-full" preserveAspectRatio="none" aria-hidden>
        <polygon points="0,220 60,90 130,220" fill="#4c3f8f" opacity="0.55" />
        <polygon points="90,220 170,60 250,220" fill="#453a82" opacity="0.6" />
        <polygon points="220,220 300,100 400,220" fill="#3a3272" opacity="0.55" />
      </svg>
      {/* mountains - front layer */}
      <svg viewBox="0 0 400 220" className="absolute bottom-0 w-full" preserveAspectRatio="none" aria-hidden>
        <polygon points="-10,220 100,40 180,220" fill="#241c4e" />
        <polygon points="130,220 230,80 340,220" fill="#1a1440" />
        <polygon points="100,40 115,58 100,66 85,58" fill="#f8fafc" opacity="0.85" />
        <polygon points="230,80 244,96 230,104 216,96" fill="#f8fafc" opacity="0.85" />
      </svg>

      {/* traveler silhouette */}
      <svg viewBox="0 0 120 220" className="absolute bottom-0 right-[14%] w-[70px]" aria-hidden>
        <rect x="34" y="70" width="24" height="34" rx="6" fill="#0a0a1a" />
        <path d="M60 50 C 76 50 86 66 88 88 L 96 220 L 26 220 L 34 88 C 36 66 44 50 60 50 Z" fill="#0a0a1a" />
        <circle cx="60" cy="34" r="15" fill="#0a0a1a" />
        <rect x="30" y="210" width="14" height="10" fill="#0a0a1a" />
        <rect x="76" y="210" width="14" height="10" fill="#0a0a1a" />
        {/* trekking pole */}
        <line x1="94" y1="120" x2="106" y2="220" stroke="#0a0a1a" strokeWidth="3" />
      </svg>

      {/* handwritten text */}
      <div className="absolute top-[10%] right-[8%] text-right">
        <p
          className="text-white/90 leading-[0.95]"
          style={{ fontFamily: "var(--font-hand)", fontSize: "clamp(28px, 4vw, 38px)" }}
        >
          Dream
          <br />
          Plan
          <br />
          Achieve
        </p>
      </div>

      {/* ground fade */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
