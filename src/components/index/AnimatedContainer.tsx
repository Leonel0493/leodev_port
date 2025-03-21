import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AnimatedContainer = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ height: "0vh", opacity: 0 }}
      animate={{ height: "100vh", opacity: 1 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      className="w-screen bg-[#FEF2D5] relative z-40"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
