import { Search, DollarSign, Globe, Lightbulb, Star, Target, Trophy, Crown, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import mixGif from "@assets/mix_1757687119286.gif";

export default function LearningSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const learningItems = [
    {
      icon: Search,
      title: "Execução de investigações digitais reais",
      description: "Do básico ao avançado, com protocolos testados e ferramentas exclusivas como HISPY, Sherlocker, Capturee e Huntter."
    },
    {
      icon: DollarSign,
      title: "Fechamento comercial e precificação",
      description: "Como estruturar propostas, usar SPIN Selling e transformar cada investigação em contratos de alto valor."
    },
    {
      icon: Globe,
      title: "Autoridade digital",
      description: "Posicionamento estratégico para ser reconhecido como referência no mercado de investigação e inteligência."
    },
    {
      icon: Lightbulb,
      title: "Criação de métodos próprios e produtos digitais",
      description: "Construa soluções únicas para escalar sua atuação e se diferenciar da concorrência."
    }
  ];

  return (
    <section className="section-elegant relative overflow-hidden bg-background">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img 
          src={mixGif} 
          alt="Background Animation"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 gradient-wash-subtle" />
      </div>
      <div className="container-elegant relative z-10">
        <div 
          ref={elementRef as any}
          className={`fade-in ${isVisible ? 'visible' : ''} text-center spacing-golden-lg`}
        >
          <div className="spacing-golden">
            <span className="highlight-badge" data-testid="badge-learning-program">
              <Star className="w-4 h-4" />
              Programa de 12 meses
            </span>
          </div>
          <h2 className="text-heading text-foreground">
            O que você vai <span className="text-primary">aprender</span>
          </h2>
        </div>
        
        <div className="motion-off grid-elegant md:grid-cols-2">
          {learningItems.map((item, index) => (
            <div 
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''} glass-ultra-premium rounded-2xl space-content hover-lift shadow-elegant-sm gradient-mesh-card`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`learning-item-${index}`}
            >
              <div className="flex items-start space-x-5 spacing-golden">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-elegant-colored hover-glow">
                  <item.icon className="w-7 h-7 text-primary-foreground" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-secondary text-foreground mb-3">
                    {item.title}
                  </h3>
                  {index === 0 && (
                    <span className="priority-badge" data-testid={`badge-priority-${index}`}>
                      <Target className="w-3 h-3" />
                      Prioritário
                    </span>
                  )}
                  {index === 1 && (
                    <span className="achievement-badge" data-testid={`badge-achievement-${index}`}>
                      <Trophy className="w-3 h-3" />
                      Alto impacto
                    </span>
                  )}
                  {index === 2 && (
                    <span className="exclusive-badge" data-testid={`badge-exclusive-${index}`}>
                      <Crown className="w-3 h-3" />
                      Exclusivo
                    </span>
                  )}
                  {index === 3 && (
                    <span className="innovation-badge" data-testid={`badge-innovation-${index}`}>
                      <Zap className="w-3 h-3" />
                      Inovação
                    </span>
                  )}
                </div>
              </div>
              <p className="text-body text-muted-foreground ml-19">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Estratégico */}
        <div className={`fade-in ${isVisible ? 'visible' : ''} text-center mt-16`} style={{ animationDelay: '0.5s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pronto para transformar sua <span className="text-primary">carreira</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Não perca tempo. As vagas são limitadas e o processo é seletivo.
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border-2 border-primary/20"
              onClick={() => window.open('https://tally.so/r/wzVzXR', '_blank', 'noopener,noreferrer')}
              data-testid="button-cta-learning"
            >
              QUERO ME INSCREVER AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}