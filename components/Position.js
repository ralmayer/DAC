import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Position({ pos }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      layout
      className={`job-container ${pos}`}
      whileHover={
        !active && {
          scale: 1.05,
          transition: { duration: 0.3 },
        }
      }
      whileTap={{ scale: 0.9 }}
      onTap={() => setActive((prevState) => !prevState)}
      data-position-selected={active}
    >
      {" "}
      <motion.div layout className="job-position">
        <motion.div
          layout
          className="arrow"
          initial={false}
          animate={active ? { rotate: 90, transition: { duration: 0.5 } } : {}}
        >
          <Image
            src="/arrow.svg"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
          />
        </motion.div>{" "}
        <motion.div layout>
          <h3>
            Web development and design{" "}
            <span className="company">@ Civita, 2019-Present</span>
          </h3>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {active ? (
          <p style={{ marginLeft: "52px", marginTop: "1rem", color: "black" }}>
            I eat ass. I eat a lot of ass. I eat ass. I eat a lot of ass. From
            brown to white to asian I eat a lot of ass. I eat way too much ass.
            It affects my nutrition.
          </p>
        ) : (
          <></>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
