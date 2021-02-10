import Bodylink from "./Bodylink";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { useInView } from "react-intersection-observer";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 1 };

export default function Project({
  project: { flipped, destination, title },
  variants,
  childVariants,
}) {
  const [triggered, setTriggered] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleClick = () => {
    setTriggered((prevState) => !prevState);
  };

  return (
    <motion.div
      className={`project row qgit ${flipped && "flipped"}`}
      id={title}
      style={triggered ? { zIndex: 1000000 } : {}}
      variants={variants}
      initial={false}
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <motion.div className={`text-container large-7`}>
        <div className="text-col">
          <motion.h3 variants={childVariants}>{title}</motion.h3>
          {/* make proper css */}
          <motion.h1
            variants={childVariants}
            style={{
              letterSpacing: "-0.04em",
              lineHeight: "1.2em",
              fontSize: "72px",
            }}
          >
            One app for <br />
            ass eating
          </motion.h1>
          <motion.p variants={childVariants}>
            I eat ass. I eat a lot of ass. <br />
            From brown to white to <br /> Asian I eat a lot of ass.
          </motion.p>
          <motion.div className="bodylink-container" variants={childVariants}>
            <Bodylink
              name="Learn more"
              destination={title}
              func={setTriggered}
            />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        layout
        className="project-curtain"
        initial={false}
        animate={{ opacity: 0, display: "none" }}
        exit={{ display: "block", opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className={`image-shell large-5 `}>
        <motion.div
          layout
          className="image-container"
          onClick={handleClick}
          data-isclicked={triggered}
          transition={{ ...transition, delay: 1.2 }}
        >
          <Image
            src="/macbook-large.png"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
