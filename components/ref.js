import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useMotionValue,
  useElementScroll,
} from "framer-motion";

function App() {
  const ref = useRef();
  const parent = useRef();
  const [cardOffset, setCardOffset] = useState(0);
  const [cardOpen, setCardOpen] = useState(false);

  const toggle = (e) => {
    if (e) return false;
    else return true;
  };

  return (
    <main>
      <section>
        <div className="section-content">
          <div
            ref={parent}
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15em",
              position: "relative",
              overflow: "hidden",
              height: "700px",
              width: "375px",
              backgroundColor: "black",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                width: "100px",
                height: "20px",
                cursor: "pointer",
                zIndex: 1000,
              }}
              onClick={() => setCardOpen((prevState) => toggle(prevState))}
            >
              click
            </div>
            <AnimatePresence>
              {cardOpen && (
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "gray",
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  ee
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {cardOpen && (
                <motion.div
                  ref={ref}
                  id="eee"
                  drag="y"
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  onDragEnd={(event, info) => {
                    info.offset.y > 300 && setCardOpen(false);
                  }}
                  dragElastic={0.9}
                  initial={{ top: "900px" }}
                  animate={cardOpen && { top: "300px", opacity: 1 }}
                  exit={{ top: "900px" }}
                  onDrag={(event, info) => setCardOffset(info.offset.y)}
                  style={{
                    position: "absolute",
                    width: "100%",
                    backgroundColor: "white",
                    height: "100px",
                    borderRadius: "20px",
                    height: "1000px",
                  }}
                >
                  eeee
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
