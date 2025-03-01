
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  fadeOnScroll?: boolean;
  slideDirection?: "left" | "right" | "none";
}

const GlassCard = ({ 
  children, 
  className, 
  hoverable = true,
  fadeOnScroll = false,
  slideDirection = "none"
}: GlassCardProps) => {
  const [isVisible, setIsVisible] = React.useState(!fadeOnScroll);

  React.useEffect(() => {
    if (!fadeOnScroll) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = document.getElementById(slideDirection + "-fade-card");
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fadeOnScroll, slideDirection]);

  const getScrollClass = () => {
    if (!fadeOnScroll) return "";
    
    if (slideDirection === "left") {
      return `slide-left-on-scroll ${isVisible ? 'visible' : ''}`;
    } else if (slideDirection === "right") {
      return `slide-right-on-scroll ${isVisible ? 'visible' : ''}`;
    } else {
      return `fade-on-scroll ${isVisible ? 'visible' : ''}`;
    }
  };

  return (
    <div
      id={slideDirection + "-fade-card"}
      className={cn(
        "glass rounded-lg p-6 relative z-10 transition-all duration-300 ease-in-out",
        hoverable && "hover:bg-white/10 hover:border-sci-cyan/30 hover:shadow-[0_0_15px_rgba(0,234,255,0.2)]",
        getScrollClass(),
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
