import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Techie AI",
      description: "TechieAi is a Flutter-powered app that transforms the PC building process by cutting out intermediaries, allowing users to find top-quality components at optimal prices. Leveraging advanced AI and the Gemini API, TechieAi offers real-time, precise recommendations for selecting compatible hardware, guiding users from CPU and GPU selection to ensuring compatibility across all parts.",
      image: project1,
      technologies: ["Flutter", "Gemini API"],
      liveUrl: "https://app.techieai.tech/",
      // githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "This is a full-stack e-commerce application built with a Node.js and Express.js backend and a React frontend. The backend uses MongoDB for data storage and provides a RESTful API with features like JWT authentication, product management, and a persistent shopping cart. The frontend is a modern, responsive user interface built with Vite and styled with Tailwind CSS, offering pages for user authentication, product browsing, and cart management.",
      image: project2,
      technologies: ["MongoDB", "Express", "React.js", "Node.js"],
      liveUrl: "https://shopme-ad.netlify.app",
      // githubUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "Collegology-Education Site",
      description: "Developed a full-stack web platform designed to simplify the university application process. The system manages students’ application details and assigns consultants to guide them effectively. Built using Next.js for the front-end and the MongoDB, Express, Node.js for the back-end, ensuring a scalable, responsive, and user-friendly experience.",
      image: project3,
      technologies: ["Next.js", "MongoDB", "Express", "Node.js"],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/Rigify-Innovations/Collegology",
      featured: true
    },
    {
      id: 4,
      title: "AI-ChatBot Using Gemini AI",
      description: "A full-stack web app with a modern two-column chat layout, enabling real-time interaction with Google’s Gemini AI. Built a responsive AI chat platform featuring real-time Gemini AI responses, conversation history, and a sleek glassmorphism UI. Developed a two-column interface for seamless Gemini AI conversations, optimized for all devices.",
      image: project4,
      technologies: ["React.js", "Gemini-API", "Express", "Node.js"],
      // liveUrl: "https://example.com",
      githubUrl: "https://github.com/jainankit0811/Ai-Chatbot",
      featured: true
    },
    {
      id: 5,
      title: "AI-ChatBot Using Gemini AI",
      description: "Expanded a library management system using the MERN Stack. Integrated features that improved book tracking efficiency. ",
      image: project5,
      technologies: ["React.js", "Gemini-API", "Express", "Node.js"],
      liveUrl: "https://book-flow.netlify.app/",
      githubUrl: "https://github.com/jainankit0811/Bookflow-app",
      featured: true
    },
    

    ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 hero-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group glass border-white/20 backdrop-blur-xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-105 card-tilt ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-poppins mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass border-white/20 hover:bg-white/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;