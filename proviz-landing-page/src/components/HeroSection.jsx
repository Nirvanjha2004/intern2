import { BackgroundBeams } from "./ui/background-beams";
import { TypewriterEffect } from "./ui/typewriter-effect";
import PropTypes from 'prop-types';

export const HeroSection = ({ onApplyClick }) => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "your",
    },
    {
      text: "future",
    },
    {
      text: "with",
    },
    {
      text: "AI.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Proviz School of AI
        </h1>
        <TypewriterEffect words={words} />
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Transform your career with cutting-edge AI education. Join the next generation of AI innovators and leaders.
        </p>
        <div className="flex gap-4 justify-center relative z-10 mt-4">
          <a 
            href="#courses"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Explore Courses
          </a>
          <button 
            onClick={onApplyClick}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-blue-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Apply Now
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

HeroSection.propTypes = {
  onApplyClick: PropTypes.func.isRequired,
};