import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const experience = [
  {
    title: 'Software Developer',
    company: 'My GST Cafe',
    period: 'Aug, 2025 - Present',
    description: 'Leading development of scalable web applications using React, ASP.net, and cloud technologies.',
  },
];

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Chhatrapati Sahu Ji Maharaj University, Kanpur',
    period: '2020 - 2023',
    description: 'Graduated with honors, specialized in Software Engineering.',
  },
  {
    degree: 'Masters of Computer Applications (BCA)',
    school: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
    period: '2023 - 2025',
    description: 'Honored graduate, passionate about building intelligent software.',
  },
];

const achievements = [
  '🚀 Developed mini and full-stack projects driven by curiosity and continuous learning.',
  '🧩 Actively contributing to open-source communities and learning from real-world projects.',
  '☁️ Currently exploring cloud technologies and pursuing AWS certification.',
  '🌟 Enthusiastic learner who enjoys connecting with other developers and exchanging knowledge.',
];

export const Resume = () => {
  return (
    <section id="resume" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Professional journey and accomplishments
          </p>
          <a href="/Utkarsh_Misra_Resume.pdf" download>
            <Button size="lg" className="glow-box animate-glow-pulse group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Experience</h3>
            </div>
            {experience.map((item, index) => (
              <Card
                key={index}
                className="p-6 glass-effect hover:scale-105 transition-transform animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <span className="text-sm text-primary font-medium">{item.period}</span>
                </div>
                <p className="text-muted-foreground font-medium mb-2">{item.company}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            {education.map((item, index) => (
              <Card
                key={index}
                className="p-6 glass-effect hover:scale-105 transition-transform animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-bold">{item.degree}</h4>
                  <span className="text-sm text-primary font-medium">{item.period}</span>
                </div>
                <p className="text-muted-foreground font-medium mb-2">{item.school}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}

            {/* Achievements
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary" />
                <h3 className="text-3xl font-bold">Achievements</h3>
              </div>
              <Card className="p-6 glass-effect">
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 animate-fade-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
