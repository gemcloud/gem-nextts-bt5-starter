import * as React from "react";
import { useEffect, useState } from "react";

interface IUser {
  name: string;
}

type iWidthHeight = {
  width: number;
  height: number;
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [user, setUser] = useState<IUser>({ name: "Jon" });
  //   const [windowSize, setWindowSize] = React.useState<iWidthHeight>({
  //     width: 0,
  //     height: 0
  //   });
  const [windowSize, setWindowSize] = React.useState<iWidthHeight>();

  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  React.useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default useWindowSize;
