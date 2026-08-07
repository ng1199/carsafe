import { cn } from "@/lib/utils/cn";
import { FadeIn } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/Label";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-24 md:mb-32 lg:mb-40", className)}>
      <div
        className={cn(
          align === "center" && "mx-auto text-center",
          align === "center" && description && "flex flex-col items-center"
        )}
      >
        {label && (
          <Label className="mb-6 text-accent md:mb-8">{label}</Label>
        )}
        <h2 className="text-display text-white">{title}</h2>
        {description && (
          <p className="text-body-lg mt-8 text-mist md:mt-10">{description}</p>
        )}
      </div>
    </FadeIn>
  );
}
