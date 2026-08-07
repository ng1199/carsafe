import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-accent text-carbon hover:bg-accent-light active:bg-accent-dark",
  secondary:
    "border border-white/10 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:border-white/20",
  ghost: "text-silver hover:text-white",
};

const sizes = {
  sm: "px-5 py-2.5 text-[0.6875rem]",
  md: "px-7 py-3 text-xs",
  lg: "px-8 py-3.5 text-xs",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "font-label inline-flex items-center justify-center rounded-full transition-all duration-300",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
