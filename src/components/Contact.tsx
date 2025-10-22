import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(14) 99801-7067",
      link: "https://wa.me/5514998017067",
      linkText: "Chamar no WhatsApp",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "suman.eletrica@gmail.com",
      link: "mailto:suman.eletrica@gmail.com",
      linkText: "Enviar e-mail",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Octacílio Nogueira, 400 - Bauru/SP",
      link: null,
      linkText: null,
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a sexta: 8h às 18h | Sábado: 8h às 12h",
      link: null,
      linkText: null,
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@suman.eletrica",
      link: "https://instagram.com/suman.eletrica",
      color: "hover:text-pink-600",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "suman.eletrica",
      link: "https://facebook.com/suman.eletrica",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você e transformar seu projeto em realidade
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{info.content}</p>
                      {info.link && (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary-light font-medium transition-colors inline-flex items-center"
                        >
                          {info.linkText}
                          <span className="ml-1">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Media */}
          <Card className="border-accent/20 shadow-lg mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Siga-nos nas redes sociais
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 bg-muted/50 hover:bg-muted rounded-lg transition-all duration-300 ${social.color} group`}
                  >
                    <social.icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-sm font-medium text-foreground">
                        {social.name}
                      </div>
                      <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Pronto para começar seu projeto?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Nossa equipe de especialistas está pronta para oferecer as melhores soluções elétricas 
                para sua residência, comércio ou indústria.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5514998017067"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-light text-primary-foreground shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Solicite um orçamento
                  </Button>
                </a>
                <a
                  href="mailto:suman.eletrica@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/60 text-primary hover:bg-primary/10 hover:border-primary shadow-md"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar e-mail
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
