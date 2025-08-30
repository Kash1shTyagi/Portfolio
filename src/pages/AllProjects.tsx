import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Github, Search, Filter, ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Extended projects data
  const allProjects = [
    {
  id: 1,
  title: "ShopSphere",
  description: "E-commerce platform (repo name: ShopSphere). See README in repo for full details.",
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
  tags: ["React", "Node.js", "Express"],
  category: "Full Stack",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/ShopSphere",
  featured: true,
  date: "2025-03-16"
},
{
  id: 2,
  title: "Password Generator",
  description: "A utility for generating secure passwords with configurable length, character sets, and strength indicators. Implemented in TypeScript.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  tags: ["TypeScript", "Utility"],
  category: "Utility",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/Password-Generator",
  featured: true,
  date: "2025-07-14"
},
{
  id: 3,
  title: "FinFlow",
  description: "Frontend application for crypto/finance dashboards and visualizations. Built with Next.js and TypeScript; includes charts and market data integration.",
  image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c",
  tags: ["Next.js", "TypeScript", "TailwindCSS"],
  category: "Frontend",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/FinFlow",
  featured: true,
  date: "2025-03-17"
},
{
  id: 4,
  title: "Military Asset Frontend",
  description: "React + Tailwind frontend for the Military Asset Management System: asset creation, filtering by base, and role-based views.",
  image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
  tags: ["React", "TypeScript", "Tailwind"],
  category: "Full Stack",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/millitary-asset-frontend",
  featured: true,
  date: "2025-05-25"
},
{
  id: 5,
  title: "Military Asset Backend",
  description: "Backend for the Military Asset Management System using Node.js and Sequelize. Implements role-based access control and asset CRUD endpoints.",
  image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
  tags: ["Node.js", "JavaScript", "Sequelize"],
  category: "Backend",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/millitary-asset-backend",
  featured: true,
  date: "2025-05-25"
},
{
  id: 6,
  title: "FaceSense",
  description: "C++ computer-vision project for face-related tasks (detection / analysis). Uses OpenCV-style processing and custom CV pipelines.",
  image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  tags: ["C++", "Computer Vision", "OpenCV"],
  category: "Computer Vision",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/FaceSense",
  featured: true,
  date: "2025-06-26"
},
{
  id: 7,
  title: "MoodMesh",
  description: "A mood/affect-related project (inferred from repo name). Contains experiments and code in Python for affect analysis and ML workflows.",
  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
  tags: ["Python", "Machine Learning"],
  category: "Research/ML",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/MoodMesh",
  featured: true,
  date: "2025-06-30"
},
{
  id: 8,
  title: "MoodFusion",
  description: "MoodFusion project — inferred as related to mood/affect ML and experiments.",
  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  tags: ["Python"],
  category: "Research/ML",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/MoodFusion",
  featured: false,
  date: "2025-06-26"
},
{
  id: 9,
  title: "EUIPO Indian Trademark Scraper",
  description: "Python scraper that gathers trademark data (EUIPO / Indian). MIT-licensed tooling for automated scraping and data export.",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  tags: ["Python", "Scraping", "BeautifulSoup"],
  category: "Tooling",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/EUIPO-Indian-Trademark-Scraper",
  featured: true,
  date: "2025-07-24"
},
{
  id: 10,
  title: "EDA Theory (Data Analysis)",
  description: "Exploratory data analysis notebooks and theory (EDA-theory-DA). Useful for data exploration, visualization, and reproducible analysis.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  tags: ["Jupyter Notebook", "Python", "Pandas"],
  category: "Data Science",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/EDA-theory-DA",
  featured: true,
  date: "2025-04-04"
},
{
  id: 11,
  title: "Math Calculator (full)",
  description: "Math calculator project (frontend + backend repos) providing calculation APIs and a web UI for interactive math tools.",
  image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
  tags: ["Python", "TypeScript"],
  category: "Full Stack",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/mathCalculator",
  featured: false,
  date: "2025-05-01"
},
{
  id: 12,
  title: "Math Calculator Frontend",
  description: "Frontend for Math Calculator (UI, input validation, and display components).",
  image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
  tags: ["TypeScript", "React"],
  category: "Frontend",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/mathCalculator_frontend",
  featured: false,
  date: "2025-05-01"
},
{
  id: 13,
  title: "Math Calculator Backend",
  description: "Backend for Math Calculator (Python/Flask) exposing calculation APIs and example endpoints.",
  image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
  tags: ["Python", "Flask"],
  category: "Backend",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/mathCalculator_backend",
  featured: false,
  date: "2025-05-01"
},
{
  id: 14,
  title: "Password-Generator (duplicate)",
  description: "Utility repo — alternate/duplicate entry for the Password Generator project.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  tags: ["TypeScript"],
  category: "Utility",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/Password-Generator",
  featured: false,
  date: "2025-07-14"
},
{
  id: 15,
  title: "SyncMeet",
  description: "Real-time meeting scheduler / sync tool (inferred from repo name).",
  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  tags: ["TypeScript"],
  category: "Productivity",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/SyncMeet",
  featured: false,
  date: "2025-03-16"
},
{
  id: 16,
  title: "MediSync",
  description: "Healthcare / med-sync project (inferred).",
  image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjYzMCI+PHJlY3QgZmlsbD0iIzBlYTVhNCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI2NCIgZmlsbD0iI2ZmZiI+TWVkaVN5bmM8L3RleHQ+PC9zdmc+",
  tags: ["JavaScript"],
  category: "Health",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/MediSync",
  featured: false,
  date: "2025-03-16"
},
{
  id: 17,
  title: "PipelineCrafter",
  description: "Project scaffolding / CI pipeline tooling (inferred).",
  image: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
  tags: ["DevOps"],
  category: "Tooling",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/PipelineCrafter",
  featured: false,
  date: "2025-03-15"
},
{
  id: 18,
  title: "Adobe India Hackathon 1A",
  description: "Hackathon submission (Challenge 1A).",
  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
  tags: ["Python"],
  category: "Competition",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/Adobe-India-Hackathon25-Challenge-1A",
  featured: false,
  date: "2025-07-28"
},
{
  id: 19,
  title: "Adobe India Hackathon 1B",
  description: "Hackathon submission (Challenge 1B).",
  image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
  tags: ["Python"],
  category: "Competition",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/Adobe-India-Hackathon25-Challenge-1B",
  featured: false,
  date: "2025-07-28"
},
{
  id: 20,
  title: "EUIPO-Indian-Trademark-Scraper (duplicate)",
  description: "Duplicate entry for the Trademark Scraper repo.",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  tags: ["Python"],
  category: "Tooling",
  liveUrl: "#",
  githubUrl: "https://github.com/Kash1shTyagi/EUIPO-Indian-Trademark-Scraper",
  featured: false,
  date: "2025-07-24"
}

  ];

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Get unique categories and technologies
  const categories = ['all', ...Array.from(new Set(allProjects.map(p => p.category)))];
  const technologies = ['all', ...Array.from(new Set(allProjects.flatMap(p => p.tags)))];

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = allProjects.filter(project => {
      const matchesSearch = debouncedSearchQuery === '' || 
        project.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesTech = selectedTech === 'all' || project.tags.includes(selectedTech);

      return matchesSearch && matchesCategory && matchesTech;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'name':
          return a.title.localeCompare(b.title);
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [debouncedSearchQuery, selectedCategory, selectedTech, sortBy]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTech('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-background via-secondary/10 to-background border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Portfolio</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
              All <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore my complete portfolio of {allProjects.length} projects across various technologies and domains
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Search and Filters */}
        <div className="mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 h-14 text-base bg-secondary/50 border-border focus:border-primary focus:shadow-glow transition-all duration-300"
            />
          </div>

          {/* Filter Toggle Button - Mobile */}
          <div className="block sm:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full border-primary/50 hover:border-primary hover:bg-primary/10"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} sm:block`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-secondary/50 border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTech} onValueChange={setSelectedTech}>
                <SelectTrigger className="bg-secondary/50 border-border">
                  <SelectValue placeholder="Technology" />
                </SelectTrigger>
                <SelectContent>
                  {technologies.map(tech => (
                    <SelectItem key={tech} value={tech}>
                      {tech === 'all' ? 'All Technologies' : tech}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-secondary/50 border-border">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="featured">Featured First</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <Filter className="w-4 h-4 mr-2" />
                Clear All
              </Button>
            </div>

            {/* Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-6">
              <p className="text-muted-foreground text-sm">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </p>
              {(debouncedSearchQuery || selectedCategory !== 'all' || selectedTech !== 'all') && (
                <div className="flex flex-wrap gap-2">
                  {debouncedSearchQuery && (
                    <Badge variant="secondary" className="text-xs">
                      Search: "{debouncedSearchQuery}"
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="text-xs">
                      Category: {selectedCategory}
                    </Badge>
                  )}
                  {selectedTech !== 'all' && (
                    <Badge variant="secondary" className="text-xs">
                      Tech: {selectedTech}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-secondary/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow overflow-hidden transform hover:scale-105 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-primary/90 hover:bg-primary shadow-lg backdrop-blur-sm"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      
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
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs shrink-0 ml-2">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-secondary/80 rounded-full text-xs border border-border hover:border-primary/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 bg-secondary/80 rounded-full text-xs border border-border text-muted-foreground">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
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
                    
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;