import { useEffect, useContext } from "react";
import AnimationContext from "../contexts/AnimationContext";
import Navlink from "../components/Navlink";
import Bodylink from "../components//Bodylink";
import Iphone from "../components/Iphone";
import Position from "../components/Position";
import Projects from "../components/Projects";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Credits from "../components/Credits";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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

export default function Home({ projectsData }) {
  const { animationState, setAnimationState } = useContext(AnimationContext);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(
    () =>
      inView &&
      setAnimationState((prevState) => ({ ...prevState, about: true })),
    [inView]
  );

  return (
    <>
      <Head>
        <title>Leon Mayer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Fullstack developer and designer" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Typescript, React, Nextjs, Fullstack, graphql"
        />
        <meta name="author" content="Leon Mayer" />
      </Head>
      <nav>
        <div
          className="large-1"
          // edit this out into css
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <span className="eye" />
        </div>
        <div
          className="large-10 "
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <Navlink name="Resume" destination="e" importance="1" />
          <Navlink name="About" destination="#about" />
          <Navlink name="Case Studies" destination="#projects" />
          <Navlink name="Newsletter" destination="#newsletter" />
          <Navlink name="Contacts" destination="#contact" importance="2" />
        </div>
        <div
          className="large-1"
          // edit this out into css
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            className="paperplane"
            // replace with actual email later
            onClick={() => (window.location = "mailto:xyz@abc.com")}
          />
        </div>
      </nav>
      <main>
        <section className="home intro">
          {/* fix this later */}
          <div
            style={{
              position: "relative",
              maxWidth: "1440px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {" "}
            <div className="cmGXmw"></div>
            <div className="wrapper rounded">
              <div className="section-content hero-section">
                <div className="row">
                  <div className="large-7 column text-col">
                    <h1>
                      Leon is a <br />{" "}
                      <span className="important">designer</span> and <br /> a{" "}
                      <span className="important">
                        full-stack <br /> developer.
                      </span>{" "}
                    </h1>
                    <p>
                      I eat ass. I eat a lot of ass. I eat ass. I <br /> eat a
                      lot of ass. From brown to white <br /> to asian I eat a
                      lot of ass. I eat way too <br />
                      much ass. It affects my nutrition.{" "}
                    </p>
                    <div className="bodylink-container">
                      <Bodylink name={"Case Studies"} destination="#projects" />
                      <Bodylink name={"Learn more"} destination="#about" />
                    </div>
                  </div>
                  <div className="large-5 column">
                    <Iphone />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <motion.section
          className="home about"
          id="about"
          ref={ref}
          initial={false}
          animate={animationState.about ? "visible" : "hidden"}
          exit="hidden"
          variants={container}
        >
          <div className="about-grid">
            <motion.div className="tech" variants={item}>
              <div className="tech-icons-grid-container">
                <div className="tech-icon js">
                  <Image
                    alt="js"
                    src="/js.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="tech-icon js">
                  <Image
                    alt="ts"
                    src="/ts.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="tech-icon js">
                  <Image
                    alt="react.js"
                    src="/react.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="tech-icon js">
                  <Image
                    alt="next.js"
                    src="/next.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="tech-icon js">
                  <Image
                    alt="node.js"
                    src="/node.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="tech-icon js">
                  <Image
                    alt="graphql"
                    src="/graphql.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="tech-icon js">
                  <Image
                    alt="google cloud services"
                    src="/gcp.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
                <div className="tech-icon js">
                  <Image
                    alt="swiftlang"
                    src="/swift.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="50% 50%"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div className="textbox tech-textbox" variants={item}>
              <h2>
                Here are some of the tehcnologies & libraries that I have been
                using lately.
              </h2>
            </motion.div>
          </div>
          <div
            className="about-grid second-row"
            initial={false}
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
            variants={container}
            ref={ref}
          >
            {" "}
            <motion.div className="textbox worked-textbox" variants={item}>
              <h2>And here are the places I have worked at:</h2>
            </motion.div>
            <motion.div className="textbox worked" variants={item}>
              <div className="jobs-container">
                {" "}
                <div className="jobs-grid">
                  {" "}
                  <Position pos={"pos1"} />
                  <Position pos={"pos2"} />
                  <Position pos={"pos3"} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        <Projects
          data={projectsData}
          variants={container}
          childVariants={item}
        />
        <Newsletter variants={container} childVariants={item} />
        <Contact variants={container} childVariants={item} />
        <Credits variants={container} childVariants={item} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projectsData = [
    {
      id: 1,
      title: "qGit",
      pitch: "one app for ass eating",
      text:
        "I eat ass. I eat a lot of ass. From brown to white to Asian I eat a lot of ass.",
      destination: "project-page",
      flipped: false,
      img: "/macbook-large.png",
    },
    {
      id: 2,
      title: "Civita",
      pitch: "one app for ass eating",
      text:
        "I eat ass. I eat a lot of ass. From brown to white to Asian I eat a lot of ass.",
      destination: "project-page",
      flipped: true,
      img: "/macbook-large.png",
    },
    {
      id: 3,
      title: "Player",
      pitch: "one app for ass eating",
      text:
        "I eat ass. I eat a lot of ass. From brown to white to Asian I eat a lot of ass.",
      destination: "project-page",
      flipped: false,
      img: "/macbook-large.png",
    },
  ];
  return {
    props: {
      projectsData,
    },
  };
}
