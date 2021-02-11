import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useInView } from "react-intersection-observer";

import AnimationContext from "../contexts/AnimationContext";

export default function Newsletter({ variants, childVariants }) {
  const { animationState, setAnimationState } = useContext(AnimationContext);

  const [email, setEmail] = useState(false);

  const { ref, inView = true } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(
    () =>
      inView &&
      setAnimationState((prevState) => ({ ...prevState, newsletter: true })),
    [inView]
  );

  return (
    <section className="home newsletter" id="newsletter" ref={ref}>
      <motion.div
        initial={false}
        animate={animationState.newsletter ? "visible" : "hidden"}
        variants={variants}
        className="section-content"
      >
        {" "}
        <div className="text-col">
          <motion.h2 variants={childVariants}>More is on the way</motion.h2>
          <motion.p variants={childVariants}>
            Subscribe to Leon’s newsletter to get updates regarding upcoming
            projects & events.
          </motion.p>
        </div>
        <motion.div className="email-container" variants={childVariants}>
          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              setEmail(true);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ values, isSubmitting }) => (
              <Form>
                {" "}
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="large-8"
                  placeholder="your email"
                  onClick={() => setEmail(false)}
                />
                <motion.button
                  layout
                  type="submit"
                  className="large-4"
                  disabled={isSubmitting}
                >
                  <AnimatePresence exitBeforeEnter>
                    {email && !values.email ? (
                      <motion.div
                        layout
                        key="sneed"
                        initial={{ y: 20, opacity: 0, display: "none" }}
                        animate={{ y: 0, opacity: 1, display: "block" }}
                        exit={{ y: -20, opacity: 0, display: "none" }}
                      >
                        Thank u
                      </motion.div>
                    ) : (
                      <motion.div
                        layout
                        key="feed"
                        initial={{ y: 20, opacity: 0, display: "none" }}
                        animate={{ y: 0, opacity: 1, display: "block" }}
                        exit={{ y: -20, opacity: 0, display: "none" }}
                      >
                        Subscribe
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </motion.div>
    </section>
  );
}
