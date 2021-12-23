import { ReactNode } from "react";
import { Meta } from "../includes/seo/SeoMeta";

import Navigation from "../includes/navigations/firstLandingNavigation";
import Footer from "../includes/footers/baseFooter";

// interfacce
type ILayoutProps = {
  children: ReactNode;
};

// const LayoutThomas = ({ children }) => {
const firstlandingLayout = (props: ILayoutProps) => {
  return (
    <>
      <Meta />
      <Navigation />
      <main className="pt-16">{props.children}</main>
      <Footer />
    </>
  );
};

export default firstlandingLayout;
