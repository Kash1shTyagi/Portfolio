import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket } from 'lucide-react';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating intuitive user experiences with attention to detail"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and user satisfaction"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Get to know me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent relative">
              Me
              <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl -z-10" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital solutions that make a difference in people's lives
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                modern, responsive applications using cutting-edge technologies. My journey 
                began with a passion for problem-solving and has evolved into a love for 
                crafting exceptional digital experiences.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I believe in the power of clean code, thoughtful design, and continuous 
                learning. When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or enjoying the great outdoors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-secondary/30 rounded-xl border border-border/50">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-secondary/30 rounded-xl border border-border/50">
                <div className="text-xl sm:text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-semibold">Core Technologies</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-card rounded-full text-xs sm:text-sm border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative mx-auto w-80 sm:w-96 h-80 sm:h-96">
              {/* Enhanced image container with multiple effects */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-2xl opacity-20 animate-pulse" />
              <div className="relative bg-gradient-card rounded-3xl p-2 border border-border/50">
                <img 
                  src={profilePlaceholder}
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-accent rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -right-4 sm:-right-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => (
            <Card key={index} className="relative bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <CardContent className="relative p-6 sm:p-8 text-center">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;