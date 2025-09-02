import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Calendar, GraduationCap } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Techno India NJR Institute of Technology",
      location: "Udaipur, Rajasthan, IN",
      period: "2022 - 2026",
      gpa: "7.6",
      description: "Comprehensive foundation in software development, data structures, and system design. Active member of the Computer Science Society and hackathon organizer.",
      // honors: ["Magna Cum Laude", "President's Honor Roll"],
      coursework: ["Data Structures", "Operating Systems", "Computer Networks", "Software Architecture", "Web Development"]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "CS50x Certified",
      issuer: "Harvard",
      date: "2023",
      // credential: "SAA-C03",
      description: "Completed certificate course covering computer science fundamentals, C, Python, SQL, and web development.",
      // logo: "🏆"
    },
    {
      id: 2,
      title: "Innovation, Design and Entrepreneurship (IDE) Bootcamp",
      issuer: "Wadhwani foundation",
      date: "2024",
      // credential: "GCP-PD",
      description: "Professional certification for developing scalable applications on Google Cloud Platform.",
      // logo: "☁️"
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Code Red 4.0 Hackathon",
      event: "Issued by ACIC-VGU Foundation, Jaipur, 2024",
      description: "Excited to share that our team secured 2nd place in the 72-hour Code Red 4.0 Hackathon, organized by ACIC-VGU Foundation at Vivekananda Global University, Jaipur! "
    },
    {
      id: 2,
      title: "Odoo Hackathon",
      event: "Issued by Odoo, Mahatma Mandir Convention Centre in Gandhinagar, Gujarat, 2025",
      description: "Semi-Finalist at Odoo Hackathon – a 24-hour coding marathon showcasing innovation, teamwork, and problem-solving with real-world tech solutions."
    },
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
                      
                      {/* <div className="mb-4">
                        <h5 className="font-semibold text-foreground mb-2">Honors & Awards:</h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor) => (
                            <Badge key={honor} variant="outline" className="text-primary border-primary/20">
                              <Award className="w-3 h-3 mr-1" />
                              {honor}
                            </Badge>
                          ))}
                        </div>
                      </div> */}
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
                    {/* <div className="text-3xl">{cert.logo}</div> */}
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                      {/* <div className="flex justify-between items-center">
                        <Badge variant="outline" className="text-xs">
                          {cert.credential}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{cert.date}</span>
                      </div> */}
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