import Bodylink from "./Bodylink";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useContext } from "react";

import { useInView } from "react-intersection-observer";

import AnimationContext from "../contexts/AnimationContext";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 1 };

export default function Project({
  project: { flipped, title },
  variants,
  childVariants,
}) {
  const { animationState, setAnimationState } = useContext(AnimationContext);

  const [triggered, setTriggered] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const handleClick = () => {
    setTriggered((prevState) => !prevState);
  };

  useEffect(() => {
    const link = document.getElementById(`${title}-project-link`);
    inView &&
      setAnimationState((prevState) => ({ ...prevState, [title]: true }));
    triggered && setTimeout(() => link.click(), 3000);
  }, [inView, triggered]);

  return (
    <motion.div
      className={`project row qgit ${flipped && "flipped"}`}
      id={title}
      style={triggered ? { zIndex: 1000000 } : {}}
      variants={variants}
      initial={false}
      animate={animationState[title] ? "visible" : "hidden"}
      ref={ref}
    >
      <motion.div className={`text-container large-7 medium-12`}>
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
            <div className="bodylink" onClick={() => setTriggered(true)}>
              Learn more {">"}
            </div>
            <div style={{ visibility: "hidden" }}>
              {" "}
              <Bodylink
                name="Learn more"
                destination={title}
                id={title}
                func={setTriggered}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        layout
        className="project-curtain"
        initial={false}
        animate={
          triggered
            ? { display: "block", opacity: 1 }
            : { display: "none", opacity: 0 }
        }
        exit={{ display: "block", opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div className={`image-shell large-5 medium-12`}>
        <motion.div
          layout
          className="image-container"
          data-isclicked={triggered}
          transition={{ ...transition, delay: 1.2 }}
        >
          <Image
            alt={title}
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
