import { cn } from "../../lib/utils";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

export const BackgroundBeams = ({ className }) => {
  const beamsRef = useRef(null);

  useEffect(() => {
    const moveBeams = (e) => {
      if (!beamsRef.current) return;

      const { clientX, clientY } = e;
      const x = clientX - beamsRef.current.offsetLeft;
      const y = clientY - beamsRef.current.offsetTop;

      beamsRef.current.style.setProperty("--x", `${x}px`);
      beamsRef.current.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", moveBeams);

    return () => {
      window.removeEventListener("mousemove", moveBeams);
    };
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-0 h-full w-full bg-black [--x:0px] [--y:0px]",
        className
      )}
    >
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_800px_at_var(--x)_var(--y),rgba(29,78,216,0.15),transparent_80%)]" />
    </div>
  );
};

BackgroundBeams.propTypes = {
  className: PropTypes.string,
};

BackgroundBeams.defaultProps = {
  className: "",
}; 