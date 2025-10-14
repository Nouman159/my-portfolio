import { NavBarDemo } from "@/components/navbar-demo";
import { HeroSection } from "@/components/hero-section";
import TestimonialsSection from "@/components/testimonials-section";
import { SkillsSection } from "@/components/skills-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Navigation Bar */}
      <NavBarDemo />

      {/* Hero Section */}
      <HeroSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Footer */}
      <Footer />

    </div>
  );
}
