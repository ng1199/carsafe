import { cn } from "@/lib/utils/cn";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "label";
  htmlFor?: string;
}

export function Label({
  children,
  className,
  as = "p",
  htmlFor,
}: LabelProps) {
  const classes = cn("text-label", className);

  if (as === "label") {
    return (
      <label className={classes} htmlFor={htmlFor}>
        {children}
      </label>
    );
  }

  if (as === "span") {
    return <span className={classes}>{children}</span>;
  }

  return <p className={classes}>{children}</p>;
}
