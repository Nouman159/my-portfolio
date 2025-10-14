"use client";
import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import personalData from "@/data/personal.json";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand/Name Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {personalData.name}
            </h3>
            <p className="text-muted-foreground">
              {personalData.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              Ready to collaborate?
            </p>
            <a
              href="mailto:hello@example.com"
              className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}