import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const Reveal = ({
  children,
  delay = 0,
  className = "",
  onLoad = false,
}) => (
  <motion.div
    className={className}
    initial="hidden"
    variants={variants}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    {...(onLoad
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, amount: 0.2 } })}
  >
    {children}
  </motion.div>
);

export default Reveal;
