
import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Get all sections
      const sections = document.querySelectorAll('.scroll-section');
      
      // For each section, check if it's in the viewport
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // If the section is in view, remove the vanish class
        if (rect.top < windowHeight * 0.85 && rect.bottom > 0) {
          section.classList.remove('vanish');
        } else {
          // If it's not in view and it's not the current section, add the vanish class
          if (index > 0) { // Don't add vanish to the first section (hero)
            section.classList.add('vanish');
          }
        }
      });
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null; // This is a utility component that doesn't render anything
};

export default ScrollAnimations;
