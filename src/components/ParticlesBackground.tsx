import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: 'circle' | 'square' | 'triangle';
  rotation: number;
  rotationSpeed: number;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Create particles
    const particleCount = 40;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 4 + 2,
        type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }
    particlesRef.current = particles;

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Mouse interaction - attract particles to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.vx += (dx / distance) * force * 0.1;
          particle.vy += (dy / distance) * force * 0.1;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Add friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Draw particle with glow
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);

        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(${180 + Math.sin(Date.now() * 0.001 + particle.x) * 100}, 100%, 50%, 0.8)`;

        // Create gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 2);
        gradient.addColorStop(0, `hsla(${180 + Math.sin(Date.now() * 0.001 + particle.x) * 100}, 100%, 60%, 0.8)`);
        gradient.addColorStop(0.5, `hsla(${280 + Math.cos(Date.now() * 0.001 + particle.y) * 80}, 90%, 65%, 0.5)`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;

        // Draw shape
        if (particle.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (particle.type === 'square') {
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        } else if (particle.type === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw connections
      const connectionDistance = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            const lineGradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );
            lineGradient.addColorStop(0, `hsla(180, 100%, 50%, ${opacity})`);
            lineGradient.addColorStop(1, `hsla(280, 90%, 65%, ${opacity})`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60 z-[1]"
    />
  );
};

export default ParticlesBackground;
