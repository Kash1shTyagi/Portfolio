import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="animate-fade-in">
          {/* Enhanced typography with better spacing */}
          <div className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase font-medium">
              Welcome to my digital space
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground block">Hi, I'm</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent block relative">
                Kashish
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl -z-10" />
              </span>
            </h1>
          </div>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
            Full-Stack Developer & UI/UX Designer crafting
            <span className="text-primary font-semibold"> exceptional digital experiences</span>
          </p>
          
          {/* Enhanced buttons with better styling */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToAbout}
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold backdrop-blur-sm"
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              Discover More
            </Button>
          </div>
          
          {/* Enhanced Social Links with better spacing and effects */}
          <div className="flex justify-center space-x-6 sm:space-x-8 mb-16 sm:mb-20">
            {[
              { icon: Github, href: "https://github.com/Kash1shTyagi", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/kashish-tyagi1001/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:tyagikashish1001@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="group relative p-3 bg-secondary/20 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout} 
            className="group flex flex-col items-center space-y-1 sm:space-y-2 text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide">Scroll Down</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-current rounded-full flex justify-center relative">
              <div className="w-1 h-2 sm:h-3 bg-current rounded-full mt-1 sm:mt-2 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;