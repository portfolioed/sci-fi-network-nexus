
import React, { useEffect, useRef, useState } from "react";
import NetworkNode from "./NetworkNode";
import { cn } from "@/lib/utils";

interface Link {
  from: number[];
  to: number[];
  active: boolean;
  color: string;
}

interface NeuralNetworkProps {
  className?: string;
  onNodeClick?: (nodeId: string) => void;
  activeNode?: string;
}

const NeuralNetwork: React.FC<NeuralNetworkProps> = ({ 
  className, 
  onNodeClick,
  activeNode
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [links, setLinks] = useState<Link[]>([]);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Node positions and connections will be calculated based on container dimensions
  const nodes = [
    { id: "about", label: "About", position: [0.5, 0.2], color: "cyan" },
    { id: "skills", label: "Skills", position: [0.3, 0.4], color: "purple" },
    { id: "experience", label: "Experience", position: [0.7, 0.4], color: "cyan" },
    { id: "projects", label: "Projects", position: [0.3, 0.6], color: "cyan" },
    { id: "contact", label: "Contact", position: [0.7, 0.6], color: "purple" },
  ];

  // Calculate node connections
  const initialLinks = [
    { fromId: "about", toId: "skills", color: "rgba(0, 234, 255, 0.4)" },
    { fromId: "about", toId: "experience", color: "rgba(0, 234, 255, 0.4)" },
    { fromId: "skills", toId: "projects", color: "rgba(122, 21, 247, 0.4)" },
    { fromId: "experience", toId: "projects", color: "rgba(0, 234, 255, 0.4)" },
    { fromId: "projects", toId: "contact", color: "rgba(0, 234, 255, 0.4)" },
    { fromId: "experience", toId: "contact", color: "rgba(122, 21, 247, 0.4)" },
  ];

  // Initialize and handle window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Calculate and update links when container dimensions change
  useEffect(() => {
    if (containerDimensions.width === 0 || containerDimensions.height === 0) return;

    // Calculate actual node positions based on container dimensions
    const nodePositions = nodes.reduce((acc, node) => {
      acc[node.id] = [
        node.position[0] * containerDimensions.width,
        node.position[1] * containerDimensions.height,
      ];
      return acc;
    }, {} as Record<string, number[]>);

    // Calculate links based on node positions
    const newLinks = initialLinks.map((link) => {
      return {
        from: nodePositions[link.fromId],
        to: nodePositions[link.toId],
        active: activeNode === link.fromId || activeNode === link.toId,
        color: link.color,
      };
    });

    setLinks(newLinks);
    setIsInitialized(true);
  }, [containerDimensions, activeNode]);

  // Calculate link style for each connection
  const getLinkStyle = (from: number[], to: number[]) => {
    // Calculate length and angle
    const dx = to[0] - from[0];
    const dy = to[1] - from[1];
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    return {
      left: `${from[0]}px`,
      top: `${from[1]}px`,
      width: `${length}px`,
      transform: `rotate(${angle}deg)`,
      transformOrigin: '0 0',
    };
  };

  return (
    <div 
      ref={containerRef} 
      className={cn("relative h-full w-full overflow-hidden", className)}
    >
      {/* Network Links */}
      {isInitialized && links.map((link, index) => (
        <div
          key={`link-${index}`}
          className={cn(
            "network-link",
            link.active && "h-[2px] opacity-100"
          )}
          style={{
            ...getLinkStyle(link.from, link.to),
            backgroundColor: link.color,
          }}
        />
      ))}

      {/* Network Nodes */}
      {isInitialized && containerDimensions.width > 0 && nodes.map((node) => {
        const x = node.position[0] * containerDimensions.width;
        const y = node.position[1] * containerDimensions.height;

        return (
          <div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: x, top: y }}
          >
            <NetworkNode
              label={node.label}
              color={node.color as "cyan" | "purple" | "blue" | "white"}
              size="md"
              active={activeNode === node.id}
              onClick={() => onNodeClick && onNodeClick(node.id)}
            />
          </div>
        );
      })}

      {/* Background Nodes - purely decorative */}
      {isInitialized && Array.from({ length: 20 }).map((_, i) => {
        const x = Math.random() * containerDimensions.width;
        const y = Math.random() * containerDimensions.height;
        const size = Math.random() > 0.7 ? "sm" : "sm";
        
        return (
          <div
            key={`bg-node-${i}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              left: x, 
              top: y, 
              opacity: Math.random() * 0.5 + 0.2,
            }}
          >
            <NetworkNode
              size={size as "sm" | "md"}
              color={Math.random() > 0.5 ? "cyan" : "purple"}
              pulsing={Math.random() > 0.5}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NeuralNetwork;
