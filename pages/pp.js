import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Pp() {
  return (
    <motion.main
      initial="exit"
      animate="enter"
      exit="exit"
      className="rel"
      style={{ backgroundColor: "black", minHeight: "100vh" }}
    >
      <section>
        <div className="section-content" style={{ overflow: "hidden" }}>
          <Link href="/test">
            <a>go home</a>
          </Link>
          <div
            style={{
              height: "500px",

              marginTop: "10rem",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {" "}
            <Image
              src="/joji.jpg"
              alt="joji"
              layout="fill"
              objectFit="contain"
              objectPosition="50% 50%"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </motion.main>
  );
}
