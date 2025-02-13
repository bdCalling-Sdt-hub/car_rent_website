"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const SectionAnimation = ({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const animationDistance = typeof window !== "undefined" && window.innerWidth < 768 ? 200 : 800;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, x: direction === "left" ? -animationDistance : animationDistance }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        damping: 20,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionAnimation;
