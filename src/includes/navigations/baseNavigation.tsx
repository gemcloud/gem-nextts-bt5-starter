import * as React from "react";
import { useEffect, useState } from "react";

const BaseNavigation = () => {
  const [clientWindowHeight, setClientWindowHeight] = React.useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [padding, setPadding] = useState(30);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [boxShadow, setBoxShadow] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 600;

    if (backgroundTransparacyVar < 1) {
      let paddingVar = 30 - backgroundTransparacyVar * 20;
      let boxShadowVar = backgroundTransparacyVar * 0.1;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    //js code menu looks wroking!!!
    const links = document.querySelectorAll(".nav-item");
    const sections = document.querySelectorAll("section");
    let activeLink = 0;

    links.forEach((link, i) => {
      link.addEventListener("click", () => {
        if (activeLink != i) {
          links[activeLink].classList.remove("active");
          link.classList.add("active");
          sections[activeLink].classList.remove("active");

          setTimeout(() => {
            activeLink = i;
            sections[i].classList.add("active");
          }, 1000);
        }
      });
    });
  });

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        padding: `${padding}px 0px`,
        boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        backdropFilter: `saturate(180%) blur(20px)`
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/indexFirebase#">
                blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BaseNavigation;
