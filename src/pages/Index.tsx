import { useEffect, useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { particlesConfig } from '@/lib/particles-config';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize particles.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', particlesConfig);
      }
    };
    document.body.appendChild(script);

    // Hide loading screen after delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
