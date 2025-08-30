import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "AWS/Cloud", level: 85 },
        { name: "Docker", level: 82 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-primary tracking-wider uppercase">What I Do Best</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent relative">
              Skills
              <div className="absolute -inset-2 bg-gradient-primary opacity-20 blur-xl -z-10" />
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="relative bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group overflow-hidden">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <CardContent className="relative p-6 sm:p-8">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors duration-300 mb-2">
                    {category.title}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-primary mx-auto rounded-full" />
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:font-medium">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 sm:h-3 bg-secondary/50"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 sm:h-3 bg-gradient-primary rounded-full transition-all duration-1000 opacity-80"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Technology Cloud */}
        <div className="relative">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
              Technologies I Work With
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Background grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <div className="relative flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'Node.js',
                'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
                'GraphQL', 'REST APIs', 'Tailwind CSS', 'Sass', 'Git', 'GitHub Actions',
                'Figma', 'Adobe Creative Suite', 'Firebase', 'Supabase'
              ].map((tech, index) => (
                <span 
                  key={tech}
                  className="group px-4 sm:px-6 py-2 sm:py-3 bg-gradient-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 cursor-default transform hover:scale-105 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors duration-300">
                    {tech}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;