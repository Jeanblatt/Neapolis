import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonTone = "default" | "inverse";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 disabled:active:scale-100";

// tone="inverse" est destiné aux boutons posés sur un fond `bg-primary` (ex. bandeau CTA).
const toneVariantClasses: Record<ButtonTone, Record<ButtonVariant, string>> = {
  default: {
    primary: "bg-primary text-white shadow-premium hover:bg-primary-dark hover:shadow-glow",
    secondary:
      "border border-black/10 text-foreground hover:border-black/20 hover:bg-black/5 dark:border-white/15 dark:hover:border-white/25 dark:hover:bg-white/10",
  },
  inverse: {
    primary: "bg-white text-primary shadow-premium hover:bg-white/90 hover:shadow-glow",
    secondary: "border border-white/30 text-white hover:border-white/50 hover:bg-white/10",
  },
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

export default function Button({
  variant = "primary",
  tone = "default",
  size = "md",
  icon,
  className = "",
  children,
  href,
  onClick,
  type = "button",
  target,
  rel,
  disabled = false,
}: ButtonProps) {
  const classes = `${baseClasses} ${toneVariantClasses[tone][variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {icon}
      {children}
    </button>
  );
}
