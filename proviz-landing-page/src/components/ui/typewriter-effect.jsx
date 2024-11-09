import { cn } from "../../lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView]);

  const renderWords = words.map((word, idx) => {
    return (
      <motion.span
        key={`word-${idx}`}
        className={cn("opacity-0", word.className)}
      >
        {word.text}
        {idx < words.length - 1 ? " " : ""}
      </motion.span>
    );
  });

  return (
    <div
      ref={scope}
      className={cn(
        "text-center text-2xl md:text-5xl font-bold",
        className
      )}
    >
      {renderWords}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className={cn("inline-block rounded-sm w-[4px] h-4 md:h-8 bg-blue-500", cursorClassName)}
      />
    </div>
  );
};

TypewriterEffect.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      className: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
  cursorClassName: PropTypes.string,
};

TypewriterEffect.defaultProps = {
  className: "",
  cursorClassName: "",
}; 