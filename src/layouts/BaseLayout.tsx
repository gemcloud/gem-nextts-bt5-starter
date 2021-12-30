import { ReactNode } from "react";
import { Meta } from "../includes/seo/SeoMeta";

// import Navigation from "@/includes/navigations/RightmenuNavigation";
import Footer from "@/includes/footers/BaseFooter";

// interfacce
type ILayoutProps = {
  children: ReactNode;
};

// const LayoutThomas = ({ children }) => {
const BaseLayout = (props: ILayoutProps) => {
  return (
    <>
      <Meta />
      {/* <Navigation /> */}
      <main className="pt-16">{props.children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
