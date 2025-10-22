import { 
  Lightbulb, 
  Cpu, 
  Cable, 
  Shield, 
  Hammer, 
  Zap,
  Camera,
  Network
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Lightbulb,
      title: "Iluminação e conforto",
      items: [
        "Iluminação em LED",
        "Ventiladores, climatizadores e ar-condicionado",
        "Duchas e chuveiros",
        "Torneiras elétricas",
      ],
    },
    {
      icon: Cpu,
      title: "Automação e comando",
      items: [
        "Comandos elétricos",
        "Automação elétrica",
        "Contatores e relés",
        "Quadros de comandos e distribuição",
      ],
    },
    {
      icon: Cable,
      title: "Cabeamento e conectividade",
      items: [
        "Cabos e fios",
        "Conectores de emenda e derivações",
        "Produtos de comunicação",
        "Extensões sob medida",
      ],
    },
    {
      icon: Shield,
      title: "Segurança e monitoramento",
      items: [
        "Dispositivos de segurança",
        "Câmeras Wi-Fi e CFTV",
        "Materiais de SPDA",
        "Sistemas de proteção",
      ],
    },
    {
      icon: Hammer,
      title: "Infraestrutura e construção",
      items: [
        "Linha industrial",
        "Infraestrutura zincada e PVC",
        "Poste padrão de entrada",
        "Parafusos e acessórios",
        "Ferramentas manuais e elétricas",
      ],
    },
    {
      icon: Zap,
      title: "Energia e média tensão",
      items: [
        "Materiais para média tensão",
        "Soluções para distribuição elétrica",
        "Equipamentos industriais",
        "Componentes especializados",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ampla variedade de produtos elétricos para atender desde pequenas reformas até grandes empreendimentos
            </p>
          </div>

          {/* Products grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-accent/30 shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <product.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
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

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-card rounded-2xl shadow-xl border border-border/50">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a encontrar o produto ideal para seu projeto. 
                Entre em contato e receba atendimento personalizado.
              </p>
              <a
                href="https://wa.me/5514998017067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent-light text-accent-foreground rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Consulte nossos produtos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
