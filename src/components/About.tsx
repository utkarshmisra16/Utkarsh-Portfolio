import { Code2, Palette, Rocket, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML5', level: 80 },
  { name: 'CSS3', level: 75 },
  { name: 'Bootstrap', level: 70 },
  { name: 'JavaScript', level: 70 },
  { name: 'React.js', level: 50 },
  { name: 'TypeScript', level: 40 },
  { name: 'Tailwind CSS', level: 50 },
  { name: 'PostgreSQL / MySql', level: 70 },
  { name: 'Git / GitHub', level: 60 },
  { name: 'JAVA', level: 60 },
  { name: 'PHP', level: 50 },
  { name: 'ASP.net', level: 40 },
];

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code following best practices',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful, responsive interfaces with attention to detail',
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    description: 'Optimizing for speed and efficiency in every project',
  },
  {
    icon: Zap,
    title: 'Quick Learner',
    description: 'Constantly learning and adapting to new technologies',
  },
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with a love for creating innovative web solutions.
            With expertise in modern frameworks and a keen eye for design, I bring ideas to life.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`p-6 glass-effect hover:scale-105 transition-all cursor-pointer group ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h3 className="text-5xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`p-6 glass-effect relative overflow-hidden group cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="relative z-10">
                  <h4 className="font-bold mb-2 text-lg">{skill.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`,
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                </div>
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
};
