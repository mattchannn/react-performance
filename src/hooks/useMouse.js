import { useState, useEffect } from "react";
import debounce from "lodash/debounce";

const customDebounceFunction = (func, delay) => {
  let timeoutId;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const customDebounceFunction2 = (func, delay) => {
  let timer;
  return function () {
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

  

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
