import { Button } from "@/components/ui/button";
import heroVideo from "@assets/geral_1757766488376.gif";
import hsIntelLogo from "@assets/HS_INTELLL-removebg-preview_1757720023699.png";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-4 px-4 sm:py-8">
      {/* Enhanced Background with video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={heroVideo}
          alt="Background Animation"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      
      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 z-1 bg-black/60" />
      <div className="absolute inset-0 z-2 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <div className="absolute inset-0 z-3 bg-gradient-radial from-transparent via-black/20 to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 container-elegant text-center space-content-xl px-4 sm:px-6 lg:px-8">
        
        {/* Logo sem Card */}
        <div className="spacing-golden fade-in visible stagger-0 mb-6">
          <img 
            src={hsIntelLogo} 
            alt="HS Intel"
            className="mx-auto h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 w-auto object-contain drop-shadow-2xl filter brightness-125 contrast-110"
            data-testid="img-logo-hs-intel"
            loading="eager"
          />
        </div>
        
        {/* Linha de destaque separando logo do título */}
        <div className="mt-6 sm:mt-8 md:mt-10 mb-8 sm:mb-10 md:mb-12 flex justify-center fade-in visible stagger-1">
          <div className="w-32 sm:w-40 md:w-48 lg:w-56 h-1.5 sm:h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-2xl shadow-primary/50 animate-pulse"></div>
        </div>
        
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold drop-shadow-lg leading-tight spacing-golden fade-in visible stagger-1">
          DURANTE OS PRÓXIMOS{" "}
          <span className="text-primary font-extrabold drop-shadow-md">12 MESES</span>{" "}
          EU VOU TE LEVAR DO{" "}
          <span className="text-primary font-extrabold drop-shadow-md">ZERO À ELITE</span>{" "}
          DA INTELIGÊNCIA
        </h1>
        
        <div className="space-elegant-lg">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto spacing-golden fade-in visible stagger-2 drop-shadow-sm px-4">
            Você terá acesso a um sistema prático e estratégico com a metodologia do HS Intel, 
            que já transformou a carreira de muitos profissionais.
          </p>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-3xl mx-auto spacing-golden-lg fade-in visible stagger-3 drop-shadow-sm px-4">
            Não é 'pagou, entrou'! Para tentar uma das vagas, preencha seu formulário de 
            inscrição clicando no botão abaixo.
          </p>
        </div>
        
        <div className="mt-8 sm:mt-12 md:mt-16 mb-8 sm:mb-12 relative z-20 flex justify-center fade-in visible stagger-4 px-4">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground font-bold text-sm sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 w-full max-w-xs sm:max-w-sm md:w-72 relative z-30 border-2 border-primary/20 drop-shadow-lg"
            onClick={() => window.open('https://tally.so/r/wzVzXR', '_blank', 'noopener,noreferrer')}
            data-testid="button-cta-main"
          >
            PREENCHER AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}