import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => window.removeEventListener("resize",resize);
  }, [width]);

  return [width, setWidth];
};

export default useWindowWidth;
