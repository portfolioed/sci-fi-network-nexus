
import React, { useState, useEffect, useRef } from "react";
import NavBar from "@/components/NavBar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import NeuralNetwork from "@/components/NeuralNetwork";
import { ArrowDown } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Handle section navigation
  const handleNavigate = (section: string) => {
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: "smooth",
    };

    if (section === "hero") {
      heroRef.current?.scrollIntoView(scrollOptions);
    } else if (section === "about") {
      aboutRef.current?.scrollIntoView(scrollOptions);
    } else if (section === "skills") {
      skillsRef.current?.scrollIntoView(scrollOptions);
    } else if (section === "experience") {
      experienceRef.current?.scrollIntoView(scrollOptions);
    } else if (section === "projects") {
      projectsRef.current?.scrollIntoView(scrollOptions);
    } else if (section === "contact") {
      contactRef.current?.scrollIntoView(scrollOptions);
    }
  };

  // Intersection Observer to detect active section
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [
      { ref: heroRef, id: "hero" },
      { ref: aboutRef, id: "about" },
      { ref: skillsRef, id: "skills" },
      { ref: experienceRef, id: "experience" },
      { ref: projectsRef, id: "projects" },
      { ref: contactRef, id: "contact" },
    ];

    sections.forEach(({ ref, id }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-sci-darker min-h-screen text-white">
      <NavBar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero Section with Neural Network */}
      <div
        ref={heroRef}
        className="h-screen relative flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Neural Network */}
        <div className="absolute inset-0 z-0">
          <NeuralNetwork
            className="h-full w-full"
            onNodeClick={handleNavigate}
            activeNode={activeSection}
          />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Neural Network</span> Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-sci-gray max-w-3xl mx-auto mb-8 animate-fade-in delay-100">
            AI Engineer & Full-Stack Developer creating intelligent systems and
            innovative applications.
          </p>
          <div className="animate-fade-in delay-200">
            <button
              onClick={() => handleNavigate("about")}
              className="px-8 py-3 rounded-md font-medium bg-gradient-to-r from-sci-cyan to-sci-purple text-white hover:shadow-lg hover:shadow-sci-cyan/20 transition-all duration-300"
            >
              Explore Portfolio
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-sci-gray" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sci-darker to-transparent" />
      </div>

      {/* Main Content Sections */}
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-sci-darker py-8 border-t border-sci-muted/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sci-gray text-sm">
            © {new Date().getFullYear()} Neural Network Portfolio. All rights
            reserved.
          </p>
          <p className="text-sci-gray text-xs mt-2">
            Built with React, Tailwind CSS, and advanced animation techniques.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
