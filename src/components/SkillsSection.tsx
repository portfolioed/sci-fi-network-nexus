
import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";
import NetworkNode from "./NetworkNode";
import { BrainCircuit, Code, Database, GitBranch, Monitor, Server } from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const categories: SkillCategory[] = [
    {
      id: "programming",
      name: "Programming",
      icon: <Code className="text-sci-cyan h-6 w-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "Go", "Rust", "Swift", "Java"]
    },
    {
      id: "frameworks",
      name: "Frameworks",
      icon: <Monitor className="text-sci-cyan h-6 w-6" />,
      skills: ["React", "Next.js", "Vue", "Angular", "Express", "Django", "FastAPI", "Flutter"]
    },
    {
      id: "ml",
      name: "AI & ML",
      icon: <BrainCircuit className="text-sci-purple h-6 w-6" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Keras", "NLTK", "Computer Vision", "NLP", "Reinforcement Learning"]
    },
    {
      id: "data",
      name: "Databases",
      icon: <Database className="text-sci-purple h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase", "Supabase", "DynamoDB", "Elasticsearch"]
    },
    {
      id: "devops",
      name: "DevOps",
      icon: <Server className="text-sci-cyan h-6 w-6" />,
      skills: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "CI/CD", "Terraform", "Monitoring"]
    },
    {
      id: "tools",
      name: "Tools",
      icon: <GitBranch className="text-sci-purple h-6 w-6" />,
      skills: ["Git", "GitHub Actions", "Jest", "Cypress", "Webpack", "Vite", "GraphQL", "RESTful APIs"]
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-sci-gray max-w-lg mx-auto">
            Each node represents a skill area. Click on a category to view detailed skills.
          </p>
        </div>

        {/* Skills Network Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={cn(
                "relative group",
                "transition-all duration-300 ease-in-out",
                activeCategory === category.id ? "scale-105" : ""
              )}
              onClick={() => setActiveCategory(category.id)}
            >
              <GlassCard 
                className={cn(
                  "flex flex-col items-center p-8 h-full",
                  activeCategory === category.id 
                    ? "border-sci-cyan border-glow" 
                    : "opacity-80 hover:opacity-100"
                )}
              >
                <div 
                  className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                    "bg-gradient-to-br from-sci-muted to-sci-darker",
                    activeCategory === category.id && "animate-pulse-slow"
                  )}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                
                {/* Show mini-nodes when active */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {activeCategory === category.id && (
                    <div className="animate-fade-in flex flex-wrap justify-center gap-x-2 gap-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 text-sm rounded-full bg-sci-muted/30 text-white border border-sci-cyan/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </GlassCard>
              
              {/* Corner nodes */}
              <div className="absolute -bottom-1 -right-1">
                <NetworkNode size="sm" color={index % 2 === 0 ? "cyan" : "purple"} />
              </div>
            </button>
          ))}
        </div>

        {/* Selected Skills Detail Card */}
        <GlassCard className="animate-fade-in max-w-3xl mx-auto">
          <div className="flex items-center mb-6">
            {categories.find(c => c.id === activeCategory)?.icon}
            <h3 className="text-xl font-semibold text-white ml-3">
              {categories.find(c => c.id === activeCategory)?.name} Expertise
            </h3>
          </div>
          
          <div className="space-y-4">
            {activeCategory === "programming" && (
              <p className="text-sci-gray">
                Proficient in multiple programming languages with a focus on JavaScript/TypeScript for web applications 
                and Python for machine learning. Experienced in building type-safe applications and optimizing code performance.
              </p>
            )}
            
            {activeCategory === "frameworks" && (
              <p className="text-sci-gray">
                Extensive experience with modern frontend frameworks like React and Next.js. 
                Built scalable backend services with Express and FastAPI. Developed responsive, 
                high-performance web applications with a focus on user experience.
              </p>
            )}
            
            {activeCategory === "ml" && (
              <p className="text-sci-gray">
                Implemented deep learning models for computer vision and natural language processing. 
                Experienced in training and deploying production-ready machine learning models. 
                Worked on reinforcement learning systems and recommendation engines.
              </p>
            )}
            
            {activeCategory === "data" && (
              <p className="text-sci-gray">
                Designed and optimized database schemas for various applications. 
                Experience with both SQL and NoSQL databases. Implemented caching strategies 
                and data pipelines for improved performance and reliability.
              </p>
            )}
            
            {activeCategory === "devops" && (
              <p className="text-sci-gray">
                Set up CI/CD pipelines for automated testing and deployment. 
                Experience with containerization and orchestration tools. 
                Implemented infrastructure as code for cloud resources and monitoring systems.
              </p>
            )}
            
            {activeCategory === "tools" && (
              <p className="text-sci-gray">
                Proficient with version control systems and collaborative development workflows. 
                Experience with testing frameworks and performance optimization tools. 
                Implemented API design and documentation following best practices.
              </p>
            )}
          </div>
          
          <div className="mt-6 pt-6 border-t border-sci-muted/30">
            <p className="text-sm text-sci-gray">
              <span className="text-sci-cyan">{`>`}</span> Continuously learning and expanding skills in {categories.find(c => c.id === activeCategory)?.name.toLowerCase()} and related technologies.
            </p>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default SkillsSection;
