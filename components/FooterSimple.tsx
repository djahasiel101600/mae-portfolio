"use client";
import React from "react";
import { Separator } from "./ui/separator";

export default function FooterSimple(){
  const year = new Date().getFullYear();
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#tools", label: "Tools" },
    { href: "#experience", label: "Experience" },
    { href: "#attributes", label: "Strengths" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 text-3xl font-bold mb-6">
            <img src="/logo.png" alt="Mae Busano" className="w-8 h-8" />
            <span style={{fontFamily: "'Playfair Display', serif"}}>Mae Busano</span>
          </div>

          <nav className="mb-8" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-accent transition-all duration-200 text-sm font-medium"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <Separator className="w-full max-w-md mb-6" />

          <p className="text-sm opacity-80">&copy; {year} Mae Busano. Virtual Assistant Portfolio.</p>
        </div>
      </div>
    </footer>
  )
}
