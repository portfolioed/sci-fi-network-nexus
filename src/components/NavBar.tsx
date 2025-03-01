
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define navigation items
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation and close mobile menu
  const handleNavigation = (section: string) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-sci-darker/90 backdrop-blur-md shadow-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => onNavigate("hero")}
            className="text-white font-semibold text-lg md:text-xl group flex items-center"
          >
            <div className="h-8 w-8 rounded-md mr-2 bg-gradient-to-br from-sci-cyan to-sci-purple flex items-center justify-center">
              <span className="text-white font-mono">AI</span>
            </div>
            <span className="group-hover:text-sci-cyan transition-colors">
              Neural<span className="text-sci-cyan">Portfolio</span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={cn(
                "px-4 py-2 rounded-md text-sm transition-all duration-300",
                activeSection === item.id
                  ? "text-white bg-sci-muted/40 border-b-2 border-sci-cyan"
                  : "text-sci-gray hover:text-white hover:bg-sci-muted/20"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sci-gray hover:text-white transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sci-darker/95 backdrop-blur-md border-t border-sci-muted/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={cn(
                  "block w-full text-left px-4 py-3 rounded-md transition-all duration-300 mb-1",
                  activeSection === item.id
                    ? "bg-sci-muted/30 text-white border-l-2 border-sci-cyan"
                    : "text-sci-gray hover:text-white hover:bg-sci-muted/10"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
