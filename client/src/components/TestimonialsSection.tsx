import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Banknote, Crown, Zap, Trophy, Target } from "lucide-react";
import palestrantesGif from "@assets/palestrantes_1757687119286.gif";
import alexandreImage from "@assets/generated_images/Alexandre_lawyer_testimonial_photo_4d5cea37.png";
import clecioImage from "@assets/generated_images/Clecio_tech_professional_photo_74458846.png";
import renanImage from "@assets/generated_images/Renan_IT_specialist_photo_862db806.png";
import sidneyImage from "@assets/generated_images/Sidney_developer_testimonial_photo_13f32206.png";
import antonioImage from "@assets/generated_images/Antonio_police_officer_photo_457b93e8.png";
import alexandreVideo from "@assets/alexandre_1757763812447.mp4";

export default function TestimonialsSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const testimonials = [
    {
      name: "Alexandre",
      role: "Advogado",
      content: "Com as técnicas ensinadas, em 3 semanas fechei um serviço de R$87.000,00.",
      image: alexandreImage,
      initials: "AL"
    },
    {
      name: "Clécio",
      role: "Tech Professional",
      content: "Entrei engatinhando e, em pouco tempo, aprendi a executar e aplicar os conhecimentos adquiridos. Fechei dois contratos em um dia que me renderam mais de R$700, defini meu ICP, evoluí da ideia até o MVP e criei minha aplicação — tudo isso sem ter conhecimentos prévios de programação.",
      image: clecioImage,
      initials: "CL"
    },
    {
      name: "Renan",
      role: "TI",
      content: "Aplicando o que aprendi no HS Intel, desenvolvi o REPUTA+, uma ferramenta que ajuda médicos(as) de clínicas premium a analisarem automaticamente sua reputação online com credibilidade e valor desde o primeiro contato.",
      image: renanImage,
      initials: "RE"
    },
    {
      name: "Sidney",
      role: "Dev",
      content: "Os conhecimentos me direcionaram a contatos de níveis superiores, e hoje estou criando meu AGENTE VIRTUAL, direcionado a quem precisar.",
      image: sidneyImage,
      initials: "SI"
    },
    {
      name: "Antonio",
      role: "PC",
      content: "As técnicas aplicadas e ensinadas me ajudaram a criar minha própria marca e também impulsionaram minha carreira profissional, fazendo minhas investigações avançarem ainda mais.",
      image: antonioImage,
      initials: "AN"
    }
  ];

  return (
    <section className="section-elegant relative overflow-hidden bg-background">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <img 
          src={palestrantesGif} 
          alt="Background Animation"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="container-elegant relative z-10">
        <div 
          ref={elementRef as any}
          className={`fade-in ${isVisible ? 'visible' : ''} text-center spacing-golden-lg`}
        >
          <h2 className="text-heading text-foreground spacing-golden">
            Depoimentos de <span className="text-primary">sucesso</span>
          </h2>
          
          {/* Vídeo de depoimento em destaque */}
          <div className="max-w-lg mx-auto mb-16">
            <div className="glass-ultra-premium rounded-2xl p-4 border-2 border-primary/30">
              <div className="mb-4 flex items-center justify-center gap-3">
                <span className="exclusive-badge">
                  <Crown className="w-4 h-4" />
                  Depoimento em vídeo
                </span>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
                <video 
                  src={alexandreVideo}
                  className="w-full h-full object-contain"
                  controls
                  data-testid="video-testimonial-featured"
                >
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              {/* Frase destacada do vídeo */}
              <div className="mt-6 text-center">
                <div className="bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-lg p-4 border border-primary/40">
                  <p className="text-lg font-bold text-primary mb-1">
                    "4 dias fechando negócio"
                  </p>
                  <p className="text-xl font-extrabold text-foreground">
                    227 processos a R$300 cada processo
                  </p>
                  <div className="mt-2">
                    <span className="value-badge">
                      <Banknote className="w-4 h-4" />
                      R$ 68.100 em 4 dias
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="motion-off grid-elegant md:grid-cols-2 lg:grid-cols-3 spacing-golden-lg">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index} 
              className={`fade-in ${isVisible ? 'visible' : ''} glass-ultra-premium rounded-2xl space-content hover-lift shadow-elegant-sm gradient-mesh-card group`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative group">
                  <Avatar className="w-14 h-14 border-2 border-primary/30 depth-elevation-2 hover-glow icon-hover-lift">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 icon-pulse-glow" />
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i}
                        className="text-yellow-400 text-xs icon-pulse-glow"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h4 className="text-subheading text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-caption text-primary font-medium uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className="text-body text-muted-foreground italic">
                "{testimonial.content}"
              </blockquote>
              {/* Badges para cada depoimento */}
              <div className="mt-4">
                {testimonial.name === "Alexandre" && (
                  <span className="value-badge" data-testid="text-value-alexandre">
                    <Banknote className="w-4 h-4" />
                    R$ 87.000 em 3 semanas
                  </span>
                )}
                {testimonial.name === "Clécio" && (
                  <span className="innovation-badge" data-testid="badge-innovation-clecio">
                    <Zap className="w-3 h-3" />
                    Sem conhecimento prévio
                  </span>
                )}
                {testimonial.name === "Renan" && (
                  <span className="exclusive-badge" data-testid="badge-exclusive-renan">
                    <Crown className="w-3 h-3" />
                    Desenvolveu REPUTA+
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="motion-off grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <div
              key={index + 3} 
              className={`fade-in ${isVisible ? 'visible' : ''} glass-ultra-premium glass-layers rounded-xl p-6 card-3d hover-lift parallax-element parallax-fast group`}
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              data-testid={`testimonial-${index + 3}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="w-14 h-14 border border-primary/30 depth-elevation-2">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-subheading text-card-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-caption text-primary font-medium uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <blockquote className="text-body text-muted-foreground italic">
                "{testimonial.content}"
              </blockquote>
              {/* Badges para Sidney e Antonio */}
              <div className="mt-4">
                {testimonial.name === "Sidney" && (
                  <span className="innovation-badge" data-testid="badge-innovation-sidney">
                    <Zap className="w-3 h-3" />
                    Agente Virtual
                  </span>
                )}
                {testimonial.name === "Antonio" && (
                  <span className="achievement-badge" data-testid="badge-achievement-antonio">
                    <Trophy className="w-3 h-3" />
                    Marca própria
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Estratégico após depoimentos */}
        <div className={`fade-in ${isVisible ? 'visible' : ''} text-center mt-20`} style={{ animationDelay: '0.8s' }}>
          <div className="max-w-3xl mx-auto glass-ultra-premium rounded-2xl p-8 border-2 border-primary/30">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Você será o <span className="text-primary">próximo</span>?
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              Junte-se aos profissionais que já transformaram suas carreiras
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground font-bold text-xl px-12 py-4 rounded-xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border-2 border-primary/20"
                onClick={() => window.open('https://tally.so/r/wzVzXR', '_blank', 'noopener,noreferrer')}
                data-testid="button-cta-testimonials"
              >
                GARANTIR MINHA VAGA
              </Button>
              <p className="text-sm text-muted-foreground">
                ⚡ Vagas limitadas - Processo seletivo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}