import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with cart, checkout, and admin panel',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    demoLink: '#',
    githubLink: '#',
    longDescription: 'A comprehensive e-commerce platform featuring user authentication, product management, shopping cart functionality, secure payment integration with Stripe, and an admin dashboard for inventory management.',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task tracker with real-time updates and team features',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    demoLink: '#',
    githubLink: '#',
    longDescription: 'A powerful task management application with real-time collaboration, drag-and-drop task organization, team workspaces, and progress tracking. Built with modern technologies for optimal performance.',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with forecasts and location-based data',
    tags: ['React', 'API Integration', 'Charts.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    demoLink: '#',
    githubLink: '#',
    longDescription: 'An elegant weather dashboard that provides current weather conditions, 7-day forecasts, and interactive charts. Features location search, geolocation support, and stunning visualizations.',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Content management system for creative professionals',
    tags: ['Vue.js', 'Express', 'MySQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    demoLink: '#',
    githubLink: '#',
    longDescription: 'A custom CMS tailored for creative professionals to showcase their work. Features include portfolio management, blog posts, client testimonials, and an intuitive drag-and-drop editor.',
  },
  {
    id: 5,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media insights and metrics',
    tags: ['React', 'D3.js', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    demoLink: '#',
    githubLink: '#',
    longDescription: 'A comprehensive analytics platform that aggregates social media data, provides insights through interactive visualizations, tracks engagement metrics, and generates automated reports.',
  },
  {
    id: 6,
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI-powered responses',
    tags: ['React', 'Socket.io', 'OpenAI', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
    demoLink: '#',
    githubLink: '#',
    longDescription: 'An innovative chat application integrating AI capabilities for smart responses, real-time messaging, group chats, file sharing, and conversation history with search functionality.',
  },
];

const categories = ['All', 'Web Apps', 'E-Commerce', 'Analytics', 'AI'];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent works showcasing my skills and creativity
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'glow-box' : ''}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden glass-effect cursor-pointer transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-primary/20"
              style={{ 
                animation: `scale-in 0.6s ease-out ${index * 150}ms both`,
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 z-20">
                  <div className="flex gap-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <a
                      href={project.demoLink}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-primary rounded-full hover:scale-110 transition-transform glow-box"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubLink}
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 bg-primary rounded-full hover:scale-110 transition-transform glow-box"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 transform group-hover:translate-x-1 transition-transform duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-sm transform group-hover:scale-110 transition-all duration-300"
                      style={{ transitionDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-3xl">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-lg">{selectedProject.longDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild className="glow-box">
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
