import { Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Buscar continuamente a melhoria dos processos, produtos e serviços",
    },
    {
      icon: Heart,
      title: "Comprometimento",
      description: "Cumprir com responsabilidade cada etapa do atendimento e da entrega",
    },
    {
      icon: Target,
      title: "Integridade",
      description: "Agir de forma ética e transparente em todas as relações",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Investir em novas tecnologias e práticas que agreguem valor",
    },
    {
      icon: Users,
      title: "Valorização das pessoas",
      description: "Incentivar o crescimento profissional e o respeito mútuo",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre a SUMAN ELÉTRICA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Energia, qualidade e confiança em cada projeto
            </p>
          </div>

          {/* Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Visão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como uma das principais empresas do setor elétrico regional, destacando-se pela 
                  excelência no atendimento, pela qualidade dos produtos e pela confiabilidade das soluções oferecidas 
                  aos nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Missão</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Atuar com profissionalismo e eficiência no fornecimento de materiais e soluções elétricas, atendendo 
                  às necessidades dos clientes com agilidade, segurança e compromisso, promovendo o desenvolvimento 
                  sustentável e contribuindo para o fortalecimento do setor elétrico no Brasil.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">Nossos valores</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-border/50 hover:border-primary/30 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* History */}
          <Card className="border-primary/10 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl font-bold text-foreground mb-6">Nossa história</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fundada por <strong className="text-foreground">Rogério Suman</strong>, a SUMAN ELÉTRICA nasceu com o 
                  propósito de levar energia, qualidade e confiança a cada projeto. Desde o início, a empresa se destacou 
                  pela responsabilidade, atendimento diferenciado e compromisso em oferecer as melhores soluções elétricas 
                  do mercado.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O sucesso da SUMAN é resultado do trabalho de uma equipe dedicada e experiente, que acredita que cada 
                  cliente merece atenção personalizada e resultados eficientes. São os colaboradores que mantêm viva a 
                  essência da empresa: servir com excelência e crescer junto com quem confia na marca.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com uma trajetória construída sobre valores sólidos e inovação constante, a SUMAN ELÉTRICA segue 
                  conectando pessoas, empresas e sonhos — sempre com energia, profissionalismo e paixão pelo que faz.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Market */}
          <div className="mt-16">
            <Card className="border-accent/10 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-foreground mb-6">Mercado no qual atuamos</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A SUMAN ELÉTRICA atua no setor de soluções elétricas, oferecendo produtos e serviços de alta qualidade 
                  para diversos segmentos:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Residencial: projetos de iluminação, automação e infraestrutura elétrica",
                    "Comercial: lojas, escritórios e estabelecimentos com soluções eficientes",
                    "Industrial: instalações e manutenção para indústrias e grandes empreendimentos",
                    "Construção civil e engenharia: suporte técnico completo",
                    "Média tensão: distribuição e controle de energia em subestações",
                    "Energia sustentável e SPDA: eficiência energética e proteção",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
