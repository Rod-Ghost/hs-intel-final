import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, Users, Trophy } from "lucide-react";

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

export default function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="section-divider mb-16 opacity-30" />
        <div 
          ref={elementRef as any}
          className={`fade-in ${isVisible ? 'visible' : ''}`}
        >
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <span className="priority-badge icon-breathing" data-testid="badge-limited-time">
              <Clock className="w-3 h-3 icon-pulse-glow" />
              Vagas limitadas
            </span>
            <span className="exclusive-badge icon-breathing" data-testid="badge-elite-group">
              <Users className="w-4 h-4 icon-pulse-glow" />
              Grupo seleto
            </span>
            <span className="achievement-badge icon-breathing" data-testid="badge-transformation">
              <Trophy className="w-3 h-3 icon-pulse-glow" />
              Transforme sua carreira
            </span>
          </div>
          <h2 className={`hierarchy-heading-xl text-contrast-high space-hierarchy-md ${isVisible ? 'fade-in visible stagger-1' : 'fade-in'}`}>
            Agora é sua vez de entrar para a{" "}
            <span className="text-gradient-premium font-extrabold drop-shadow-lg">ELITE DA INTELIGÊNCIA</span>
          </h2>
          
          <Button 
            variant="secondary"
            size="lg"
            className={`magnetic-button cta-ultra-glow ripple-effect bg-background text-foreground font-semibold px-10 py-4 shadow-colored ${isVisible ? 'fade-in visible stagger-2' : 'fade-in'}`}
            onClick={() => window.open('https://tally.so/r/wzVzXR', '_blank', 'noopener,noreferrer')}
            data-testid="button-cta-final"
          >
            PREENCHER AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}