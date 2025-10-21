import { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Utkarsh Misra</h3>
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/utkarshmisra16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-misra-8084601b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-muted hover:border-primary hover:bg-primary/10 transition-all hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Designed with passion, built for perfection.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full glow-box animate-bounce z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </footer>
  );
};
