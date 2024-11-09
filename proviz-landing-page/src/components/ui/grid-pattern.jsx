import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import PropTypes from 'prop-types';

export const GridPattern = ({
  className,
  yOffset = 0,
  patternColor = "#1E40AF",
  bgColor = "transparent",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(pixelRatio, pixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    let animationFrame;
    let offset = yOffset;

    const animate = () => {
      if (!canvas) return;

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = patternColor;
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

      const cellSize = 30;
      const xOffset = (offset * 0.5) % cellSize;
      const yOffset = offset % cellSize;

      // Vertical lines
      for (let x = -cellSize; x <= canvas.width + cellSize; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x + xOffset, 0);
        ctx.lineTo(x + xOffset, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -cellSize; y <= canvas.height + cellSize; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + yOffset);
        ctx.lineTo(canvas.width, y + yOffset);
        ctx.stroke();
      }

      // Animated gradient circles
      const time = Date.now() * 0.001;
      const radius = 100 + Math.sin(time) * 20;

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        radius
      );

      gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)");
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.globalAlpha = 0.7;
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      offset += 0.5;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [yOffset, patternColor, bgColor]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0", className)}
      style={{ background: bgColor }}
    />
  );
};

GridPattern.propTypes = {
  className: PropTypes.string,
  yOffset: PropTypes.number,
  patternColor: PropTypes.string,
  bgColor: PropTypes.string,
}; 