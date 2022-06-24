import { useState, useEffect } from "react";

export default function useCounter(count=1) {
  const [counter, setCounter] = useState(0);

  useEffect(function () {
    const interval = setInterval(function () {
      setCounter((prev) => {
        return prev + count;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return counter;
}
