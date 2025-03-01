
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-sci-darker/80 backdrop-blur-md py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl font-bold text-white flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("hero");
          }}
        >
          <span className="text-gradient">NexusSync</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={cn(
                "text-sm font-medium transition-all duration-300 relative",
                activeSection === link.id
                  ? "text-sci-cyan font-semibold"
                  : "text-sci-gray hover:text-white"
              )}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sci-cyan mt-0.5 animate-fade-in" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-sci-gray hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-sci-darker/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "text-base font-medium py-2 px-4 rounded-md transition-all duration-300",
                  activeSection === link.id
                    ? "bg-sci-muted/20 text-sci-cyan"
                    : "text-sci-gray hover:bg-sci-muted/10 hover:text-white"
                )}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
