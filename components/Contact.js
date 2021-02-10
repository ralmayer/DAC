import Bodylink from "../components//Bodylink";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact({ variants, childVariants }) {
  const { ref, inView = true } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.section className="home contact" ref={ref}>
      {" "}
      <div className="section-content">
        <div className="row">
          <motion.div
            className="text-col"
            initial={false}
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
            variants={variants}
          >
            <motion.h3 variants={childVariants}>Contact</motion.h3>
            <motion.h1 variants={childVariants}>
              Let's build something <br />
              great together
            </motion.h1>
            <motion.p variants={childVariants}>
              If you'd like to talk, just <br />
              send me an email at <br /> <span>contact@leonamayer.com</span>
            </motion.p>
            <motion.div className="bodylink-container" variants={childVariants}>
              <Bodylink name={"Contact"} destination={"e"} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
