import { useEffect, useState, useCallback } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
  life: number;
  maxLife: number;
}

const CursorParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colors = [
    "hsl(var(--neon-cyan))",
    "hsl(var(--neon-purple))",
    "hsl(var(--neon-magenta))",
  ];

  const createParticle = useCallback((x: number, y: number): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      size: Math.random() * 6 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed,
      },
      life: 1,
      maxLife: 1,
    };
  }, []);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let particleCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      setMousePos({ x: e.clientX, y: e.clientY });

      // Only create particles when moving fast enough
      if (distance > 10) {
        particleCount++;
        if (particleCount % 2 === 0) {
          setParticles((prev) => {
            const newParticles = [...prev, createParticle(e.clientX, e.clientY)];
            return newParticles.slice(-30); // Max 30 particles
          });
        }
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [createParticle]);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.velocity.x,
            y: p.y + p.velocity.y,
            velocity: {
              x: p.velocity.x * 0.98,
              y: p.velocity.y * 0.98 + 0.1, // gravity
            },
            life: p.life - 0.02,
          }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.life * 0.8,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transition: "opacity 0.1s ease-out",
          }}
        />
      ))}
      
      {/* Subtle glow following cursor */}
      <div
        className="absolute w-64 h-64 rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, hsl(var(--neon-cyan) / 0.08) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

export default CursorParticles;
