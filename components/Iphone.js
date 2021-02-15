import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const initial = { about: false, cv: false, projects: false, contact: false };

const jobFocus = { civita: false, admorris: false, goic: false };

const imageProps = {
  layout: "fill",
  objectFit: "contain",
  objectPosition: "50% 50%",
};

const variants = {
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 },
  },
  exit: { y: 20, opacity: 0 },
};

export default function Iphone() {
  const [state, setState] = useState({ ...initial, about: true });
  const [cvFocus, setCvFocus] = useState(jobFocus);

  useEffect(() => setCvFocus(jobFocus), [state]);

  const handleCardClose = () => {
    setState(initial);
    setCvFocus(jobFocus);
  };

  return (
    <>
      <div className="iphone-container">
        <div className="iphone-frame-element body">
          <Image
            alt="iphone body"
            src="/Iphone-large-body.png"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
            loading="eager"
          />
        </div>
        <div className="iphone-home">
          {" "}
          <div className="iphone-home-halfsection">
            <Image
              alt="logo"
              src="/Iphone-home-logo.svg"
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
              loading="eager"
            />
          </div>
          <div className="iphone-home-halfsection buttons">
            {" "}
            <div className="iphone-home-button-grid">
              <div
                className="iphone-home-button about"
                onClick={() =>
                  setState((prevState) => ({
                    ...initial,
                    about: true,
                  }))
                }
              >
                <h2>info</h2>
              </div>
              <div
                className="iphone-home-button cv"
                onClick={() =>
                  setState((prevState) => ({
                    ...initial,
                    cv: true,
                  }))
                }
              >
                <h2>CV</h2>
              </div>
              <div
                className="iphone-home-button contact"
                onClick={() =>
                  setState((prevState) => ({
                    ...initial,
                    contact: true,
                  }))
                }
              >
                <h2>@</h2>
              </div>
              <div
                className="iphone-home-button projects"
                onClick={() =>
                  setState((prevState) => ({
                    ...initial,
                    projects: true,
                  }))
                }
              >
                <h2>work</h2>
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {state.about && (
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.9}
              onDragEnd={(event, info) => {
                info.offset.y > 300 && handleCardClose();
              }}
              initial={{ y: "600px" }}
              animate={{ y: 0 }}
              exit={{ y: "600px" }}
              className="iphone-card about"
            >
              <div className="divider"></div>
              <header>
                <h3>About</h3>
                <div
                  onClick={handleCardClose}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    width: "20px",
                    height: "20px",
                  }}
                >
                  <Image
                    alt="close button"
                    src="/exit-button-black.svg"
                    {...imageProps}
                    loading="eager"
                  />
                </div>
              </header>
              <h2>
                Cheers! <span>👋</span>
              </h2>
              <p>
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {state.cv && (
            <motion.div
              drag="y"
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.9}
              onDragEnd={(event, info) => {
                info.offset.y > 300 && handleCardClose();
              }}
              initial={{ top: "800px" }}
              animate={
                cvFocus.civita || cvFocus.admorris || cvFocus.goic
                  ? { top: "0" }
                  : { top: "15%" }
              }
              exit={{ top: "800px" }}
              className="iphone-card cv"
            >
              <div className="divider"></div>
              <header>
                <h3>Work</h3>
                <div
                  onClick={() => {
                    handleCardClose();
                  }}
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    width: "22px",
                    height: "22px",
                  }}
                >
                  <Image
                    alt="close button"
                    src="/exit-button-grey.svg"
                    {...imageProps}
                    loading="eager"
                  />
                </div>
              </header>

              <AnimateSharedLayout>
                <motion.div
                  layout
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <motion.div
                    layout
                    className="iphone-career"
                    onClick={() =>
                      setCvFocus(({ civita }) => ({
                        ...jobFocus,
                        civita: !civita,
                      }))
                    }
                    style={
                      cvFocus.civita
                        ? { order: 1, background: "white" }
                        : { order: 1 }
                    }
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      layout
                      className="period"
                      style={cvFocus.civita ? { color: "black" } : {}}
                    >
                      2019 - Present
                    </motion.div>
                    <motion.div
                      layout
                      className="position"
                      style={cvFocus.civita ? { color: "black" } : {}}
                    >
                      Web development and design{" "}
                      <span
                        className="company"
                        style={cvFocus.civita ? { color: "black" } : {}}
                      >
                        @ Civita
                      </span>
                    </motion.div>
                    <AnimatePresence>
                      {cvFocus.civita ? (
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      ) : (
                        <></>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    layout
                    style={
                      cvFocus.admorris
                        ? {
                            order: 0,
                            background: "white",
                          }
                        : { order: 2 }
                    }
                    className="iphone-career"
                    onClick={() =>
                      setCvFocus(({ admorris }) => ({
                        ...jobFocus,
                        admorris: !admorris,
                      }))
                    }
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      layout
                      className="period"
                      style={cvFocus.admorris ? { color: "black" } : {}}
                    >
                      2018 - 2019
                    </motion.div>
                    <motion.div
                      layout
                      className="position"
                      style={cvFocus.admorris ? { color: "black" } : {}}
                    >
                      Full-stack developer{" "}
                      <span
                        className="company"
                        style={cvFocus.admorris ? { color: "black" } : {}}
                      >
                        @ Werbeagentur – admorris
                      </span>
                    </motion.div>
                    <AnimatePresence>
                      {cvFocus.admorris ? (
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      ) : (
                        <></>
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <motion.div
                    layout
                    style={
                      cvFocus.goic
                        ? {
                            order: 0,
                            background: "white",
                          }
                        : { order: 3 }
                    }
                    className="iphone-career"
                    onClick={() =>
                      setCvFocus(({ goic }) => ({ ...jobFocus, goic: !goic }))
                    }
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      layout
                      className="period"
                      style={cvFocus.goic ? { color: "black" } : {}}
                    >
                      2014 - 2018
                    </motion.div>
                    <motion.div
                      layout
                      className="position"
                      style={cvFocus.goic ? { color: "black" } : {}}
                    >
                      Software engineer{" "}
                      <span
                        className="company"
                        style={cvFocus.goic ? { color: "black" } : {}}
                      >
                        @ Georgian Oil and Gas Corporation
                      </span>
                    </motion.div>
                    <AnimatePresence>
                      {cvFocus.goic ? (
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      ) : (
                        <></>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              </AnimateSharedLayout>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="iphone-frame-element top">
          <Image
            alt="iphone top"
            src="/Iphone-large-top.png"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
            loading="eager"
          />
        </div>

        <div className="iphone-frame-element bottom">
          <Image
            alt="iphone bottom"
            src="/Iphone-large-bottom.png"
            layout="fill"
            objectFit="contain"
            objectPosition="50% 50%"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
}
