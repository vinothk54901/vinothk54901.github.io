import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Bot, BarChart3, Shield, Zap, Brain, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ford Active Chatbot Toolkit (FACT)",
      category: "LLM & RAG Systems",
      icon: Bot,
      description: "Enterprise-scale conversational AI platform with advanced RAG capabilities for automotive workflows across many document types and frontends.",
      features: [
        "Multi-format document processing with intelligent chunking",
        "Context-aware response generation using LangChain",
        "Real-time query processing with sub-second response times",
        "Enterprise security and compliance integration"
      ],
      technologies: ["LLM", "RAG", "LangChain", "Python", "GCP", "Vector DB"],
      impact: "Improved customer support efficiency by 60% and reduced response time by 75%",
      status: "Production"
    },
    {
      title: "Text2SQL Enterprise System",
      category: "Natural Language Processing",
      icon: Database,
      description: "AI-powered natural language to SQL converter enabling business users to query enterprise databases using conversational interface.",
      features: [
        "Natural language understanding for complex queries",
        "Schema-aware SQL generation with validation",
        "Multi-database support (BigQuery, MySQL, PostgreSQL)",
        "Query optimization and performance monitoring"
      ],
      technologies: ["NLP", "SQL", "BigQuery", "FastAPI", "LLM", "Python"],
      impact: "Enabled 200+ business users to access data independently, reducing analyst workload by 40%",
      status: "Production"
    },
    {
      title: "Mach1ML2.0 Platform",
      category: "MLOps & Automation",
      icon: Zap,
      description: "Comprehensive MLOps platform for end-to-end machine learning lifecycle management with automated drift detection and retraining.",
      features: [
        "Automated model training and deployment pipelines",
        "Real-time model performance monitoring",
        "Drift detection with automated retraining triggers",
        "A/B testing framework for model validation"
      ],
      technologies: ["Kubeflow", "MLflow", "Airflow", "TensorFlow", "Docker", "Kubernetes"],
      impact: "Reduced model deployment time from weeks to hours, improved model reliability by 45%",
      status: "Production"
    },
    {
      title: "Personify Loan Lending System",
      category: "Credit Risk & Analytics",
      icon: Shield,
      description: "Advanced credit risk assessment system using machine learning for automated loan approval and risk scoring.",
      features: [
        "Multi-factor credit risk prediction models",
        "Customer segmentation for targeted offerings",
        "Real-time fraud detection algorithms",
        "Regulatory compliance and audit trails"
      ],
      technologies: ["Scikit-Learn", "XGBoost", "Python", "SQL", "Feature Engineering"],
      impact: "Reduced loan default rates by 25% and improved approval process efficiency by 50%",
      status: "Production"
    },
    {
      title: "AI-Powered Test Automation",
      category: "Quality Assurance & AI",
      icon: BarChart3,
      description: "Intelligent test automation framework using computer vision and NLP for adaptive UI testing across web applications.",
      features: [
        "Self-healing test scripts using AI",
        "Visual regression testing with CV",
        "Natural language test case generation",
        "Cross-browser compatibility automation"
      ],
      technologies: ["Selenium", "OpenCV", "NLP", "TestNG", "Java", "Python"],
      impact: "Increased test coverage by 70% and reduced maintenance effort by 60%",
      status: "Production"
    },
    {
      title: "DevOps AI Agent POC",
      category: "AI Agents & Automation",
      icon: Brain,
      description: "Proof-of-concept AI agent for automated DevOps operations using LangGraph for workflow orchestration and decision making.",
      features: [
        "Automated incident response and resolution",
        "Intelligent resource scaling decisions",
        "Multi-step workflow orchestration",
        "Integration with monitoring and alerting systems"
      ],
      technologies: ["LangGraph", "LangChain", "Python", "Kubernetes", "Prometheus"],
      impact: "Reduced incident response time by 80% and automated 90% of routine DevOps tasks",
      status: "POC"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of enterprise-scale AI/ML solutions that have delivered measurable 
            business impact across different industries and domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="card-elegant group animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {project.category}
                      </Badge>
                      <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                    </div>
                  </div>
                  <Badge 
                    variant={project.status === 'Production' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Business Impact:</h4>
                  <p className="text-sm text-muted-foreground">{project.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <Card className="card-elegant text-center animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">6+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </CardContent>
          </Card>
          
          <Card className="card-elegant text-center animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Production Success</div>
            </CardContent>
          </Card>
          
          <Card className="card-elegant text-center animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Records Processed</div>
            </CardContent>
          </Card>
          
          <Card className="card-elegant text-center animate-fade-in">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;