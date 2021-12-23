import { useRef, useEffect } from "react";

// What useEffect? what useIsMounted?
// https://stackoverflow.com/questions/62794003/getting-error-argument-of-type-boolean-is-not-assignable-to-para

const useIsMounted = () => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

export default useIsMounted;
