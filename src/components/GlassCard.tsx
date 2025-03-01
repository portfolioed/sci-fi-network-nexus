
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

const GlassCard = ({ children, className, hoverable = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-lg p-6 relative z-10 transition-all duration-300 ease-in-out",
        hoverable && "hover:bg-white/10 hover:border-sci-cyan/30 hover:shadow-[0_0_15px_rgba(0,234,255,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
