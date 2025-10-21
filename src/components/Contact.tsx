import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate AJAX request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      duration: 5000,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <h3 className="text-3xl font-bold mb-6">Let's Talk</h3>
              <p className="text-muted-foreground text-lg mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>
            </div>

            <Card className="p-6 glass-effect flex items-start gap-4 hover:scale-105 transition-transform animate-fade-up">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <a
                  href="mailto:utkarshmisra16@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  utkarshmisra16@gmail.com
                </a>
              </div>
            </Card>

            <Card className="p-6 glass-effect flex items-start gap-4 hover:scale-105 transition-transform animate-fade-up">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Location</h4>
                <p className="text-muted-foreground">Kanpur, U.P., INDIA</p>
              </div>
            </Card>

            <div className="pt-8 animate-fade-up">
              <h4 className="font-bold mb-4 text-lg">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/utkarshmisra16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 glow-box overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Github className="w-6 h-6 relative z-10 text-primary group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/utkarsh-misra-8084601b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 glow-box overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Linkedin className="w-6 h-6 relative z-10 text-primary group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 hover:border-primary flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 glow-box overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity" />
                  <Twitter className="w-6 h-6 relative z-10 text-primary group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-effect animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="utkarshmisra16@gmail.com"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me more about your project..."
                  rows={6}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glow-box animate-glow-pulse"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
