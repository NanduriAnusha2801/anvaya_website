import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ButtonVariant =
  | "primary"
  | "accent"
  | "outline-light"
  | "outline-dark"
  | "outline-glow-cyan"
  | "solid-navy"
  | "solid-teal"
  | "solid-purple";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  icon?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#111111] to-[#242424] text-white shadow-lg shadow-black/30 hover:shadow-[#D4A72C]/25 hover:brightness-110",
  accent:
    "bg-gradient-to-r from-[#F2C85B] via-[#D4A72C] to-[#B88619] text-navy-950 shadow-lg shadow-[#D4A72C]/30 hover:shadow-[#D4A72C]/50 hover:brightness-105",
  "outline-light":
    "border border-white/35 text-white hover:bg-white/10 hover:border-white/60",
  "outline-glow-cyan":
    "border border-cyan-glow/70 bg-navy-950/30 text-white shadow-[0_0_12px_rgba(212,167,44,0.25)] hover:shadow-[0_0_20px_rgba(212,167,44,0.4)] hover:border-cyan-glow hover:bg-navy-950/50",
  "outline-dark":
    "border border-navy-800/20 text-navy-900 hover:bg-navy-900 hover:text-white",
  "solid-navy":
    "bg-navy-800 text-white shadow-lg shadow-navy-900/20 hover:bg-navy-700",
  "solid-teal":
    "bg-gradient-to-r from-[#111111] to-[#242424] text-white shadow-lg shadow-[#D4A72C]/20 hover:brightness-110",
  "solid-purple":
    "bg-gradient-to-r from-[#111111] to-[#242424] text-white shadow-lg shadow-[#D4A72C]/20 hover:brightness-110",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  icon = true,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer active:scale-[0.97] ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}
