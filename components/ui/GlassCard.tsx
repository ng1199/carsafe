import { cn } from "@/lib/utils/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl",
        hover &&
          "transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.05]",
        className
      )}
    >
      {children}
    </div>
  );
}
