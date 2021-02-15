import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const variants = {
  hidden: { opacity: 0, transition: transition },
  visible: { opacity: 1 },
};

const container = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, y: -20, transition: transition },
  hidden: { opacity: 0, y: 0 },
};

export default function ProjectPage() {
  const router = useRouter();
  const { project } = router.query;

  return (
    <>
      <Head>
        <title>{project}</title>
      </Head>
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        className="project-page"
      >
        <motion.div
          className="exit-button-container"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {" "}
          <Link href={`/`} scroll={false}>
            <a>
              {" "}
              <Image
                src="/exit-button-whiteish.svg"
                alt="joji"
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                loading="eager"
              />
            </a>
          </Link>
        </motion.div>
        <section className="top">
          <div className="wrapper">
            <motion.div className="img-container" exit={{ opacity: 0 }}>
              {" "}
              <Image
                src="/macbook-large.png"
                alt="joji"
                layout="fill"
                objectFit="contain"
                objectPosition="50% 50%"
                loading="eager"
              />
            </motion.div>
          </div>
        </section>
        <section className="project-intro-description">
          <motion.div
            className="section-content"
            variants={container}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="row">
              <motion.div className="description" variants={item}>
                <div className="project-intro-title">
                  <h3>Description:</h3>
                </div>
                <p>
                  {" "}
                  I eat ass. I eat a lot of ass. I eat ass. I eat a lot of ass.
                  From brown to white to asian I eat a lot of ass. I eat way too
                  much ass. It affects my nutrition.{" "}
                </p>
              </motion.div>
              <motion.div className="future-plans" variants={item}>
                <div className="project-intro-title">
                  <h3>Future Plans: </h3>
                </div>
                <p>
                  {" "}
                  I eat ass. I eat a lot of ass. I eat ass. I eat a lot of ass.
                  From brown to white to asian I eat a lot of ass. I eat way too
                  much ass. It affects my nutrition.{" "}
                </p>
              </motion.div>
              <motion.div className="tech-used" variants={item}>
                <div className="project-intro-title">
                  <h3>Built with: </h3>
                </div>
                <p>
                  {" "}
                  I eat ass. I eat a lot of ass. I eat ass. I eat a lot of ass.
                  From brown to white to asian I eat a lot of ass. I eat way too
                  much ass. It affects my nutrition.{" "}
                </p>
              </motion.div>
            </div>
          </motion.div>
          <div style={{ width: "100%", height: "1000px" }}></div>
        </section>
      </motion.main>
    </>
  );
}
