import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const list = {
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", duration: 2, staggerChildren: 0.3 },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};
export default function Test2() {
  const [state, setState] = useState(false);

  return (
    // <motion.div className="ass-parent">
    //   <motion.div className="ass-child"></motion.div>{" "}
    //   <Link href="/">
    //     <a>
    //       {" "}
    //       <motion.div
    //         initial="iniial"
    //         animate="animate"
    //         exit="exit"
    //         transition={{ duration: 2 }}
    //         layout
    //         className="ass-child animate-child"
    //         data-isclicked={state}
    //         onClick={() => setState((prevState) => !prevState)}
    //       ></motion.div>
    //     </a>
    //   </Link>
    // </motion.div>
    <motion.div
      className="asscontainer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={list}
    >
      <motion.div variants={item} className="kid"></motion.div>
      <motion.div variants={item} className="kid"></motion.div>
      <motion.div variants={item} className="kid"></motion.div>
    </motion.div>
  );
}
