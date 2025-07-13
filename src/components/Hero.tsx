import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="text-primary font-medium">Senior Data Scientist & ML Engineer</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hi, I'm </span>
                <span className="gradient-text">Vinoth</span>
                <br />
                <span className="gradient-text">Karunakaran</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Google Cloud Certified ML Engineer with 12.5+ years of experience building
                intelligent systems. I specialize in LLM applications, MLOps, and transforming
                data into actionable insights.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>vinothk5490@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>0415925090</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Parramatta, NSW 2150</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Download Resume */}
              <Button
                asChild
                className="btn-primary px-8 py-6 text-lg"
              >
                <a
                  href="//VINOTH_KARUNAKARAN_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>

              {/* View Projects */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-primary/30 hover:border-primary"
              >
                <a
                  href="https://github.com/vinothk5490"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </Button>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">12.5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">7+</div>
                <div className="text-sm text-muted-foreground">Years in ML/AI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-3xl opacity-20 animate-pulse-glow"></div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={profilePhoto}
                  alt="Vinoth Karunakaran"
                  className="w-full h-full object-cover rounded-full border-4 border-primary/30 animate-float"
                />

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full border border-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/10 rounded-full border border-primary/20 animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;