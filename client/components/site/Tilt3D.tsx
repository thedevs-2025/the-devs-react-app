import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Tilt3DProps = React.HTMLAttributes<HTMLDivElement> & {
  maxRotate?: number; // degrees
  perspective?: number; // px
  scale?: number;
};

export default function Tilt3D({
  className,
  children,
  maxRotate = 10,
  perspective = 900,
  scale = 1.02,
  ...rest
}: Tilt3DProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current!;
    const inner = innerRef.current!;
    if (!container || !inner) return;

    let ticking = false;

    const animate = () => {
      const k = 0.15; // smoothing factor
      current.current.x += (target.current.x - current.current.x) * k;
      current.current.y += (target.current.y - current.current.y) * k;
      inner.style.transform = `rotateX(${current.current.x}deg) rotateY(${current.current.y}deg) scale(${scale})`;
      if (Math.abs(target.current.x - current.current.x) > 0.01 || Math.abs(target.current.y - current.current.y) > 0.01) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        ticking = false;
      }
    };

    const onMove = (e: MouseEvent) => {
      const r = container.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width; // 0..1
      const y = (e.clientY - r.top) / r.height; // 0..1
      target.current = {
        x: (0.5 - y) * (maxRotate * 2),
        y: (x - 0.5) * (maxRotate * 2),
      };
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const onEnter = () => {
      inner.style.transition = "transform 80ms ease";
    };

    const onLeave = () => {
      target.current = { x: 0, y: 0 };
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(animate);
      }
      setTimeout(() => {
        inner.style.transition = "transform 200ms ease";
      }, 0);
    };

    container.addEventListener("mousemove", onMove);
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);
    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [maxRotate, scale]);

  return (
    <div ref={containerRef} style={{ perspective: `${perspective}px` }}>
      <div
        ref={innerRef}
        className={cn("will-change-transform transform-gpu", className)}
        style={{ transformStyle: "preserve-3d" }}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
