import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import PropTypes from 'prop-types';

export const MatrixRain = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const columns = Math.floor(width / 20);
    const drops = new Array(columns).fill(1);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789@#$%^&*";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#0f0";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 20;
        const y = drops[i] * 20;

        // Create gradient effect
        const gradient = ctx.createLinearGradient(x, y - 20, x, y);
        gradient.addColorStop(0, "rgba(29, 78, 216, 0)"); // blue-600
        gradient.addColorStop(1, "rgba(29, 78, 216, 1)"); // blue-600
        ctx.fillStyle = gradient;

        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 z-0", className)}
      style={{ background: "transparent" }}
    />
  );
};

MatrixRain.propTypes = {
  className: PropTypes.string,
}; 