import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const updateMousePosition = debounce((ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  }, 100);

  // Try to use the method below and hover on revenue, it will be so laggy
  // const updateMousePosition = (ev) => {
  //   setMousePosition({ x: ev.clientX, y: ev.clientY });
  // };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [updateMousePosition]);
  return mousePosition;
};

export default useMousePosition;
