import { whyPoints } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { Label } from "@/components/ui/Label";

export function WhyAutoDone() {
  return (
    <section id="why" className="section-padding bg-carbon">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="WHY CARSAFE"
          title="Built for perfectionists"
          description="We don't just service vehicles. We elevate them to a standard that matches your expectations."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {whyPoints.map((point, i) => (
            <FadeIn key={point.title} delay={i * 0.1}>
              <GlassCard hover className="p-10 md:p-12">
                <Label className="text-accent">0{i + 1}</Label>
                <h3 className="text-heading mt-6 text-white">{point.title}</h3>
                <p className="text-body mt-5 text-mist">{point.description}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
