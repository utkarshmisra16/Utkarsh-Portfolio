import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f0c82954-6005-4946-8b27-dc4d518e8dd3',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Message Sent Successfully!',
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
          duration: 5000,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: 'Submission Failed',
          description: 'Please try again later or contact me directly via email.',
          variant: 'destructive',
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: 'Error Sending Message',
        description: 'An unexpected error occurred. Please check your internet connection.',
        variant: 'destructive',
        duration: 5000,
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your HR strategy? Let's discuss your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-8">
                I'm here to help you build exceptional teams and create thriving workplace cultures.
                Reach out for a consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 md:p-6 bg-card border border-border rounded-xl hover:scale-105 smooth-transition card-shadow">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-base md:text-lg">Email</h4>
                  <p className="text-sm md:text-base text-muted-foreground">contact@vaibhavmishra.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 md:p-6 bg-card border border-border rounded-xl hover:scale-105 smooth-transition card-shadow">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-base md:text-lg">Phone</h4>
                  <p className="text-sm md:text-base text-muted-foreground">+91 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 md:p-6 bg-card border border-border rounded-xl hover:scale-105 smooth-transition card-shadow">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-base md:text-lg">Location</h4>
                  <p className="text-sm md:text-base text-muted-foreground">
                    118/30, Gumti No.5<br />
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-xl gradient-primary text-white">
              <h4 className="text-xl md:text-2xl font-bold mb-3">24-Hour Response Time</h4>
              <p className="text-sm md:text-base opacity-90">
                We commit to responding to all inquiries within 24 hours. Your time is valuable,
                and we respect that.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-6 md:p-8 rounded-2xl card-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your requirements..."
                  rows={6}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-primary text-white font-semibold py-6 text-base md:text-lg hover:scale-105 smooth-transition"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
