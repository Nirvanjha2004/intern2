import { cn } from "../../lib/utils";
import PropTypes from 'prop-types';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-[22px] z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
          animate && "animate-pulse",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent)]"
        )}
      />
      <div
        className={cn(
          "relative z-[2] bg-neutral-950 rounded-[20px]",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

BackgroundGradient.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  animate: PropTypes.bool,
};

BackgroundGradient.defaultProps = {
  className: "",
  containerClassName: "",
  animate: true,
}; 