"use client";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { TiltedScroll } from "@/components/ui/tilted-scroll";
import skillsData from "@/data/skills.json";

export function SkillsSection() {
  return (
    <div className="w-full bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            My Skills
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interactive orbital timeline showcasing my technical expertise and skill progression
          </p>
        </div>

        {/* Mobile: Stacked Layout */}
        <div className="block lg:hidden">
          <div className="h-[60vh] w-full overflow-hidden">
            <RadialOrbitalTimeline timelineData={skillsData.skills} />
          </div>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:min-h-[70vh]">
          {/* Left Column - TiltedScroll */}
          <div className="space-y-8">
            <TiltedScroll 
              items={[
                { id: "1", text: "Frontend Development" },
                { id: "2", text: "Backend Development" },
                { id: "3", text: "UI/UX Design" },
                { id: "4", text: "Database Systems" },
                { id: "5", text: "Mobile Development" },
                { id: "6", text: "DevOps & Cloud" },
                { id: "7", text: "AI/ML Integration" },
              ]}
              className="mt-8"
            />
          </div>

          {/* Right Column - Orbital Timeline */}
          <div className="h-[60vh] w-full overflow-hidden">
            <RadialOrbitalTimeline timelineData={skillsData.skills} />
          </div>
        </div>
      </div>
    </div>
  );
}
