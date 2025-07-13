import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Brain, Code, Database, Cpu, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & MLOps",
      icon: Cloud,
      skills: [
        { name: "Google Cloud Platform", level: 95 },
        { name: "Vertex AI", level: 90 },
        { name: "Docker & Kubernetes", level: 85 },
        { name: "Kubeflow & MLflow", level: 88 },
        { name: "Terraform", level: 80 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "LLMs & Prompt Engineering", level: 92 },
        { name: "TensorFlow & Keras", level: 90 },
        { name: "RAG & LangChain", level: 88 },
        { name: "Computer Vision", level: 85 },
        { name: "NLP & Text Analytics", level: 87 }
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Java", level: 75 },
        { name: "Flask & FastAPI", level: 85 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: [
        { name: "BigQuery", level: 90 },
        { name: "Data Engineering", level: 85 },
        { name: "Feature Engineering", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "Statistical Analysis", level: 87 }
      ]
    }
  ];

  const certifications = [
    "Google Cloud Certified ML Engineer",
    "ISTQB Foundation Level",
    "AI-for-India (Guvi)",
    "Big Data (IIT Roorkee)"
  ];

  const achievements = [
    "GEM Awards (2021, 2024) - Altimetrik",
    "Customer Champion - Altimetrik", 
    "Star Performer - ADF Data Science (2020)",
    "Kudos Recognition - Multiple times"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set spanning AI/ML development, cloud architecture, 
            and production deployment of intelligent systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="card-elegant animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="card-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="mr-2 mb-2 px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="card-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                Recognition & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;