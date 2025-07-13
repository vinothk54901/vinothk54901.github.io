import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Altimetrik",
      position: "Senior Staff Engineer – Data Science",
      duration: "May 2021 – April 2025",
      location: "Chennai",
      type: "Full-time",
      projects: ["FACT (Ford Active Chatbot Toolkit)", "Mach1ML2.0", "MDK"],
      achievements: [
        "Designed ML models using TensorFlow & Scikit-Learn for production deployment",
        "Built end-to-end ML pipelines with Kubeflow & Airflow on GCP",
        "Developed LLM-based utilities for alerting & RAG-based tools (Text-to-SQL)",
        "Integrated drift detection, model retraining, and real-time monitoring systems",
        "Mentored junior data scientists and led DevOps AI agent POC using LangGraph",
        "Automated ML infrastructure enabling seamless production deployment",
        "Built robust retraining/drift monitoring workflows"
      ],
      technologies: ["TensorFlow", "Scikit-Learn", "Kubeflow", "Airflow", "GCP", "LangGraph", "RAG"]
    },
    {
      company: "ADF Data Science Pvt Ltd",
      position: "Data Scientist",
      duration: "June 2018 – April 2021",
      location: "Chennai",
      type: "Full-time",
      projects: ["Personify Loan Lending"],
      achievements: [
        "Built ML models for credit risk prediction and customer segmentation",
        "Conducted sentiment analysis and web scraping via Selenium",
        "Implemented A/B testing and behavior prediction for targeted marketing",
        "Achieved Star Performer recognition in 2020"
      ],
      technologies: ["Python", "Machine Learning", "Selenium", "A/B Testing", "Credit Risk Modeling"]
    },
    {
      company: "ADF Data Sciences Pvt Ltd",
      position: "Senior Test Engineer",
      duration: "Nov 2015 – May 2018",
      location: "Chennai",
      type: "Full-time",
      projects: ["Loan Lending Automation"],
      achievements: [
        "Led automation for loan lending projects using Selenium/TestNG",
        "Evaluated ML models and conducted various testing phases",
        "Established testing frameworks for data science applications"
      ],
      technologies: ["Selenium", "TestNG", "Java", "Test Automation", "ML Model Testing"]
    },
    {
      company: "Equiniti India Pvt Ltd",
      position: "Junior Test Engineer",
      duration: "July 2014 – Nov 2015",
      location: "Chennai",
      type: "Full-time",
      projects: ["Financial Services Testing"],
      achievements: [
        "Built POM-based test automation framework using Selenium",
        "Worked on end-to-end testing lifecycle including defect tracking",
        "Improved testing efficiency and coverage"
      ],
      technologies: ["Selenium", "Page Object Model", "Defect Tracking", "Financial Testing"]
    },
    {
      company: "Scintel Technologies Pvt Ltd",
      position: "QA Trainee",
      duration: "Nov 2012 – July 2014",
      location: "Chennai",
      type: "Full-time",
      projects: ["Quality Assurance"],
      achievements: [
        "Created Selenium test scripts for web applications",
        "Performed multiple types of manual and automated testing",
        "Gained foundational experience in software testing"
      ],
      technologies: ["Selenium", "Manual Testing", "Test Scripts", "QA Processes"]
    }
  ];

  const getExperienceYears = (duration: string) => {
    const [start, end] = duration.split(' – ');
    const startYear = parseInt(start.split(' ')[1]);
    const endYear = end === 'Present' ? new Date().getFullYear() : parseInt(end.split(' ')[1]);
    const years = endYear - startYear;
    const months = end === 'Present' ? new Date().getMonth() + 1 : 12;
    return years + (months / 12);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A progressive career path from quality assurance to senior data science leadership, 
            with expertise spanning testing, ML engineering, and AI system deployment.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={`${exp.company}-${exp.position}`} 
              className="card-elegant animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl gradient-text">{exp.position}</CardTitle>
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <Building2 className="w-5 h-5 text-primary" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Projects */}
                {exp.projects && exp.projects.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Key Projects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project) => (
                        <Badge key={project} variant="secondary" className="px-3 py-1">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="px-2 py-1 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="card-elegant text-center animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">12.5+</div>
              <div className="text-muted-foreground">Total IT Experience</div>
            </CardContent>
          </Card>
          
          <Card className="card-elegant text-center animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">7+</div>
              <div className="text-muted-foreground">Years in Data Science</div>
            </CardContent>
          </Card>
          
          <Card className="card-elegant text-center animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-muted-foreground">Companies Worked</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;