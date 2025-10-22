import { Wrench, Cpu, Lightbulb, Shield, Cable, Clipboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Instalações elétricas",
      items: [
        "Instalações residenciais, comerciais e industriais",
        "Projetos de média tensão e distribuição de energia",
        "Montagem de quadros de comando e distribuição",
      ],
    },
    {
      icon: Cpu,
      title: "Automação e comando",
      items: [
        "Automação residencial e industrial",
        "Programação e instalação de comandos elétricos",
        "Contatores e relés aplicados em sistemas elétricos",
      ],
    },
    {
      icon: Lightbulb,
      title: "Iluminação e conforto",
      items: [
        "Projetos e execução de iluminação LED",
        "Instalação de ventiladores, climatizadores e ar-condicionado",
        "Instalação de duchas, chuveiros e torneiras elétricas",
      ],
    },
    {
      icon: Shield,
      title: "Segurança e monitoramento",
      items: [
        "Instalação de dispositivos de segurança",
        "Sistemas de câmeras Wi-Fi e circuito fechado (CFTV)",
        "Implantação de sistemas SPDA (proteção contra descargas)",
      ],
    },
    {
      icon: Cable,
      title: "Infraestrutura e manutenção",
      items: [
        "Cabeamento e fiação elétrica completa",
        "Montagem de infraestrutura zincada e PVC",
        "Manutenção preventiva e corretiva em sistemas elétricos",
      ],
    },
    {
      icon: Clipboard,
      title: "Consultoria e projetos",
      items: [
        "Assessoria técnica para projetos diversos",
        "Planejamento e execução de soluções em média tensão",
        "Projetos de eficiência energética e sustentabilidade",
      ],
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-2">
              Nossos serviços
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Soluções completas e especializadas para garantir qualidade, segurança e eficiência em cada projeto
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 sm:mt-14 md:mt-16 text-center px-4">
            <p className="text-base sm:text-lg text-muted-foreground mb-5 sm:mb-6">
              Precisa de um serviço específico? Entre em contato conosco!
            </p>
            <a
              href="https://wa.me/5514998017067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="mr-2 h-5 w-5" />
              Fale com nossos especialistas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
