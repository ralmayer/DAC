import { useState } from "react";
import AnimationContext from "./AnimationContext";

const AnimationContextWrapper = ({ children }) => {
  const [animationState, setAnimationState] = useState({});

  return (
    <AnimationContext.Provider value={{ animationState, setAnimationState }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationContextWrapper;
