
import React, { useState } from "react";
import GlassCard from "./GlassCard";
import { Send, Mail, Instagram, Linkedin, CircuitBoard, Microchip } from "lucide-react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset submitted state after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 border border-sci-cyan/30 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-sci-purple/30 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-sci-cyan/20 rounded-full"></div>
        <CircuitBoard className="absolute top-10 right-10 w-32 h-32 text-sci-cyan/10" />
        <Microchip className="absolute bottom-10 left-10 w-32 h-32 text-sci-purple/10" />
      </div>

      <div className="container max-w-6xl px-4 mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-orbitron">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-sci-gray max-w-lg mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            tech chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <GlassCard className="p-8 border border-sci-purple/20 bg-opacity-10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6 font-orbitron">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-sci-muted/30 border border-sci-cyan/30 text-white focus:outline-none focus:ring-2 focus:ring-sci-cyan/50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-sci-muted/30 border border-sci-cyan/30 text-white focus:outline-none focus:ring-2 focus:ring-sci-cyan/50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-sci-muted/30 border border-sci-cyan/30 text-white focus:outline-none focus:ring-2 focus:ring-sci-cyan/50 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-md font-medium bg-gradient-to-r from-sci-cyan to-sci-purple text-white hover:shadow-lg hover:shadow-sci-cyan/20 transition-all duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : submitted ? (
                    <span className="flex items-center justify-center">
                      Message Sent
                      <svg
                        className="ml-2 h-4 w-4 text-white"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </button>
              </div>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard className="p-8 border border-sci-cyan/20 bg-opacity-10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6 font-orbitron">
                Contact Information
              </h3>
              <p className="text-sci-gray mb-4">
                I'm currently available for freelance work, collaborations, or
                full-time positions. Let's build something amazing together!
              </p>
              <p className="text-sci-gray">
                Based in: <span className="text-white">San Francisco, CA</span>
              </p>
            </GlassCard>

            {/* Social Media Links */}
            <GlassCard className="p-8 border border-sci-cyan/20 bg-opacity-10 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-6 font-orbitron">
                Connect With Me
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="mailto:example@domain.com"
                  className="flex items-center p-3 rounded-md transition-all duration-300 bg-sci-muted/30 hover:bg-sci-cyan/20 group border border-sci-cyan/20"
                >
                  <div className="mr-3 p-2 rounded-full bg-sci-cyan/20 group-hover:bg-sci-cyan/30 transition-colors">
                    <Mail className="h-5 w-5 text-sci-cyan" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Email</h4>
                    <p className="text-sci-gray text-sm">example@domain.com</p>
                  </div>
                </a>
                
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md transition-all duration-300 bg-sci-muted/30 hover:bg-sci-purple/20 group border border-sci-purple/20"
                >
                  <div className="mr-3 p-2 rounded-full bg-sci-purple/20 group-hover:bg-sci-purple/30 transition-colors">
                    <Instagram className="h-5 w-5 text-sci-purple" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Instagram</h4>
                    <p className="text-sci-gray text-sm">@username</p>
                  </div>
                </a>
                
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md transition-all duration-300 bg-sci-muted/30 hover:bg-sci-cyan/20 group border border-sci-cyan/20"
                >
                  <div className="mr-3 p-2 rounded-full bg-sci-cyan/20 group-hover:bg-sci-cyan/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-sci-cyan" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">LinkedIn</h4>
                    <p className="text-sci-gray text-sm">linkedin.com/in/username</p>
                  </div>
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
