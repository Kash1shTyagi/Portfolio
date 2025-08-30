import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
        {
      title: "PageSense",
      description: "Hackathon submission (Challenge 1A).",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      tags: ["Python"],
      category: "Competition",
      liveUrl: "https://page-sense-one.vercel.app",
      githubUrl: "https://github.com/Kash1shTyagi/PageSense",
    },
        {
      title: "Password Generator",
      description: "A utility for generating secure passwords with configurable length, character sets, and strength indicators. Implemented in TypeScript.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["TypeScript", "Utility"],
      category: "Utility",
      liveUrl: "https://https://password-generator-lime-five-20.vercel.app/",
      githubUrl: "https://github.com/Kash1shTyagi/Password-Generator",
    },
   

    {
      title: "Military Asset Management",
      description: "React + Tailwind frontend for the Military Asset Management System: asset creation, filtering by base, and role-based views. Backend using Node.js and Sequelize. Implements role-based access control and asset CRUD endpoints.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      tags: ["React", "TypeScript", "Tailwind", "Node.js", "JavaScript", "Sequelize"],
      category: "Full Stack",
      liveUrl: "https://millitary-asset-frontend.vercel.app/",
      githubUrl: "https://github.com/Kash1shTyagi/millitary-asset-frontend",
    },
    {
      title: "Math Calculator",
      description: "Math calculator project (frontend + backend repos) providing calculation APIs and a web UI for interactive math tools.",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
      tags: ["Python", "TypeScript", "React", "Flask"],
      category: "Full Stack",
      liveUrl: "https://mathcalculator-frontend.onrender.com",
      githubUrl: "https://github.com/Kash1shTyagi/mathCalculator",
    },

    {
      title: "EUIPO Indian Trademark Scraper",
  description: "Python scraper that gathers trademark data (EUIPO / Indian). MIT-licensed tooling for automated scraping and data export.",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  tags: ["Python", "Scraping", "BeautifulSoup"],
  category: "Tooling",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/EUIPO-Indian-Trademark-Scraper",
    },
     {
      title: "AskPDF",
  description: "Hackathon submission (Challenge 1B).",
  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
  tags: ["Python"],
  category: "Competition",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/Adobe-India-Hackathon25-Challenge-1B",
    },
  ];
  const hasLive = (url) => {
    if (!url) return false;
    const trimmed = String(url).trim();
    return trimmed !== '#' && trimmed !== '' && trimmed !== 'null' && trimmed !== 'undefined';
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-secondary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent relative">
              Projects
              <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl -z-10" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A curated selection of my recent work showcasing modern web development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow overflow-hidden transform hover:scale-105 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Overlay content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    {hasLive(project.liveUrl) && (
    <Button 
      size="sm" 
      className="bg-primary/90 hover:bg-primary shadow-lg backdrop-blur-sm"
      asChild
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4" />
      </a>
    </Button>
  )}
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary/50 bg-background/80 backdrop-blur-sm"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 sm:px-3 py-1 bg-secondary/80 rounded-full text-xs border border-border hover:border-primary/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2 sm:gap-3">
                  {hasLive(project.liveUrl) && (
    <Button 
      size="sm" 
      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
      asChild
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="w-4 h-4 mr-2" />
        Live Demo
      </a>
    </Button>
  )}
                  
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12">
          <Button
            variant="outline" 
            className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            asChild
          >
            <Link to="/projects">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;