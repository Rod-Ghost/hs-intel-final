import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Award, Target, Clock, CheckCircle, Star } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function CredibilitySection() {
  const { elementRef, isVisible } = useScrollAnimation();

  const stats = [
    {
      icon: Users,
      number: 40000,
      suffix: "+",
      label: "Alunos Impactados",
      description: "Transformações comprovadas"
    },
    {
      icon: Award,
      number: 87000,
      prefix: "R$ ",
      label: "Maior Contrato Fechado",
      description: "Em apenas 3 semanas"
    },
    {
      icon: Target,
      number: 100,
      suffix: "%",
      label: "Taxa de Satisfação",
      description: "Dos alunos formados"
    },
    {
      icon: Clock,
      number: 15,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Mercado de inteligência"
    }
  ];

  const certifications = [
    { name: "Certificação", description: "Investigação Digital Avançada" },
    { name: "Metodologia", description: "HS Intel Exclusiva" },
    { name: "Ferramentas", description: "Proprietárias Premium" },
    { name: "Suporte", description: "24/7 Durante o Programa" }
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-divider mb-16" />
        
        <div 
          ref={elementRef as any}
          className={`text-center mb-20 fade-in ${isVisible ? 'visible' : ''}`}
        >
          <div className="mb-8">
            <span className="exclusive-badge" data-testid="badge-proven-results">
              <Star className="w-4 h-4" />
              Resultados comprovados
            </span>
          </div>
          
          <h2 className="hierarchy-heading-xl text-contrast-high space-hierarchy-sm">
            Por que confiar no <span className="text-gradient-premium">HS Intel</span>
          </h2>
          
          <p className="hierarchy-body-lead text-contrast-medium max-w-4xl mx-auto">
            Números que comprovam a excelência e eficácia da nossa metodologia
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="motion-off grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center fade-in ${isVisible ? 'visible' : ''} glass-ultra-premium rounded-xl p-8 card-3d hover-lift`}
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`stat-card-${index}`}
            >
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6 depth-elevation-3 hover-glow">
                <stat.icon className="w-8 h-8 text-primary-foreground" strokeWidth={2} />
              </div>
              
              <div className="hierarchy-display text-contrast-high mb-2">
                <AnimatedCounter 
                  end={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2500}
                />
              </div>
              
              <h3 className="hierarchy-subheading text-contrast-high mb-2">
                {stat.label}
              </h3>
              
              <p className="hierarchy-body text-contrast-medium">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications and Guarantees */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''} text-center`}
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              data-testid={`certification-${index}`}
            >
              <div className="credibility-seal mx-auto mb-4">
                <CheckCircle className="w-6 h-6" strokeWidth={2.5} />
              </div>
              
              <h4 className="hierarchy-subheading text-contrast-high mb-2">
                {cert.name}
              </h4>
              
              <p className="hierarchy-body text-contrast-medium">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}