import { ReactNode } from "react";
import { Meta } from "@/includes/seo/SeoMeta";
import { PreloadProvider } from "@/context/PreloadContext";
//import Navigation from "../includes/navigations/GemNavigation";
import Navigation from "@/includes/navigations/GemNavigation";
import Footer from "@/includes/footers/BaseFooter";

// import LangSwitcher from "@/components/bases/LangSwitcher";
// import ModalLanguage from "../modals/LanguageModal";

// interfacce
type ILayoutProps = {
  children: ReactNode;
};

const GemLayout = (props: ILayoutProps) => {
  return (
    <>
      <Meta />
      <Navigation />

      <PreloadProvider>
        {/* <ModalLanguage /> */}
        <main className="pt-16">{props.children}</main>
      </PreloadProvider>
      <Footer />
    </>
  );
};

export default GemLayout;
