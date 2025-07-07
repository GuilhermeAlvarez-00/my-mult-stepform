import { useEffect, useState } from "react";

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

type TViewPort = keyof typeof breakpoints;

export const useScreen = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [viewPort, setViewPort] = useState<TViewPort | null>(null);

  function getCurrentBreakpoint(width: number) {
    let tmpViewport: TViewPort = "sm";

    if (width <= breakpoints.sm) {
      tmpViewport = "sm";
    } else if (width <= breakpoints.md) {
      tmpViewport = "md";
    } else if (width <= breakpoints.lg) {
      tmpViewport = "lg";
    } else {
      tmpViewport = "xl";
    }

    return tmpViewport;
  }

  const getScreenSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setScreenSize({ width, height });

    const tmpViewPort = getCurrentBreakpoint(width);
    setViewPort(tmpViewPort);
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);

    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, []);

  return { ...screenSize, viewPort, breakpoints };
};
