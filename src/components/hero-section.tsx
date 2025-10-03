"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import personalData from "@/data/personal.json";

export function HeroSection() {
  return (
    <div className="h-[64vh] w-full bg-background flex flex-col items-center justify-center overflow-hidden relative">
      {/* Sparkles Background - Expanded Width */}
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticleshero"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={250}
          className="w-full h-full"
          particleColor="#3b82f6"
          speed={1.5}
        />
      </div>
      
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center gap-6 relative z-20 px-8">
        <h1 className="md:text-7xl text-4xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/60">
          {personalData.name}
        </h1>
        
        <p className="text-muted-foreground cursor-default text-center text-xl md:text-2xl font-medium max-w-2xl">
          {personalData.tagline}
        </p>
      </div>

      {/* Radial Gradient to prevent sharp edges - Expanded */}
      <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(800px_400px_at_center,transparent_40%,white)]"></div>
    </div>
  );
}
