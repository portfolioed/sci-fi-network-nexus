
import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { Mail, Send, Github, Linkedin, Instagram } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Would normally send the form data to a server here
    
    // Show success message
    alert("Message sent successfully!");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-sci-darker to-sci-dark opacity-80 z-0"></div>
      <div className="container max-w-6xl px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 cyberpunk-text">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sci-gray max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Let's discuss how we can work together.
          </p>
        </div>

        <div className="contact-form-container">
          {/* Contact Form */}
          <div className="mb-8 md:mb-0">
            <GlassCard className="contact-form">
              <form onSubmit={handleSubmit} className="space-y-6 contact-form-content">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Send a Message
                </h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm text-sci-gray mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-sci-muted/30 border border-sci-muted/50 rounded-md focus:outline-none focus:ring-1 focus:ring-sci-cyan text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm text-sci-gray mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-sci-muted/30 border border-sci-muted/50 rounded-md focus:outline-none focus:ring-1 focus:ring-sci-cyan text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm text-sci-gray mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-sci-muted/30 border border-sci-muted/50 rounded-md focus:outline-none focus:ring-1 focus:ring-sci-cyan text-white"
                    placeholder="Hello, I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-2 px-6 bg-gradient-to-r from-sci-cyan to-sci-purple text-white font-medium rounded-md hover:shadow-lg hover:shadow-sci-cyan/20 transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>

          {/* Contact Information */}
          <div>
            <GlassCard className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 bg-sci-cyan/20 p-3 rounded-lg">
                      <Mail className="text-sci-cyan h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <p className="text-sci-gray">
                        contact@neuralportfolio.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-sci-muted/30">
                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                
                <div className="flex items-center justify-start space-x-4">
                  <a 
                    href="mailto:contact@neuralportfolio.com" 
                    className="social-link cyberpunk-button"
                    aria-label="Email me"
                  >
                    <Mail className="h-6 w-6" />
                    <span className="ml-2">Mail</span>
                  </a>
                  
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link cyberpunk-button"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="ml-2">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link cyberpunk-button"
                    aria-label="Instagram profile"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="ml-2">Instagram</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
