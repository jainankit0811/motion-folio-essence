import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "GraphQL", "AWS", "Docker", "Git", "Figma", "Next.js", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 hero-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass border-white/20 backdrop-blur-xl glow-hover">
              <CardContent className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <img 
                    src={profilePhoto} 
                    alt="Alex Thompson" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-primary"
                  />
                  <div>
                    <h3 className="text-2xl font-bold font-poppins text-foreground">Alex Thompson</h3>
                    <p className="text-primary font-medium">Full-Stack Developer</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate software developer with over 5 years of experience creating 
                  innovative digital solutions. I specialize in building scalable web applications 
                  and have a keen eye for modern UI/UX design principles.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring aspiring developers. I believe in writing 
                  clean, maintainable code and creating user experiences that make a difference.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold font-poppins mb-6 text-foreground">Skills & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={skill}
                    className="skill-tag"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="glass border-white/20 backdrop-blur-xl text-center p-6 glow-hover">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/20 backdrop-blur-xl text-center p-6 glow-hover">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/20 backdrop-blur-xl text-center p-6 glow-hover">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="glass border-white/20 backdrop-blur-xl text-center p-6 glow-hover">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;