
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
}

const CertificationsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const certificates: Certificate[] = [
    {
      id: "cert1",
      name: "Machine Learning Certification",
      issuer: "DeepLearning.AI",
      date: "2022",
      image: "/assets/cert1.png",
      link: "https://example.com/certificate/1"
    },
    {
      id: "cert2",
      name: "Advanced Neural Networks",
      issuer: "Stanford Online",
      date: "2021",
      image: "/assets/cert2.png",
      link: "https://example.com/certificate/2"
    },
    {
      id: "cert3",
      name: "AWS Machine Learning Engineer",
      issuer: "Amazon Web Services",
      date: "2023",
      image: "/assets/cert1.png",
      link: "https://example.com/certificate/3"
    },
    {
      id: "cert4",
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2022",
      image: "/assets/cert2.png",
      link: "https://example.com/certificate/4"
    }
  ];

  const visibleCertificates = 2; // Number of certificates to show at once
  const maxIndex = certificates.length - visibleCertificates;

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container max-w-6xl px-4 mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 cyberpunk-text">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-sci-gray max-w-lg mx-auto">
            Formal education and industry-recognized credentials
          </p>
        </div>

        {/* Certifications Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-sci-muted/30 flex items-center justify-center text-white hover:bg-sci-muted/50 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={scrollLeft}
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-sci-muted/30 flex items-center justify-center text-white hover:bg-sci-muted/50 transition-colors ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={scrollRight}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight size={24} />
          </button>

          {/* Certificates Container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-hidden px-12"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCertificates)}%)` }}
            >
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="w-full md:w-1/2 flex-shrink-0 px-4"
                >
                  <div className="cert-card h-48">
                    <div className="w-1/3 flex-shrink-0">
                      <div className="h-full bg-gradient-to-br from-sci-muted to-sci-darker flex items-center justify-center border-r border-sci-cyan/10">
                        <img 
                          src={cert.image} 
                          alt={cert.name} 
                          className="h-full w-full object-cover opacity-70"
                        />
                      </div>
                    </div>
                    
                    <div className="w-2/3 pl-4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                        
                        <div className="text-sci-gray text-sm mb-2">
                          <span className="block">Issued by: {cert.issuer}</span>
                          <span className="block">Date: {cert.date}</span>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <a 
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sci-cyan/20 text-white hover:bg-sci-cyan/30 transition-colors"
                        >
                          View Certificate <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${currentIndex === index ? 'bg-sci-cyan w-6' : 'bg-sci-gray/30'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
