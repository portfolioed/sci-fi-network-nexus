
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface NetworkNodeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "cyan" | "purple" | "blue" | "white";
  pulsing?: boolean;
  label?: string;
  onClick?: () => void;
  active?: boolean;
}

const NetworkNode: React.FC<NetworkNodeProps> = ({
  className,
  size = "md",
  color = "cyan",
  pulsing = false,
  label,
  onClick,
  active = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8",
  };
  
  const colorClasses = {
    cyan: "bg-sci-cyan",
    purple: "bg-sci-purple",
    blue: "bg-sci-blue",
    white: "bg-white",
  };
  
  const glowColors = {
    cyan: "rgba(0, 234, 255, 0.6)",
    purple: "rgba(122, 21, 247, 0.6)",
    blue: "rgba(15, 244, 198, 0.6)",
    white: "rgba(255, 255, 255, 0.6)",
  };

  return (
    <div 
      className={cn("node relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "rounded-full transition-all duration-700",
          sizeClasses[size],
          colorClasses[color],
          pulsing && "animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]",
          active && "ring-2 ring-white"
        )}
        style={{
          boxShadow: `0 0 ${isHovered || active ? 10 : 5}px ${glowColors[color]}`,
          cursor: onClick ? "pointer" : "default"
        }}
        onClick={onClick}
      />
      
      {label && (
        <div 
          className={cn(
            "absolute whitespace-nowrap text-xs font-medium text-foreground/80",
            isHovered && "text-white text-glow",
            size === "sm" ? "mt-1" : "mt-2",
            "left-1/2 transform -translate-x-1/2"
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default NetworkNode;
