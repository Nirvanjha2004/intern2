import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import PropTypes from 'prop-types';

export const MeteorShower = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Meteor {
      constructor() {
        this.reset();
      }

      reset() {
        // Start from top of screen
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.length = Math.random() * 100 + 50;
        this.speed = Math.random() * 10 + 5;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = 1;
        // Diagonal trajectory
        this.angle = (Math.random() * 30 + 30) * (Math.PI / 180);
      }

      draw() {
        if (!ctx) return;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;
        
        // Create gradient for meteor tail
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          endX, endY
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${this.opacity})`); // Blue
        gradient.addColorStop(0.4, `rgba(139, 92, 246, ${this.opacity * 0.6})`); // Purple
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size;
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity *= 0.99;

        if (this.y > canvas.height || this.opacity < 0.1) {
          this.reset();
        }
      }
    }

    const meteors = Array.from({ length: 20 }, () => new Meteor());

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      meteors.forEach(meteor => {
        meteor.draw();
        meteor.update();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
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

MeteorShower.propTypes = {
  className: PropTypes.string,
}; 