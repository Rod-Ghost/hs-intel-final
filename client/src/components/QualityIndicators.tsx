import { Shield, Award, Users, Clock } from 'lucide-react';

const indicators = [
  {
    icon: Shield,
    title: "CERTIFICADO",
    subtitle: "Premium Quality",
    color: "primary"
  },
  {
    icon: Award,
    title: "12 MESES",
    subtitle: "Mentorship Elite",
    color: "accent"
  },
  {
    icon: Users,
    title: "500+",
    subtitle: "Profissionais Transformados",
    color: "primary"
  },
  {
    icon: Clock,
    title: "24/7",
    subtitle: "Suporte Exclusivo",
    color: "accent"
  }
];

export default function QualityIndicators() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-16">
      {indicators.map((indicator, index) => (
        <div 
          key={index}
          className="credibility-seal icon-breathing"
          data-testid={`quality-indicator-${index}`}
        >
          <div className="flex flex-col items-center text-center">
            <indicator.icon className="w-6 h-6 mb-1" strokeWidth={2.5} />
            <span className="text-xs font-bold leading-tight">{indicator.title}</span>
            <span className="text-[0.6rem] opacity-90 leading-tight">{indicator.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}