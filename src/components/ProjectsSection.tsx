
import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";
import { Code, ExternalLink, Github, Star } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
  featured: boolean;
}

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects: Project[] = [
    {
      id: "project1",
      title: "AI Image Generator",
      description: "A deep learning application that generates images from text descriptions using GANs and diffusion models. Includes a user-friendly interface for prompt creation and image manipulation.",
      technologies: ["Python", "PyTorch", "React", "Flask", "Docker"],
      image: "",
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
      featured: true,
    },
    {
      id: "project2",
      title: "Neural Network Visualizer",
      description: "Interactive web application for visualizing neural network architectures and training processes. Allows users to create, train, and visualize custom models in real-time.",
      technologies: ["TypeScript", "React", "TensorFlow.js", "D3.js"],
      image: "",
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
      featured: true,
    },
    {
      id: "project3",
      title: "Smart Home Dashboard",
      description: "IoT control system with an AI-powered dashboard for monitoring and controlling smart home devices. Features voice commands and predictive automation based on user habits.",
      technologies: ["React", "Node.js", "MongoDB", "MQTT", "TensorFlow"],
      image: "",
      links: {
        demo: "https://example.com",
        github: "https://github.com",
      },
      featured: false,
    },
    {
      id: "project4",
      title: "Recommendation Engine",
      description: "Machine learning-based recommendation system for e-commerce platforms. Analyzes user behavior and product features to provide personalized product recommendations.",
      technologies: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL", "Redis"],
      image: "",
      links: {
        github: "https://github.com",
      },
      featured: false,
    },
  ];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : activeTab === "featured" 
      ? projects.filter(p => p.featured) 
      : projects.filter(p => !p.featured);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sci-gray max-w-lg mx-auto">
            Explore my portfolio of AI and web development projects.
          </p>
          
          {/* Tabs */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1 rounded-lg bg-sci-muted/20 gap-1">
              {["all", "featured", "other"].map((tab) => (
                <button
                  key={tab}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-all",
                    activeTab === tab 
                      ? "bg-sci-cyan/20 text-white" 
                      : "text-sci-gray hover:text-white hover:bg-sci-muted/30"
                  )}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <GlassCard 
              key={project.id}
              className="animate-fade-in overflow-hidden"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 -mx-6 -mt-6 mb-6 bg-gradient-to-br from-sci-muted to-sci-darker flex items-center justify-center border-b border-sci-cyan/10">
                {/* Replace with actual project image */}
                <Code size={40} className="text-sci-gray opacity-30" />
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                {project.featured && (
                  <div className="flex items-center text-amber-400">
                    <Star size={16} className="fill-amber-400" />
                    <span className="text-xs ml-1">Featured</span>
                  </div>
                )}
              </div>
              
              <p className="text-sci-gray mb-5">
                {project.description}
              </p>
              
              <div className="mb-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-sci-muted/30 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t border-sci-muted/30">
                <div className="text-xs text-sci-gray">
                  <span className="text-sci-cyan">></span> Click links to view project details
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-sci-muted/30 hover:bg-sci-muted/50 text-white transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-sci-muted/30 hover:bg-sci-muted/50 text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
