import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
}

function lerp(a: number, b: number, alpha: number) {
  return a + (b - a) * alpha;
}

export function AIBrainScene({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.clientWidth;
    let H = canvas.clientHeight;
    canvas.width = W * window.devicePixelRatio;
    canvas.height = H * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // ── Colors from Metatok palette ──
    const PRIMARY = "82, 112, 255";   // cobalto eléctrico
    const ACCENT  = "148, 88, 255";   // violeta cibernético
    const GOLD    = "212, 175, 55";   // luxury gold

    // ── Particles ──
    const COUNT = 60;
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 400 + 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      vz: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.3,
    }));

    // Central AI core node
    const core = {
      x: W / 2,
      y: H / 2,
      radius: 28,
      pulsePhase: 0,
    };

    // Satellites (orbit nodes)
    const orbitCount = 5;
    const satellites = Array.from({ length: orbitCount }, (_, i) => ({
      angle: (i / orbitCount) * Math.PI * 2,
      radius: Math.min(W, H) * 0.3,
      speed: 0.004 + i * 0.0015,
      size: 8 + i * 2,
      color: i % 2 === 0 ? PRIMARY : ACCENT,
    }));

    let camX = 0, camY = 0;

    function project(px: number, py: number, pz: number) {
      const fov = 500;
      const scale = fov / (fov + pz);
      return {
        x: W / 2 + (px - W / 2) * scale + camX * 30,
        y: H / 2 + (py - H / 2) * scale + camY * 30,
        scale,
      };
    }

    let time = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // ── Parallax camera ──
      camX = lerp(camX, mouseRef.current.x - 0.5, 0.04);
      camY = lerp(camY, mouseRef.current.y - 0.5, 0.04);

      time += 0.008;
      core.pulsePhase += 0.05;

      // ── Update particles ──
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        if (p.z < 50) p.z = 500;
        if (p.z > 550) p.z = 50;
      });

      // ── Draw connections ──
      const MAX_DIST = 140;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const pa = project(a.x, a.y, a.z);
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const pb = project(b.x, b.y, b.z);
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            const useAccent = (i + j) % 3 === 0;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${useAccent ? ACCENT : PRIMARY}, ${alpha})`;
            ctx.lineWidth = pa.scale * 0.6;
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
        }
      }

      // ── Draw particles ──
      particles.forEach((p, i) => {
        const pp = project(p.x, p.y, p.z);
        const s = p.size * pp.scale;
        const useAccent = i % 4 === 0;
        const col = i % 7 === 0 ? GOLD : (useAccent ? ACCENT : PRIMARY);

        const grad = ctx.createRadialGradient(pp.x, pp.y, 0, pp.x, pp.y, s * 2);
        grad.addColorStop(0, `rgba(${col}, ${p.opacity * pp.scale})`);
        grad.addColorStop(1, `rgba(${col}, 0)`);

        ctx.beginPath();
        ctx.arc(pp.x, pp.y, s * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      // ── Draw satellite connection lines to core ──
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const sx = core.x + Math.cos(sat.angle + time * 0.2) * sat.radius;
        const sy = core.y + Math.sin(sat.angle + time * 0.2) * sat.radius * 0.55;

        const corePX = core.x + camX * 20;
        const corePY = core.y + camY * 20;

        // Line core → satellite
        const lineGrad = ctx.createLinearGradient(corePX, corePY, sx, sy);
        lineGrad.addColorStop(0, `rgba(${sat.color}, 0.5)`);
        lineGrad.addColorStop(1, `rgba(${sat.color}, 0)`);
        ctx.beginPath();
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.moveTo(corePX, corePY);
        ctx.lineTo(sx, sy);
        ctx.stroke();
        ctx.setLineDash([]);

        // Satellite node
        const satGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sat.size * 2);
        satGrad.addColorStop(0, `rgba(${sat.color}, 0.9)`);
        satGrad.addColorStop(0.5, `rgba(${sat.color}, 0.4)`);
        satGrad.addColorStop(1, `rgba(${sat.color}, 0)`);
        ctx.beginPath();
        ctx.arc(sx, sy, sat.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = satGrad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sx, sy, sat.size * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${sat.color}, 0.95)`;
        ctx.fill();
      });

      // ── Draw core ──
      const pulse = Math.sin(core.pulsePhase) * 0.3 + 0.7;
      const cx = core.x + camX * 20;
      const cy = core.y + camY * 20;

      // Outer pulse rings
      for (let ring = 3; ring >= 1; ring--) {
        const rr = core.radius * (1 + ring * 0.5 + (1 - pulse) * ring * 0.4);
        const ra = (0.06 - ring * 0.015) * pulse;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${PRIMARY}, ${ra})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Core glow
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, core.radius * 2.5);
      coreGrad.addColorStop(0, `rgba(${PRIMARY}, ${0.4 * pulse})`);
      coreGrad.addColorStop(0.5, `rgba(${ACCENT}, ${0.15 * pulse})`);
      coreGrad.addColorStop(1, `rgba(${PRIMARY}, 0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, core.radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Core circle
      const coreFill = ctx.createRadialGradient(cx - 6, cy - 6, 2, cx, cy, core.radius);
      coreFill.addColorStop(0, `rgba(${PRIMARY}, 0.95)`);
      coreFill.addColorStop(0.6, `rgba(${ACCENT}, 0.7)`);
      coreFill.addColorStop(1, `rgba(${PRIMARY}, 0.5)`);
      ctx.beginPath();
      ctx.arc(cx, cy, core.radius, 0, Math.PI * 2);
      ctx.fillStyle = coreFill;
      ctx.fill();

      // Core border
      ctx.beginPath();
      ctx.arc(cx, cy, core.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${PRIMARY}, 0.8)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Core label
      ctx.font = "bold 9px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AI", cx, cy - 5);
      ctx.font = "7px Inter, sans-serif";
      ctx.fillText("CORE", cx, cy + 6);

      frameRef.current = requestAnimationFrame(draw);
    }

    frameRef.current = requestAnimationFrame(draw);

    // ── Mouse parallax ──
    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    }
    canvas.addEventListener("mousemove", onMouseMove);

    // ── Resize ──
    function onResize() {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      core.x = W / 2;
      core.y = H / 2;
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(frameRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
