import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-secondary/20 to-background border-t border-border/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 sm:space-y-8 lg:space-y-0">
          <div className="text-center lg:text-left">
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Kashish Tyagi
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Full-Stack Developer & UI/UX Designer
              </p>
            </div>
            <p className="text-muted-foreground mb-1 sm:mb-2 text-sm sm:text-base">
              © {currentYear} Kashish Tyagi. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center lg:justify-start">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" /> and lots of coffee
            </p>
          </div>
          
          <div className="flex flex-col items-center lg:items-end space-y-3 sm:space-y-4">
            <p className="text-muted-foreground text-xs sm:text-sm">Let's connect</p>
            <div className="flex space-x-3 sm:space-x-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:tyagikashish1001@gmail.com", label: "Email" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-12 sm:h-12 bg-secondary/50 border border-border/50 rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;