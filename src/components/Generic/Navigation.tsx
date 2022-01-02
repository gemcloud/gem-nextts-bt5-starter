import { useEffect, useState } from "react";
import { menuItems } from "../../../gemDemoData/gemMenuItems";
import GemNavigationLink from "./GemNavigationLink";
// import { motion } from "framer-motion";
import { useRouter } from "next/router";
import EmailLink from "./EmailLink";
import SocialIcons from "./SocialIcons";
import Hamburger from "./Hamburger";
import Cross from "./Cross";
import useIsMobile from "@/hooks/useIsMobile";

function Navigation() {
  const { query } = useRouter();
  const { internalLink } = query;

  const [isOpen, setIsOpen] = useState(false);
  // Use isMobile to ensure that the navigation is always open in desktop
  const isMobile = useIsMobile();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" }
  };

  const transition = {
    type: "spring",
    mass: 0.7,
    damping: isMobile ? 13 : 10,
    delay: isMobile ? 0 : 0.5
  };

  // return HTML
  return (
    <>
      <Hamburger onClick={openMenu} />
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <Cross onClick={closeMenu} />
        <div className="mb-24 md:mb-0 md:ml-12 p-4 bg-opacity-0 md:bg-opacity-nav bg-white tracking-wider justify-center md:justify-left">
          <EmailLink className="" />
        </div>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            {/* loop item */}
            {menuItems.map(menuItem => (
              <GemNavigationLink
                key={`nav-link-${menuItem.id}`}
                closeMenu={closeMenu}
                text={menuItem.name}
                href={menuItem.hrefUrl}
                scrollTo={menuItem.scrollTo}
                external={menuItem.external}
                ariaLabel=""
              />
            ))}
            {/* add more item search | language | SocialIcon */}
            <li className="inline-block py-3 md:py-0 px-1 md:border-l-2 border-pink-100">
              <SocialIcons />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
