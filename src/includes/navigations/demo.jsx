import React, { useState, useEffect } from "react";

import { Link, withRouter } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navigation(props) {
  const [showNavigationMobile, setNavigationMobile] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <div
      className="navbar-component"
      style={offset >= 50 ? { marginBottom: "5.5rem" } : null}
    >
      <nav
        className={`navbar navbar-expand-lg navbar-light py-3 ${
          offset >= 50 ? "fixed-top" : null
        }`}
        style={
          offset >= 50
            ? {
                background: "white",
                transition: ".5s",
                boxShadow: "0 0.5rem 1rem 0 rgba(0,0,0,.1)"
              }
            : null
        }
      >
        <div className="container">
          <AnchorLink
            className="navbar-brand js-scroll-trigger"
            offset="110"
            style={offset >= 50 ? { color: "#3b4858" } : null}
            onClick={() =>
              setNavigationMobile(showNavigationMobile ? !showNavigationMobile : null)
            }
            href="#landing"
          >
            <img src="/assets/img/logo.png" />
          </AnchorLink>
          <button
            className="navbar-toggler navbar-toggler-right collapsed"
            type="button"
            onClick={() => setNavigationMobile(!showNavigationMobile)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse"
            id="navbarResponsive"
            style={showNavigationMobile ? { display: "block" } : null}
          >
            <ul className="navbar-nav ml-auto my-2 my-lg-0">
              <li className="nav-item">
                <AnchorLink
                  className="nav-link"
                  offset="110"
                  style={offset >= 50 ? { color: "#3b4858" } : null}
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#about"
                >
                  About us
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  className="nav-link"
                  offset="110"
                  style={offset >= 50 ? { color: "#3b4858" } : null}
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#services"
                >
                  Services
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink
                  className="nav-link"
                  offset="110"
                  style={offset >= 50 ? { color: "#3b4858" } : null}
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#products"
                >
                  Products
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink
                  className="nav-link"
                  offset="110"
                  style={offset >= 50 ? { color: "#3b4858" } : null}
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="#contact"
                >
                  Contact us
                </AnchorLink>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  offset="110"
                  style={offset >= 50 ? { color: "#3b4858" } : null}
                  onClick={() =>
                    setNavigationMobile(
                      showNavigationMobile ? !showNavigationMobile : null
                    )
                  }
                  href="https://blog.floyet.com"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
