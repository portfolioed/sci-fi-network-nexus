
import React, { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";
import { Terminal, User, Code, GitBranch } from "lucide-react";

const AboutSection: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-stack developer specializing in AI and machine learning applications";

  useEffect(() => {
    setIsTyping(true);
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(intervalId);
        setIsTyping(false);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative">
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="relative group">
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-sci-cyan border-glow">
                  {/* Placeholder avatar, replace with actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sci-cyan/30 to-sci-purple/30 flex items-center justify-center">
                    <User size={50} className="text-white/50" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-sci-cyan/20 blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>
              
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-white">John Doe</h2>
                <div className="h-6 mt-1">
                  <p className={cn(
                    "text-sci-gray text-sm",
                    isTyping && "console-text typing"
                  )}>
                    {typedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <a href="#" className="p-2 rounded-full bg-sci-muted/30 hover:bg-sci-muted/50 transition-colors text-white">
                  <Code size={18} />
                </a>
                <a href="#" className="p-2 rounded-full bg-sci-muted/30 hover:bg-sci-muted/50 transition-colors text-white">
                  <GitBranch size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <GlassCard className="mb-6 border-sci-cyan/10" fadeOnScroll slideDirection="right">
              <div className="flex items-start mb-4">
                <Terminal size={20} className="text-sci-cyan mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-white">Mission</h3>
              </div>
              <p className="text-sci-gray mb-4">
                Building intelligent systems that solve real-world problems. I create AI-powered applications with a focus on user experience and performance optimization.
              </p>
              <p className="text-sci-gray">
                With expertise in full-stack development and machine learning, I specialize in creating scalable applications that leverage cutting-edge AI technology to deliver exceptional value.
              </p>
            </GlassCard>
            
            <GlassCard className="border-sci-purple/10" fadeOnScroll slideDirection="right">
              <div className="flex items-start mb-4">
                <Terminal size={20} className="text-sci-purple mr-3 mt-1" />
                <h3 className="text-xl font-semibold text-white">Console</h3>
              </div>
              <div className="font-mono text-sm bg-sci-darker/50 p-4 rounded-md">
                <p className="text-sci-gray">$ system.profile --detailed</p>
                <p className="text-white mt-2"> <span className="text-sci-cyan">{'>'}</span> Loading profile data...</p>
                <p className="text-white mt-1"> <span className="text-sci-cyan">{'>'}</span> 5+ years of experience in software development</p>
                <p className="text-white mt-1"> <span className="text-sci-cyan">{'>'}</span> Specialized in React, Node.js, Python, TensorFlow</p>
                <p className="text-white mt-1"> <span className="text-sci-cyan">{'>'}</span> Trained and deployed 12+ production ML models</p>
                <p className="text-white mt-1"> <span className="text-sci-cyan">{'>'}</span> Created intelligent systems for Fortune 500 companies</p>
                <p className="text-sci-gray mt-2">$ _</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
