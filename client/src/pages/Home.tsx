import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import EvenIfSection from '@/components/EvenIfSection';
import LearningSection from '@/components/LearningSection';
import ProgramSection from '@/components/ProgramSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CredibilitySection from '@/components/CredibilitySection';
import FinalCTASection from '@/components/FinalCTASection';
import RegistrationModal from '@/components/RegistrationModal';
import ParticleSystem from '@/components/ParticleSystem';
import ReadingProgress from '@/components/ReadingProgress';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCTAClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground gradient-mesh-ultra relative overflow-hidden">
      <ReadingProgress />
      <ParticleSystem particleCount={30} className="fixed inset-0 z-0" />
      <div className="relative z-10">
        <HeroSection onCTAClick={handleCTAClick} />
        <EvenIfSection />
        <LearningSection />
        <ProgramSection />
        <TestimonialsSection />
        <CredibilitySection />
        <FinalCTASection onCTAClick={handleCTAClick} />
      </div>
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
