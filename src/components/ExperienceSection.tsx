
import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";
import { BriefcaseBusiness, Calendar, ChevronRight, MapPin } from "lucide-react";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceSection: React.FC = () => {
  const [activeExp, setActiveExp] = useState("exp1");

  const experiences: Experience[] = [
    {
      id: "exp1",
      title: "Senior AI Engineer",
      company: "TechNexus Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: [
        "Led the development of a computer vision pipeline that improved product detection accuracy by 35%",
        "Architected and implemented a real-time recommendation system serving 50M+ users",
        "Managed a team of 5 engineers, establishing best practices and mentoring junior developers",
        "Collaborated with product and design teams to create intuitive AI-powered features"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "React", "Node.js", "Docker"]
    },
    {
      id: "exp2",
      title: "Full Stack Developer",
      company: "Quantum Solutions",
      location: "New York, NY",
      period: "2019 - 2021",
      description: [
        "Built and maintained multiple client-facing web applications using React and Node.js",
        "Optimized database queries and application performance, reducing load times by 40%",
        "Implemented CI/CD pipelines for automated testing and deployment",
        "Collaborated with cross-functional teams to deliver features on tight deadlines"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "GitLab CI"]
    },
    {
      id: "exp3",
      title: "Machine Learning Engineer",
      company: "DataMind AI",
      location: "Remote",
      period: "2018 - 2019",
      description: [
        "Developed NLP models for sentiment analysis and document classification",
        "Created data processing pipelines for training machine learning models",
        "Deployed models to production environments using containerization",
        "Conducted research on state-of-the-art techniques in machine learning"
      ],
      technologies: ["Python", "PyTorch", "Scikit-learn", "Docker", "GCP", "FastAPI"]
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 cyberpunk-text">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-sci-gray max-w-lg mx-auto">
            An interactive timeline of my career journey and professional experience.
          </p>
        </div>

        {/* Timeline without network nodes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          {/* Timeline navigation on left */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                className={cn(
                  "text-left transition-all duration-300 relative pl-8 py-3 border-l-2",
                  activeExp === exp.id 
                    ? "border-l-sci-cyan scale-102 bg-sci-cyan/5" 
                    : "border-l-sci-muted/30 opacity-70 hover:opacity-100 hover:border-l-sci-cyan/50"
                )}
                onClick={() => setActiveExp(exp.id)}
              >
                <div className={cn(
                  "transition-all duration-300",
                  activeExp === exp.id && "text-glow"
                )}>
                  <h3 className={cn(
                    "text-lg font-medium",
                    activeExp === exp.id ? "text-white" : "text-sci-gray"
                  )}>
                    {exp.title}
                  </h3>
                  <p className="text-sm text-sci-gray">{exp.company} | {exp.period}</p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Experience detail card on right */}
          <div className="md:col-span-8">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className={cn(
                  "transition-all duration-500",
                  activeExp === exp.id ? "opacity-100 translate-y-0" : "opacity-0 absolute -translate-y-4"
                )}
              >
                {activeExp === exp.id && (
                  <GlassCard className="animate-fade-in border-sci-cyan/10">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-white mb-1 cyberpunk-text">{exp.title}</h3>
                      <div className="flex flex-wrap items-center text-sci-gray gap-x-4 gap-y-2">
                        <div className="flex items-center">
                          <BriefcaseBusiness size={16} className="mr-1 text-sci-cyan" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-1 text-sci-purple" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1 text-sci-cyan" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <div key={i} className="flex items-start">
                          <ChevronRight size={18} className="text-sci-cyan shrink-0 mt-0.5 mr-2" />
                          <p className="text-sci-gray">{item}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-sci-muted/30">
                      <h4 className="text-sm font-semibold text-white mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-sm rounded-full bg-sci-muted/30 text-white border border-sci-cyan/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
