import { Feather } from "../../../old/node_modules/lucide-react/dist/lucide-react";
import { Separator } from "../ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#tools", label: "Tools" },
    { href: "#experience", label: "Experience" },
    { href: "#attributes", label: "Strengths" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-2 text-3xl font-bold mb-6">
            <Feather className="w-7 h-7" aria-hidden="true" />
            <span style={{ fontFamily: "'Playfair Display', serif" }}>
              Mae Busano
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mb-8" aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-accent transition-all duration-200 text-sm font-medium hover:scale-110 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Divider */}
          <Separator className="w-full max-w-md mb-6 bg-primary-foreground/20" />

          {/* Copyright */}
          <p className="text-sm opacity-80">
            &copy; {currentYear} Mae Busano. Virtual Assistant Portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}
