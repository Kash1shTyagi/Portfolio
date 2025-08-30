import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tyagikashish1001@gmail.com",
      href: "mailto:tyagikashish1001@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9667798688",
      href: "tel:+919667798688"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, IN",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Let's Connect</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent relative">
              Touch
              <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl -z-10" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 max-w-7xl mx-auto">
          {/* Enhanced Contact Form */}
          <Card className="relative bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 hover:opacity-5 transition-opacity duration-500" />
            <CardContent className="relative p-6 sm:p-8 lg:p-10">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">Send me a message</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Fill out the form below and I'll get back to you within 24 hours.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 sm:h-14 bg-secondary/50 border-border focus:border-primary focus:shadow-glow transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 sm:h-14 bg-secondary/50 border-border focus:border-primary focus:shadow-glow transition-all duration-300"
                    />
                  </div>
                </div>
                
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border focus:border-primary focus:shadow-glow min-h-[120px] sm:min-h-[150px] resize-none transition-all duration-300"
                  />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-500 transform hover:scale-105 h-12 sm:h-14 text-base sm:text-lg font-semibold"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Let's connect</h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                I'm always open to discussing new opportunities, creative ideas, or
                partnerships. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Enhanced Contact Details */}
            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow transform hover:scale-105"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-base sm:text-lg font-semibold group-hover:text-primary transition-colors duration-300">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Follow me on social</h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 sm:w-16 sm:h-16 bg-gradient-card border border-border/50 rounded-2xl flex items-center justify-center hover:border-primary/50 hover:shadow-glow transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;