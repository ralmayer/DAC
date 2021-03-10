import "../styles/globals.css";
import "../styles/primitives.css";
import "../styles/spacing.css";
import "../styles/utils.css";
import "../styles/flexUtils.css";
import "../styles/homeAbout.css";
import "../styles/custom.css";
import "../styles/projects.css";
import "../styles/iphone.css";
import "../styles/newsletter.css";
import "../styles/contact.css";
import "../styles/project-page.css";

import { AnimatePresence } from "framer-motion";

import AnimationContextWrapper from "../contexts/AnimationContextWrapper";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimationContextWrapper>
      {" "}
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AnimationContextWrapper>
  );
}

export default MyApp;
