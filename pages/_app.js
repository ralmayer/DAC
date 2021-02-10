import "../styles/globals.css";
import "../styles/primitives.css";
import "../styles/spacing.css";
import "../styles/utils.css";
import "../styles/flexUtils.css";
import "../styles/homeAbout.css";
import "../styles/e.css";
import "../styles/custom.css";
import "../styles/burger.css";
import "../styles/projects.css";
import "../styles/iphone.css";
import "../styles/newsletter.css";
import "../styles/contact.css";
import "../styles/project-page.css";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
