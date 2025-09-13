import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Database, Shield, Target, Users, Trophy, Zap, Star, CheckCircle, Award, Brain, Rocket } from 'lucide-react';

const timelineItems = [
  {
    month: "Mês 1-2",
    title: "Fundamentos",
    description: "Base sólida em investigação digital e ferramentas essenciais",
    icon: Search,
    milestone: "Domínio das técnicas básicas"
  },
  {
    month: "Mês 3-4", 
    title: "Ferramentas Avançadas",
    description: "Maltego, Shodan, OSINT Framework e técnicas profissionais",
    icon: Database,
    milestone: "Certificação em ferramentas premium"
  },
  {
    month: "Mês 5-6",
    title: "Análise Forense",
    description: "Técnicas forenses digitais e preservação de evidências",
    icon: Shield,
    milestone: "Expertise em análise forense"
  },
  {
    month: "Mês 7-8",
    title: "Casos Reais",
    description: "Aplicação prática em investigações reais supervisionadas",
    icon: Target,
    milestone: "Primeira investigação completa"
  },
  {
    month: "Mês 9-10",
    title: "Networking",
    description: "Conexões com profissionais da área e oportunidades",
    icon: Users,
    milestone: "Rede profissional estabelecida"
  },
  {
    month: "Mês 11-12",
    title: "Elite",
    description: "Certificação final e entrada no mercado premium",
    icon: Trophy,
    milestone: "Transformação completa"
  }
];

export default function ProgramTimeline() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="hierarchy-heading-xl text-contrast-high space-hierarchy-md">
            Sua jornada de <span className="text-gradient-premium">12 meses</span> para a elite
          </h2>
          <p className="hierarchy-body-lead text-contrast-medium max-w-3xl mx-auto">
            Cada mês é cuidadosamente planejado para sua evolução progressiva
          </p>
        </div>

        <div 
          ref={elementRef as any}
          className={`timeline-container max-w-4xl mx-auto ${isVisible ? 'fade-in visible' : 'fade-in'}`}
        >
          <div className="timeline-line" />
          
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              className={`relative mb-16 last:mb-0 fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`timeline-item-${index}`}
            >
              <div className={`timeline-dot`} style={{ top: '1rem' }} />
              
              <div className="glass-ultra-premium glass-layers rounded-xl p-8 ml-8 card-3d hover-lift">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex items-center justify-center icon-hover-lift icon-pulse-glow">
                    <item.icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="priority-badge">{item.month}</span>
                      <h3 className="hierarchy-subheading text-contrast-high mb-0">{item.title}</h3>
                    </div>
                    
                    <p className="hierarchy-body text-contrast-medium mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-primary" strokeWidth={2} />
                      <span className="hierarchy-caption text-contrast-accent font-medium">
                        {item.milestone}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}