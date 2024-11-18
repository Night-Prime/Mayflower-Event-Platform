import React from "react";
import { useInView } from "framer-motion";

const useScrollAnimation = (animation) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return { ref, animate: isInView ? "visible" : "hidden", variants: animation };
};

export default useScrollAnimation;
