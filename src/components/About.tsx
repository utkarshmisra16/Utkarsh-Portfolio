import { Code2, Palette, Rocket, Zap, FileCode, Server, Wind, Database, GitBranch, Blocks, Coffee, Globe, CloudCog } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML5', icon: FileCode, color: 'text-orange-500' },
  { name: 'CSS3', icon: Palette, color: 'text-blue-400' },
  { name: 'Bootstrap', icon: Blocks, color: 'text-purple-400' },
  { name: 'Tailwind CSS', icon: Wind, color: 'text-cyan-300' },
  { name: 'JavaScript', icon: Code2, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: FileCode, color: 'text-blue-500' },
  { name: 'React.js', icon: Code2, color: 'text-cyan-400' },
  { name: 'PostgreSQL / MySQL', icon: Database, color: 'text-blue-600' },
  { name: 'Git / GitHub', icon: GitBranch, color: 'text-gray-500' },
  { name: 'JAVA', icon: Coffee, color: 'text-red-500' },
  { name: 'PHP', icon: Server, color: 'text-indigo-500' },
  { name: 'ASP.net', icon: Globe, color: 'text-purple-600' },
  { name: 'AWS', icon: CloudCog, color: 'text-purple-600' },
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
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
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
          <h3 className="text-3xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`p-8 glass-effect relative overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-110 hover:-rotate-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                  <div className={`relative ${skill.color}`}>
                    <skill.icon className="w-12 h-10 group-hover:scale-125 transition-transform duration-300" strokeWidth={1.5} />
                    <div className="absolute inset-0 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: 'currentColor' }} />
                  </div>
                  <h4 className="font-bold text-center text-lg">{skill.name}</h4>
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