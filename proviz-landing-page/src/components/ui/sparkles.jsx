"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";
import PropTypes from 'prop-types';

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
  particleOffsetX,
  particleOffsetY,
}) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particleCount = Math.floor((size.width * size.height) / particleDensity);
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * size.width,
      y: Math.random() * size.height,
      size: Math.random() * (maxSize - minSize) + minSize,
      speedX: Math.random() * 0.5 - 0.25,
      speedY: Math.random() * 0.5 - 0.25,
    }));

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, size.width, size.height);
      particles.current.forEach((particle) => {
        particle.x += particle.speedX + (particleOffsetX || 0);
        particle.y += particle.speedY + (particleOffsetY || 0);

        if (particle.x < 0) particle.x = size.width;
        if (particle.x > size.width) particle.x = 0;
        if (particle.y < 0) particle.y = size.height;
        if (particle.y > size.height) particle.y = 0;

        ctx.fillStyle = particleColor || "#fff";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [size, minSize, maxSize, particleColor, particleDensity, particleOffsetX, particleOffsetY]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0", className)}
      style={{ background }}
    />
  );
};

SparklesCore.propTypes = {
  background: PropTypes.string,
  minSize: PropTypes.number,
  maxSize: PropTypes.number,
  particleDensity: PropTypes.number,
  className: PropTypes.string,
  particleColor: PropTypes.string,
  particleOffsetX: PropTypes.number,
  particleOffsetY: PropTypes.number,
};

SparklesCore.defaultProps = {
  background: "transparent",
  minSize: 0.4,
  maxSize: 1,
  particleDensity: 10000,
  className: "",
  particleColor: "#fff",
  particleOffsetX: 0,
  particleOffsetY: 0,
}; 