import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and AWS. Mentoring junior developers and architecting scalable solutions for 1M+ users.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 6 developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "InnovateLab",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated closely with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced bug reports by 35%",
        "Implemented automated testing increasing code coverage to 90%"
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Redis"]
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description: "Built responsive web applications and mobile-first interfaces. Worked directly with founders to translate business requirements into technical solutions.",
      achievements: [
        "Launched 3 successful MVPs",
        "Achieved 98% mobile responsiveness score",
        "Integrated 10+ third-party APIs"
      ],
      technologies: ["React", "TypeScript", "Sass", "REST APIs", "Git"]
    }
  ];

  const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "TypeScript", level: 88 },
    { name: "AWS/Cloud", level: 75 },
    { name: "UI/UX Design", level: 70 },
    { name: "DevOps", level: 65 }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 hero-text">
            Experience & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and technical expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold font-poppins mb-8 text-foreground">Professional Experience</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-glow"></div>
              
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id}
                  className="relative timeline-item"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                  
                  <div className="ml-20 mb-12">
                    <Card className="glass border-white/20 backdrop-blur-xl glow-hover">
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <h4 className="text-xl font-bold text-foreground">{exp.title}</h4>
                          <Badge variant="secondary" className="text-primary border-primary/20 w-fit">
                            {exp.period}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center space-x-4 mb-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="mb-4">
                          <h5 className="font-semibold text-foreground mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-muted-foreground text-sm flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-poppins mb-8 text-foreground">Technical Skills</h3>
            
            <Card className="glass border-white/20 backdrop-blur-xl">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ '--progress-width': `${skill.level}%` } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass border-white/20 backdrop-blur-xl">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Quick Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Years of Experience</span>
                    <span className="font-bold text-primary">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Projects Delivered</span>
                    <span className="font-bold text-primary">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Happy Clients</span>
                    <span className="font-bold text-primary">100+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Code Quality Score</span>
                    <span className="font-bold text-primary">A+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;