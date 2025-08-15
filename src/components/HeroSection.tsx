import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Software Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-bg">
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary-glow/10 float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/10 float" style={{ animationDelay: "4s" }}></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins mb-6">
            <span className="block text-foreground">Hello, I'm</span>
            <span className="block hero-text">Alex Thompson</span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl mb-8 h-12">
            <span className="text-muted-foreground">
              {text}
              <span className={`${isTyping ? "typewriter" : ""}`}></span>
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I specialize in full-stack development and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow shadow-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-medium px-8 py-6 text-lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105 font-medium px-8 py-6 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-hover"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full glass border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-hover"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 rounded-full glass border-white/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 glow-hover"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection("about")}
          className="p-2 rounded-full glass border-white/20 hover:bg-white/10 transition-all duration-300"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;