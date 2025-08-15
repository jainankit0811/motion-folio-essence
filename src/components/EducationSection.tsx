import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.9/4.0",
      description: "Specialized in Machine Learning and Human-Computer Interaction. Thesis on 'Optimizing User Experience in Web Applications through AI-Driven Design Patterns.'",
      honors: ["Summa Cum Laude", "Dean's List", "Outstanding Graduate Student Award"],
      coursework: ["Advanced Algorithms", "Machine Learning", "HCI", "Software Engineering", "Database Systems"]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2013 - 2017",
      gpa: "3.8/4.0",
      description: "Comprehensive foundation in software development, data structures, and system design. Active member of the Computer Science Society and hackathon organizer.",
      honors: ["Magna Cum Laude", "President's Honor Roll"],
      coursework: ["Data Structures", "Operating Systems", "Computer Networks", "Software Architecture", "Web Development"]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "SAA-C03",
      description: "Professional-level certification demonstrating expertise in designing distributed systems on AWS.",
      logo: "🏆"
    },
    {
      id: 2,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credential: "GCP-PD",
      description: "Professional certification for developing scalable applications on Google Cloud Platform.",
      logo: "☁️"
    },
    {
      id: 3,
      title: "Certified Kubernetes Application Developer",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credential: "CKAD",
      description: "Validates skills in designing and building cloud-native applications for Kubernetes.",
      logo: "⚙️"
    },
    {
      id: 4,
      title: "Meta Front-End Developer Professional",
      issuer: "Meta (Facebook)",
      date: "2021",
      credential: "META-FE",
      description: "Comprehensive certification covering modern front-end development practices and React.",
      logo: "⚛️"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Innovation Award",
      event: "TechCrunch Disrupt 2023",
      description: "Won first place for developing an AI-powered accessibility tool that helps visually impaired users navigate web applications."
    },
    {
      id: 2,
      title: "Hackathon Champion",
      event: "Google I/O Developer Challenge 2022",
      description: "Led team to victory building a sustainable transportation app using Google Maps API and machine learning."
    },
    {
      id: 3,
      title: "Open Source Contributor",
      event: "React.js Community",
      description: "Contributed to React core with 50+ merged PRs and maintained popular UI component library with 10k+ stars."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 hero-text">
            Education & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-poppins mb-8 text-foreground flex items-center">
            <GraduationCap className="mr-3 text-primary" />
            Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={edu.id}
                className="glass border-white/20 backdrop-blur-xl glow-hover timeline-item"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                        <Badge variant="secondary" className="text-primary border-primary/20 w-fit">
                          GPA: {edu.gpa}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 mb-4 text-muted-foreground">
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2" />
                          {edu.school}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-foreground mb-2">Honors & Awards:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor) => (
                            <Badge key={honor} variant="outline" className="text-primary border-primary/20">
                              <Award className="w-3 h-3 mr-1" />
                              {honor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Coursework:</h5>
                      <div className="space-y-2">
                        {edu.coursework.map((course) => (
                          <div key={course} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold font-poppins mb-8 text-foreground flex items-center">
            <Award className="mr-3 text-primary" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="glass border-white/20 backdrop-blur-xl glow-hover hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{cert.logo}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          {cert.credential}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-3xl font-bold font-poppins mb-8 text-foreground flex items-center">
            <Award className="mr-3 text-primary" />
            Notable Achievements
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.id}
                className="glass border-white/20 backdrop-blur-xl glow-hover hover:scale-105 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-bold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-primary font-medium mb-3">{achievement.event}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;