import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Image from "next/image";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9], delay: 0.7 };

export default function Test() {
  const [state, setState] = useState(false);

  return (
    <motion.main className="rel">
      <motion.div
        key="curtain"
        initial={false}
        animate={{ opacity: 0, display: "none" }}
        exit={{ display: "block", opacity: 1 }}
        className="curtain"
      ></motion.div>

      <section>
        <div className="section-content rel">
          {" "}
          <Link href="/pp">
            <a
              onClick={() => {
                setState(true);
                console.log(state);
              }}
            >
              view a project
            </a>
          </Link>
          <motion.div
            className="row rel"
            initial={{ justifyContent: "space-between" }}
            animate="animate"
          >
            <motion.div
              initial={false}
              animate={{
                top: 0,
                left: 0,
                width: "41.66667%",
                height: "280px",
                position: "relative",
              }}
              style={state && { zIndex: "2000" }}
              exit={{
                position: "absolute",
                top: "10rem",
                width: "100%",
                height: "500px",
              }}
              transition={transition}
            >
              <Image
                src="/joji.jpg"
                alt="joji"
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
              />
            </motion.div>
            <motion.div
              className={`bg:gray large-5`}
              initial="initnial"
              animate="animate"
              // exit={{ display: "none" }}
            >
              eee
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}
