import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  animationDelay: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

export default function ParticleSystem({ particleCount = 20, className = "" }: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          animationDelay: Math.random() * 8,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [particleCount]);

  return (
    <div className={`particle-system ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
          }}
        />
      ))}
    </div>
  );
}