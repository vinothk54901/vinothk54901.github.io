import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Download } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = form;

    const composed = `Hi, I'm ${name}\nMy email is ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const encoded = encodeURIComponent(composed);

    // Update the number here
    window.open(`https://wa.me/61415925090?text=${encoded}`, '_blank');
  };


  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next AI/ML project or explore collaboration opportunities?
            I'm always excited to work on challenging problems that drive innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">vinothk5490@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+61 415 925 090</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Parramatta, NSW 2150, Australia</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Rights & Status */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-xl">Work Authorization</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Full work rights in Australia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Subclass 482 visa (valid till Feb 2029)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Preparing for Permanent Residency</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links & Resume */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a href="https://www.linkedin.com/in/vinoth-karunakaran-1b708792/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <a href="https://github.com/vinothk54901" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>

              <Button asChild className="btn-primary w-full py-6 text-lg">
                <a
                  href="/VINOTH_KARUNAKARAN_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Full Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleWhatsAppSend}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input id="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Project discussion, collaboration, etc." value={form.subject} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or how we can work together..."
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="btn-primary w-full py-6 text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </Button>
              </form>

            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="card-elegant max-w-4xl mx-auto">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4 gradient-text">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you need AI/ML consulting, system architecture, or end-to-end
                development, I'm here to help turn your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.location.href = 'mailto:vinothk5490@gmail.com'}
                  className="btn-primary px-8 py-6 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg border-primary/30 hover:border-primary"
                >
                  <a href="tel:+61415925090">
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule a Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;