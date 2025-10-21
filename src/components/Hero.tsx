import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const words = ["Full Stack Developer", "Creative Problem Solver", "UI/UX Enthusiast"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.12),transparent_50%)]" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'moveGrid 20s linear infinite'
        }} />
      </div>
      
      {/* Particles Container */}
      <div id="particles-js" className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="space-y-8">
          <h3 className={`text-5xl md:text-5xl lg:text-6xl font-bold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            Hi, I'm <span className="gradient-text glow-text animate-float"> Utkarsh Misra</span>
          </h3>
          
          <div className="h-16 md:h-20 overflow-hidden">
            <p className="text-xl md:text-3xl text-muted-foreground font-light">
              <span className="inline-block animate-gradient-shift bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]">
                {words[currentWordIndex]}
              </span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting beautiful, functional web experiences with modern technologies.
            Passionate about clean code and innovative solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 glow-box animate-glow-pulse"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/utkarshmisra16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 glow-box"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-misra-8084601b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted hover:border-primary hover:bg-primary/10 transition-all hover:scale-110 glow-box"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </button>
      </div>
    </section>
  );
};
