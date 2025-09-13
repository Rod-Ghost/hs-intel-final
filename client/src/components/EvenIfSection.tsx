import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mixGif from "@assets/mix_1757687119286.gif";

export default function EvenIfSection() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const conditions = [
    "Esteja começando do zero, sem conhecimento técnico em investigação digital.",
    "Seja policial, advogado, perito ou profissional de TI querendo migrar para a área de inteligência.",
    "Já atue no mercado, mas queira aumentar seus ganhos, escalar seus serviços e se posicionar como autoridade."
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="section-divider mb-16" />
        <div 
          ref={elementRef as any}
          className={`fade-in ${isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-heading text-center mb-20 text-foreground">
            <span className="text-primary">Mesmo que você:</span>
          </h2>
        </div>
        
        <div className="motion-off grid gap-6">
          {conditions.map((condition, index) => (
            <div 
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''} glass-ultra-premium rounded-xl flex items-start space-x-6 p-6 card-3d hover-lift`}
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`condition-item-${index}`}
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <p className="text-body text-card-foreground">
                {condition}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA após condições */}
        <div className={`fade-in ${isVisible ? 'visible' : ''} text-center mt-16`} style={{ animationDelay: '0.6s' }}>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8">
              Independente do seu ponto de partida, você pode se tornar um especialista
            </p>
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 border-2 border-primary/20"
              onClick={() => window.open('https://tally.so/r/wzVzXR', '_blank', 'noopener,noreferrer')}
              data-testid="button-cta-evenif"
            >
              COMEÇAR MINHA JORNADA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}