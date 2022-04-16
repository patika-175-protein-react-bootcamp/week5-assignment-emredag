import { useState, useLayoutEffect } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const updateSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.addEventListener("resize", updateSize);
  }, []);
  return [width, height];
};

export default useWindowSize;
