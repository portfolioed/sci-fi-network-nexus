
import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { cn } from "@/lib/utils";
import { ChevronRight, Mail, MessageSquare, Send, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSending, setIsSending] = useState(false);
  const [commandText, setCommandText] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate sending message
    setIsSending(true);
    setCommandText("Establishing secure connection...");
    
    setTimeout(() => {
      setCommandText("Encrypting message data...");
      
      setTimeout(() => {
        setCommandText("Transmitting message...");
        
        setTimeout(() => {
          setCommandText("Message delivered successfully!");
          setIsSending(false);
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          
          // Show success toast
          toast.success("Message sent successfully!", {
            description: "I'll get back to you as soon as possible.",
          });
        }, 800);
      }, 600);
    }, 500);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Contact <span className="text-gradient">Terminal</span>
          </h2>
          <p className="text-sci-gray max-w-lg mx-auto">
            Send a message through the secure transmission system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Info */}
          <div>
            <GlassCard className="h-full flex flex-col" fadeOnScroll slideDirection="left">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Mail className="mr-2 text-sci-cyan" size={20} />
                Communication Channels
              </h3>
              
              <div className="space-y-6 flex-grow">
                <div>
                  <div className="flex items-center mb-2">
                    <ChevronRight size={16} className="text-sci-cyan mr-2" />
                    <h4 className="text-white font-medium">Email</h4>
                  </div>
                  <p className="text-sci-gray pl-6">contact@example.com</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <ChevronRight size={16} className="text-sci-cyan mr-2" />
                    <h4 className="text-white font-medium">Location</h4>
                  </div>
                  <p className="text-sci-gray pl-6">San Francisco, CA</p>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <ChevronRight size={16} className="text-sci-cyan mr-2" />
                    <h4 className="text-white font-medium">Working Hours</h4>
                  </div>
                  <p className="text-sci-gray pl-6">Mon-Fri: 9am - 5pm PST</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-sci-muted/30">
                <p className="text-sci-gray text-sm mb-4">
                  <span className="text-sci-cyan">{'>'}</span> Connect with me on social media
                </p>
                <div className="flex gap-3">
                  <a 
                    href="mailto:contact@example.com" 
                    className="p-3 rounded-lg bg-sci-muted/30 hover:bg-sci-cyan/20 hover:text-sci-cyan transition-colors text-white flex items-center gap-2"
                  >
                    <Mail size={18} />
                    <span>Email</span>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-sci-muted/30 hover:bg-purple-500/20 hover:text-purple-400 transition-colors text-white flex items-center gap-2"
                  >
                    <Instagram size={18} />
                    <span>Instagram</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-lg bg-sci-muted/30 hover:bg-blue-500/20 hover:text-blue-400 transition-colors text-white flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
          
          {/* Right Column - Contact Form */}
          <div>
            <GlassCard className="relative" fadeOnScroll slideDirection="right">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <MessageSquare className="mr-2 text-sci-purple" size={20} />
                Message Terminal
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sci-gray mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-sci-darker border border-sci-muted/50 text-white focus:border-sci-cyan focus:outline-none focus:ring-1 focus:ring-sci-cyan/50 transition-colors"
                    disabled={isSending}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sci-gray mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md bg-sci-darker border border-sci-muted/50 text-white focus:border-sci-cyan focus:outline-none focus:ring-1 focus:ring-sci-cyan/50 transition-colors"
                    disabled={isSending}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-sci-gray mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md bg-sci-darker border border-sci-muted/50 text-white focus:border-sci-cyan focus:outline-none focus:ring-1 focus:ring-sci-cyan/50 transition-colors resize-none"
                    disabled={isSending}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  {isSending ? (
                    <div className="text-sm text-sci-cyan animate-pulse font-mono">
                      <span className="mr-2">{'>'}</span>
                      {commandText}
                    </div>
                  ) : (
                    <div className="text-sm text-sci-gray font-mono">
                      <span className="mr-2 text-sci-cyan">{'>'}</span>
                      Ready to transmit
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className={cn(
                      "px-6 py-2 rounded-md font-medium transition-all duration-300",
                      "bg-gradient-to-r from-sci-cyan to-sci-purple text-white",
                      "hover:shadow-lg hover:shadow-sci-cyan/20",
                      "flex items-center gap-2",
                      isSending && "opacity-70 cursor-not-allowed"
                    )}
                    disabled={isSending}
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </div>
              </form>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2">
                <div className="w-4 h-4 rounded-full bg-sci-purple opacity-70 animate-pulse-slow" />
              </div>
              <div className="absolute -bottom-2 -left-2">
                <div className="w-4 h-4 rounded-full bg-sci-cyan opacity-70 animate-pulse-slow" />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
