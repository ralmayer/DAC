import { useEffect, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const containerVariants = {
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: { x: -300, opacity: 0 },
};

const childVariants = {
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -20,
    opacity: 0,
  },
};

export default function ListTest() {
  const [state, setState] = useState(false);

  useEffect(() => console.log(state), [state]);
  return (
    <motion.div
      className="testcube-container"
      variants={containerVariants}
      initial="exit"
      animate="enter"
    >
      <motion.div
        className="testcube"
        onClick={() => setState((prevState) => !prevState)}
        variants={childVariants}
      ></motion.div>
      <motion.div className="testcube" variants={childVariants}></motion.div>
      <motion.div className="testcube" variants={childVariants}></motion.div>
    </motion.div>
  );
}
