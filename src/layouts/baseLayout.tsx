import { ReactNode } from "react";
import { Meta } from "../../src/includes/seo/SeoMeta";

// import Navigation from "../../src/includes/navigations/baseNavigation";
import Navigation from "../includes/navigations/RightmenuNavigation";
import Footer from "../../src/includes/footers/baseFooter";

// interfacce
type ILayoutProps = {
  children: ReactNode;
};

// const LayoutThomas = ({ children }) => {
const baseLayout = (props: ILayoutProps) => {
  return (
    <>
      <Meta />
      <Navigation />
      <main className="pt-16">{props.children}</main>
      <Footer />
    </>
  );
};

export default baseLayout;
