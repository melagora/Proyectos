import type { ReactNode } from "react";
import useInView from "../hooks/useInview";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal = ({ children, delay = 0, className = "" }: Props) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`fade-up ${isVisible ? "show" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
