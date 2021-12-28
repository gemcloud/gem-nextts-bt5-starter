import * as React from "react";
import LoadingScreen from "../components/bases/LoadingScreeen";
import { css } from "@emotion/react";
import { ScaleLoader, PacmanLoader } from "react-spinners";

const override = css`
  display: block;
  position: absolute;
  left: 45%;
  top: 45%;
`;

const PreloadContext = React.createContext<boolean>(false);

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  /** If the dom is loaded */
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 6000);
  }, []);

  const [showLoader, setShowLoader] = React.useState<boolean>(true);
  React.useEffect(() => {
    /* setTimeout(() => {
      setShowLanguageModal(true);
    }, 3000); */
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      <div
        // className={clsx(
        //   "flex fixed inset-0 justify-center items-center bg-white transition-opacity dark:bg-dark",
        //   preloaded && "opacity-0 pointer-events-none"
        // )}
        // className={`${classes.foo} ${classes.bar} ${classes.baz}`}
        className={`flex fixed inset-0 justify-center items-center bg-white transition-opacity dark:bg-dark
          {preloaded} && "opacity-0 pointer-events-none"`}
      />
      {/* <LoadingScreen /> */}
      {/* <ScaleLoader css={override} color={"#b2e5ff"} loading={showLoader}></ScaleLoader> */}
      <div className="sweet-loading">
        <PacmanLoader
          css={override}
          color={"#b2e5ff"}
          size={25}
          loading={showLoader}
        ></PacmanLoader>
      </div>
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => React.useContext(PreloadContext);
