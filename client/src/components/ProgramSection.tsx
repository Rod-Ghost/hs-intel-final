import { BarChart, GraduationCap, User, Users, Wrench, Navigation, Crown, Shield, Zap, Calendar, Clock, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import palestrantesGif from "@assets/palestrantes_1757687119286.gif";
import brunoPhoto from "@assets/brunooo_1757771557272.jpeg";

export default function ProgramSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const features = [
    {
      icon: BarChart,
      text: "Diagnóstico inicial do seu momento e direcionamento personalizado."
    },
    {
      icon: GraduationCap,
      text: "Trilha de aulas específicas, ao vivo e gravadas, sempre atualizadas."
    },
    {
      icon: User,
      text: "Consultorias individuais com Bruno Fraga."
    },
    {
      icon: Users,
      text: "Grupo privado de networking e suporte."
    },
    {
      icon: Wrench,
      text: "Acesso a ferramentas proprietárias (HISPY, Sherlocker, Capturee, Huntter)."
    },
    {
      icon: Navigation,
      text: "Acompanhamento estratégico contínuo para acelerar seus resultados."
    }
  ];

  const programStats = [
    { number: "12", label: "Meses de mentoria", icon: Calendar },
    { number: "24", label: "Encontros ao vivo", icon: Clock },
    { number: "100%", label: "Metodologia prática", icon: Target },
    { number: "∞", label: "Suporte contínuo", icon: Trophy }
  ];

  return (
    <section id="program-section" className="section-elegant relative overflow-hidden bg-black">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img 
          src={palestrantesGif} 
          alt="Background Animation"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container-elegant relative z-10">
        <div 
          ref={elementRef as any}
          className={`fade-in ${isVisible ? 'visible' : ''} text-center spacing-golden-lg`}
        >
          <div className="spacing-golden flex flex-wrap justify-center gap-4">
            <span className="exclusive-badge" data-testid="badge-exclusive-mentorship">
              <Crown className="w-4 h-4" />
              Mentoria exclusiva
            </span>
            <span className="priority-badge" data-testid="badge-limited-spots">
              <Shield className="w-3 h-3" />
              Vagas limitadas
            </span>
          </div>
          <h2 className="text-heading text-white spacing-golden">
            <span className="text-primary">Não é um curso online.</span>
          </h2>
          <div className="visual-emphasis">
            <p className="text-body-large text-gray-300 max-w-4xl mx-auto">
              O HS Intel é uma mentoria estratégica, 100% prática e ao vivo, com 24 encontros 
              ao longo de 12 meses diretamente com Bruno Fraga e o time da Hacker Society.
            </p>
          </div>
        </div>
        
        {/* Estatísticas do Programa */}
        <div className={`fade-in ${isVisible ? 'visible' : ''} grid grid-cols-2 md:grid-cols-4 gap-6 mb-16`} style={{ animationDelay: '0.3s' }}>
          {programStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center glass-ultra-premium rounded-xl p-6 hover-lift"
              data-testid={`program-stat-${index}`}
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-elegant-colored">
                <stat.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="motion-off grid-elegant md:grid-cols-2">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''} glass-ultra-premium rounded-2xl space-content hover-lift shadow-elegant-md flex items-start space-x-5`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`program-feature-${index}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-elegant-colored hover-glow">
                <feature.icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <p className="text-body text-white mb-3">
                  {feature.text}
                </p>
                {index === 0 && (
                  <span className="priority-badge" data-testid={`badge-priority-${index}`}>
                    <Navigation className="w-3 h-3" />
                    Início
                  </span>
                )}
                {index === 1 && (
                  <span className="achievement-badge" data-testid={`badge-achievement-${index}`}>
                    <GraduationCap className="w-3 h-3" />
                    Aprendizado contínuo
                  </span>
                )}
                {index === 2 && (
                  <span className="exclusive-badge" data-testid={`badge-exclusive-${index}`}>
                    <Crown className="w-3 h-3" />
                    Diferencial exclusivo
                  </span>
                )}
                {index === 3 && (
                  <span className="achievement-badge" data-testid={`badge-achievement-${index}`}>
                    <Users className="w-3 h-3" />
                    Comunidade
                  </span>
                )}
                {index === 4 && (
                  <span className="exclusive-badge" data-testid={`badge-exclusive-${index}`}>
                    <Wrench className="w-3 h-3" />
                    Diferencial exclusivo
                  </span>
                )}
                {index === 5 && (
                  <span className="innovation-badge" data-testid={`badge-innovation-${index}`}>
                    <Zap className="w-3 h-3" />
                    Suporte total
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Destaque do Mentor */}
        <div className={`fade-in ${isVisible ? 'visible' : ''} mt-16 mb-12`} style={{ animationDelay: '0.8s' }}>
          <div className="max-w-4xl mx-auto glass-ultra-premium rounded-2xl p-8 border-2 border-primary/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Foto do Bruno */}
              <div className="flex-shrink-0">
                <img 
                  src={brunoPhoto}
                  alt="Bruno Fraga"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-primary/50 shadow-2xl"
                  style={{ objectPosition: 'center 20%' }}
                  loading="lazy"
                  data-testid="img-bruno-fraga"
                />
              </div>
              
              {/* Informações do Bruno */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Mentoria direta com <span className="text-primary">Bruno Fraga</span>
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Fundador da Hacker Society, especialista em investigação digital e inteligência, 
                  com mais de 15 anos de experiência no mercado.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-xl md:text-2xl font-bold text-primary">15+</div>
                    <div className="text-xs md:text-sm text-gray-400">Anos de experiência</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl md:text-2xl font-bold text-primary">40.000+</div>
                    <div className="text-xs md:text-sm text-gray-400">Alunos impactados</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl md:text-2xl font-bold text-primary">100%</div>
                    <div className="text-xs md:text-sm text-gray-400">Taxa de satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA específico da seção */}
        <div className={`fade-in ${isVisible ? 'visible' : ''} text-center`} style={{ animationDelay: '1s' }}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Quer saber se você tem <span className="text-primary">perfil</span>?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Preencha o formulário e descubra se você está pronto para transformar sua carreira
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground font-bold text-xl px-12 py-4 rounded-xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border-2 border-primary/20"
              onClick={() => window.open('https://tally.so/r/wzVzXR', '_blank', 'noopener,noreferrer')}
              data-testid="button-cta-program"
            >
              AVALIAR MEU PERFIL
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}