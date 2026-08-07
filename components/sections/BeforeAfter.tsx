"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { beforeAfter } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils/cn";

export function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(percentage);
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging]);

  return (
    <section id="before-after" className="section-padding bg-void">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="Transformation"
          title="Before & after"
          description="Drag the slider to see the difference precision craftsmanship makes."
        />

        <FadeIn>
          <div
            ref={containerRef}
            className="relative mx-auto aspect-[16/9] max-w-5xl cursor-col-resize select-none overflow-hidden rounded-2xl border border-white/[0.08]"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            <Image
              src={beforeAfter.after}
              alt="After paint correction"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1024px"
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={beforeAfter.before}
                alt="Before paint correction"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1024px"
              />
            </div>

            <div
              className="absolute inset-y-0 z-10 w-px bg-white/80"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-carbon/80 backdrop-blur-sm">
                <div className="flex gap-0.5">
                  <div className="h-3 w-0.5 rounded-full bg-white/60" />
                  <div className="h-3 w-0.5 rounded-full bg-white/60" />
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between p-8">
              <Label
                as="span"
                className={cn(
                  "rounded-full bg-carbon/60 px-5 py-2 text-white backdrop-blur-sm transition-opacity duration-300",
                  position < 15 && "opacity-40"
                )}
              >
                Before
              </Label>
              <Label
                as="span"
                className={cn(
                  "rounded-full bg-carbon/60 px-5 py-2 text-white backdrop-blur-sm transition-opacity duration-300",
                  position > 85 && "opacity-40"
                )}
              >
                After
              </Label>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
